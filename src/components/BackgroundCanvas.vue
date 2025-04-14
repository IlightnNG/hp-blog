<template>
  <div class="canvas-container" ref="containerRef">
    <div 
      class="cursor-dot"
      :style="{ 
        transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
        opacity: cursorVisible ? 1 : 0 
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';

const containerRef = ref(null);
const cursorPos = ref({ x: 0, y: 0 });
const cursorVisible = ref(false);

// 性能优化：使用常量
const TRIANGLE_SIZE = 60;
const TRIANGLE_WIDE = TRIANGLE_SIZE * Math.sqrt(3) / 2;
const COLORS = {
  base: new THREE.Color(0xbde0fe),
  wireframe: new THREE.Color(0xffffff)
};

// 添加新的常量
const ANIMATION_CONFIG = {
  duration: 0.6,
  ease: "power2.inOut",
  flipHeight: 100, // 翻折高度
  colorTransition: 0.3 // 颜色过渡时间
};

let scene, camera, renderer;
let instancedMesh;
let raycaster;
let mouse;



// 性能优化：使用 TypedArray 存储三角形数据
const triangleData = {
  positions: new Float32Array(),
  adjacentTriangles: [], // 存储每个三角形的邻近三角形索引
  groups: new Uint8Array(), // 存储每个三角形的组
  isFlipped: new Uint8Array() // 存储每个三角形是否已翻折
};

// 修改着色器代码
const vertexShader = `

  attribute vec3 instanceColor;       // 颜色
  attribute float instanceRotation;   // 旋转
  attribute float animationTime;      // 动画

  varying vec3 vColor;
  varying float vAnimationTime;

  
  void main() {
    vColor = instanceColor;
    vAnimationTime = animationTime;

    vec4 worldPosition = instanceMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * worldPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vAnimationTime;
  
  void main() {
    vec3 finalColor = vColor;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const initThreeJS = () => {
  const container = containerRef.value;
  
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    1,
    1000
  );
  camera.position.z = 100;
  
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 1);
  container.appendChild(renderer.domElement);
  
  // 性能优化：使用环境光替代点光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  
  createTriangleGrid();
  animate();
};

const createTriangleGrid = () => {
  const rows = Math.ceil(window.innerHeight / TRIANGLE_SIZE) + 2;
  const cols = Math.ceil(window.innerWidth / TRIANGLE_WIDE) + 2;
  const totalTriangles = rows * cols * 2;
  
  // 创建基础三角形几何体
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    0, 0, 0,
    0, TRIANGLE_SIZE, 0,
    TRIANGLE_WIDE, TRIANGLE_SIZE/2, 0
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  
  // 创建实例化属性
  const instanceColors = new Float32Array(totalTriangles * 3);
  const instanceRotations = new Float32Array(totalTriangles);
  const flipProgress = new Float32Array(totalTriangles);
  const instanceGroups = new Float32Array(totalTriangles);
  const animationId = new Float32Array(totalTriangles).fill(0); // 添加id属性
  const animationTime = new Float32Array(totalTriangles).fill(0); // 添加动画属性
  
  
  // 创建实例化网格
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
  });
  
  instancedMesh = new THREE.InstancedMesh(geometry, material, totalTriangles);
  instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  
  // 初始化三角形数据
  let index = 0;
  const matrix = new THREE.Matrix4();
  const tempPosition = new THREE.Vector3();
  const tempQuaternion = new THREE.Quaternion();
  const tempScale = new THREE.Vector3(1, 1, 1);
  
  // 预计算所有三角形的邻近关系
  triangleData.positions = new Array(totalTriangles * 3);
  triangleData.adjacentTriangles = new Array(totalTriangles);
  triangleData.groups = new Uint8Array(totalTriangles);
  triangleData.isFlipped = new Uint8Array(totalTriangles);
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      for (let i = 0; i < 2; i++) {
        const yColOffset = col % 2 === 1 ? TRIANGLE_SIZE/2 : 0;
        const x = (col * TRIANGLE_WIDE) - window.innerWidth/2;
        const y = (row * TRIANGLE_SIZE) - window.innerHeight/2 - TRIANGLE_SIZE + yColOffset;
        const rotation = i % 2 === 1 ? Math.PI/3 : 0;
        
        // 设置位置和旋转
        tempPosition.set(x, y, 0);
        tempQuaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), rotation);
        
        // 构建矩阵
        matrix.compose(tempPosition, tempQuaternion, tempScale);
        instancedMesh.setMatrixAt(index, matrix);
        
        // 设置颜色
        const color = COLORS.base.clone();
        color.offsetHSL(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.03,
          (Math.random() - 0.5) * 0.04
        );
        
        // 设置实例属性
        instanceColors[index * 3] = color.r;
        instanceColors[index * 3 + 1] = color.g;
        instanceColors[index * 3 + 2] = color.b;
        instanceRotations[index] = rotation;
        flipProgress[index] = 0;
        //instanceGroups[index] = Math.floor(Math.random() * 2);
        instanceGroups[index] = 0;

        // 存储位置数据
        triangleData.positions[index * 3] = col;
        triangleData.positions[index * 3 + 1] = row;
        triangleData.positions[index * 3 + 2] = 0;
        
        // 存储组和状态
        triangleData.groups[index] = instanceGroups[index];
        triangleData.isFlipped[index] = 0;
        
        index++;
      }
    }
  }
  
  // 计算所有三角形的邻近关系
  for (let i = 0; i < totalTriangles; i++) {
    triangleData.adjacentTriangles[i] = findAdjacentTriangles(i);
  }
  console.log(`检查三角形位置:`, triangleData.positions);
  
  // 添加实例属性
  const colorAttribute = new THREE.InstancedBufferAttribute(instanceColors, 3);
  colorAttribute.usage = THREE.DynamicDrawUsage; // 允许动态更新
  geometry.setAttribute('instanceColor', colorAttribute);
  geometry.setAttribute('instanceRotation', new THREE.InstancedBufferAttribute(instanceRotations, 1));
  geometry.setAttribute('flipProgress', new THREE.InstancedBufferAttribute(flipProgress, 1));
  geometry.setAttribute('instanceGroup', new THREE.InstancedBufferAttribute(instanceGroups, 1));
  geometry.setAttribute('animationId', new THREE.InstancedBufferAttribute(animationId, 1));
  geometry.setAttribute('animationTime', new THREE.InstancedBufferAttribute(animationTime, 1));
  

  
  scene.add(instancedMesh);
  
  // 更新实例化网格
  instancedMesh.instanceMatrix.needsUpdate = true;
};

// 修改查找相邻三角形函数
const findAdjacentTriangles = (triangleIndex) => {
  // 获取当前三角形的位置
  const currentCol = triangleData.positions[triangleIndex * 3];
  const currentRow = triangleData.positions[triangleIndex * 3 + 1];
  
  // 存储相邻三角形的索引
  const adjacentTriangles = [];
  
  // 检查所有可能的相邻三角形
  for (let i = 0; i < triangleData.positions.length / 3; i++) {
    if (i === triangleIndex) continue;
    
    const otherCol = triangleData.positions[i * 3];
    const otherRow = triangleData.positions[i * 3 + 1];
    
    // 检查邻近三角形
    if(triangleIndex % 2 === i % 2) continue;
    if(currentCol === otherCol && currentRow === otherRow){
      adjacentTriangles.push(i);
      continue;
    }

    if (triangleIndex % 2 === 0){
      if(currentCol % 2 === 0){
        if(currentCol === otherCol -1 && currentRow === otherRow || currentCol === otherCol -1 && currentRow === otherRow +1){
          adjacentTriangles.push(i);
        }
      }else{
        if(currentCol === otherCol -1 && currentRow === otherRow || currentCol === otherCol -1 && currentRow === otherRow -1){
          adjacentTriangles.push(i);
        }
      }
    }else{
      if(currentCol % 2 === 0){
        if(currentCol === otherCol +1 && currentRow === otherRow || currentCol === otherCol +1 && currentRow === otherRow +1){
          adjacentTriangles.push(i);
        }
      }else{
        if(currentCol === otherCol +1 && currentRow === otherRow || currentCol === otherCol +1 && currentRow === otherRow -1){
          adjacentTriangles.push(i);
        }
      }
    }
  }
  
  
  return adjacentTriangles;
};

// 在全局只保留ID生成器
let idSeed = 0;

// 扩散开始函数
const startFlipAnimation = (triangleIndex) => {
  
  // 存储每个时间段的三角形
  const timeSequence = [];
  const fromTrianglesSequence = [];
  const visited = new Set();
  // 闭包管理id
  const animationStartId = `${++idSeed}`;
  console.log("New animationStartId: " + animationStartId)

  
  // 初始三角形
  timeSequence.push([triangleIndex]);
  fromTrianglesSequence.push([triangleIndex])
  visited.add(triangleIndex);

  // 收集每个时间段要翻折的三角形
  const collectNextTimeSequence = () => {
    const lastTimeTriangles = timeSequence[timeSequence.length - 1];
    const nextTimeTriangles = new Array();
    const nextTimeFromTriangles = new Array();

    // 对上一个时间段的每个三角形
    lastTimeTriangles.forEach(triIndex => {
      // 检查其所有邻接三角形
      const adjacent = triangleData.adjacentTriangles[triIndex];
      if (!adjacent) return;
      
      adjacent.forEach(adjIndex => {
        // 只选择同组的三角形
        if (!visited.has(adjIndex) && 
            triangleData.groups[adjIndex] === triangleData.groups[triIndex] ) {
          nextTimeTriangles.push(adjIndex);
          nextTimeFromTriangles.push(triIndex);
          visited.add(adjIndex);
        }
      });
    });

    // 如果找到了新的要翻折的三角形，添加到序列中并继续寻找下一时间段
    if (nextTimeTriangles.size > 0) {
      timeSequence.push(Array.from(nextTimeTriangles));
      fromTrianglesSequence.push(Array.from(nextTimeFromTriangles))
      collectNextTimeSequence();
    }

    //console.log(`时间段 ${timeSequence.length} 的三角形:`, lastTimeTriangles);
  };

  // 开始收集所有时间段的三角形
  collectNextTimeSequence();

  // 生成新的目标颜色
  const generateNewTargetColor = () => {
    // 使用HSL颜色空间生成随机颜色
    const hue = Math.random(); // 0-1 对应 0-360度
    const saturation = 0.3 + Math.random() * 0.2; // 0.4-0.6 饱和度
    const lightness = 0.35 + Math.random() * 0.2; // 0.4-0.6 亮度
    console.log("饱和度："+saturation +"亮度："+ lightness)
    
    const color = new THREE.Color();
    color.setHSL(hue, saturation, lightness);
    return color;
  };

  // 为当前整个翻折动画生成新的目标颜色
  const newTargetColor = generateNewTargetColor();

  

  // 执行动画序列
  const animateTimeSequence = async (timeIndex = 0) => {
    if (timeIndex >= timeSequence.length) {
      return;
    }

    const currentTimeTriangles = timeSequence[timeIndex];
    const currentTimeFromTriangles = fromTrianglesSequence[timeIndex];
    const geometry = instancedMesh.geometry;
    const instanceColors = geometry.getAttribute('instanceColor');
    const animationId = geometry.getAttribute('animationId');

    console.log("TimeIndex: " + timeIndex+ "---------")
    console.log("TO: " + currentTimeTriangles)
    console.log("From: " + currentTimeFromTriangles)

    // 计算两个三角形的公共边
    const  getSharedEdge = (triIndex1, triIndex2) => {
      //const pos1 = [triangleData.positions[triIndex1*3], triangleData.positions[triIndex1*3 + 1],triangleData.positions[triIndex1*3 + 2] ];
      //const pos2 = [triangleData.positions[triIndex2*3], triangleData.positions[triIndex2*3 + 1],triangleData.positions[triIndex2*3 + 2] ];
      const pos1 = getTriangleVertices(triIndex1);
      const pos2 = getTriangleVertices(triIndex2);
      pos1.forEach((vertex, index) => {
        console.log(`1 Vertex ${index}:`, vertex.toArray()); // 输出如 "x, y, z"
      });
      pos2.forEach((vertex, index) => {
        console.log(`2 Vertex ${index}:`, vertex.toArray()); // 输出如 "x, y, z"
      });
      
      
      // 找出两个三角形共有的两个顶点(即公共边)
      const sharedVertices = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (pos1[i].distanceTo(pos2[j]) < 10.0) {
            sharedVertices.push(pos1[i].clone());
            if (sharedVertices.length === 2) return sharedVertices;
          }
        }
      }
      console.warn("No shared edge found between:", triIndex1, triIndex2);
      
      return null;
    }

    // 获取三角形三个顶点的世界坐标
    const getTriangleVertices = (triIndex)=>{
      console.log("Start to get triangle vertices.")
      const matrix = new THREE.Matrix4();
      instancedMesh.getMatrixAt(triIndex, matrix);
      
      // 标准等边三角形顶点（局部坐标）
      const vertices = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, TRIANGLE_SIZE, 0),
        new THREE.Vector3(TRIANGLE_WIDE, TRIANGLE_SIZE/2, 0) // 固定正X方向
      ];
      
      // 根据三角形朝向调整顶点
      if (triIndex % 2 !== 0) { // 奇数索引三角形朝相反方向
        vertices[2].x = -TRIANGLE_WIDE;
      }
      
      return vertices.map(v => v.applyMatrix4(matrix));
    }
    
    const animateFlip = (fromTriIndex, toTriIndex) => {
      return new Promise(resolve => {
        console.log("Flip start.");
        if (animationId.array[toTriIndex] > +animationStartId) {
          // console.log("记录：" + animationId.array[triIndex] + " ID:" + triIndex);
          // console.log("当前：" + animationStartId + " 跳过！！！");
          resolve();
          return;
        }

        // 获得公共边
        const sharedEdge = getSharedEdge(fromTriIndex, toTriIndex);
        if (!sharedEdge) {
          console.warn("No shared edge found");
          resolve();
          return;
        }
        console.log("Edge found!!!!!!!!")

        const createFlipTriangle = (fromTriIndex) => {
          // 1. 获取基准点坐标（假设存储的是左下角顶点）
          const baseX = triangleData.positions[fromTriIndex * 3];
          const baseY = triangleData.positions[fromTriIndex * 3 + 1];
          
          // 2. 根据三角形类型（朝上/朝下）计算三个顶点
          const isUpward = fromTriIndex % 2 === 0; // 假设偶数索引朝上
          const vertices = new Float32Array([
            baseX, baseY, 0,  // 顶点1（左下）
            baseX + TRIANGLE_WIDE, baseY, 0,  // 顶点2（右下）
            baseX + TRIANGLE_WIDE/2, isUpward ? baseY + TRIANGLE_SIZE : baseY - TRIANGLE_SIZE, 0 // 顶点3（上/下）
          ]);

          // 3. 创建几何体
          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
          
          // 4. 直接使用原材质（或简单克隆）
          const material = instancedMesh.material.clone();
          material.side = THREE.DoubleSide;
          
          return new THREE.Mesh(geometry, material);
        };
        
        const flipTriangle = createFlipTriangle(fromTriIndex);
        scene.add(flipTriangle);

        // 设置旋转轴
        const edgeCenter = new THREE.Vector3().addVectors(sharedEdge[0], sharedEdge[1]).multiplyScalar(0.5);
        const edgeDir = new THREE.Vector3().subVectors(sharedEdge[1], sharedEdge[0]).normalize();
        flipTriangle.position.sub(edgeCenter);
        
        // 设置动画id
        animationId.setX(toTriIndex, animationStartId);
        animationId.needsUpdate = true;

        
        // 为每个三角形生成独特的颜色变化
        const variantColor = newTargetColor.clone();
        const hueVariation = (Math.random() - 0.5) * 0.02;
        const saturationVariation = (Math.random() - 0.5) * 0.03;
        const lightnessVariation = (Math.random() - 0.5) * 0.04;
        variantColor.offsetHSL(hueVariation, saturationVariation, lightnessVariation);

        
        
        // 创建动画时间线
        const timeline = gsap.timeline({
          onStart: () => {
            
          },
          onComplete: () => {
            instanceColors.array[toTriIndex * 3] = variantColor.r;
            instanceColors.array[toTriIndex * 3 + 1] = variantColor.g;
            instanceColors.array[toTriIndex * 3 + 2] = variantColor.b;
            instanceColors.needsUpdate = true;

            scene.remove(flipTriangle);
            resolve();
          }
        });

        // 旋转动画
        timeline.to(flipTriangle.rotation, {
          z: Math.PI, // 180度翻转
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            // 保持围绕公共边旋转
            const q = new THREE.Quaternion().setFromAxisAngle(edgeDir, flipTriangle.rotation.z);
            flipTriangle.setRotationFromQuaternion(q);
            flipTriangle.position.add(edgeCenter);
          }
        }, 0);
        
        // 高度动画
        // timeline.to(flipTriangle.position, {
        //   z: ANIMATION_CONFIG.flipHeight,
        //   yoyo: true,
        //   repeat: 1,
        //   duration: 1,
        //   ease: "power1.inOut"
        // }, 0);
      });
    };

    // 创建当前时间段所有三角形的动画
    const animations = currentTimeTriangles.map(async (triIndex, index) => {
      // 找出来源三角形(前一时间段相邻的三角形)

      const fromTri = currentTimeFromTriangles[index];
      console.log("From tri: " + fromTri)
      if (fromTri !== undefined || timeIndex !== 0) {
        // 执行翻折动画
        await animateFlip(fromTri, triIndex);
      }else{
        console.warn("fromTri == undefined")
      }
      
    });

    // 等待当前时间段所有动画完成
    await Promise.all(animations);
    
    // 延迟一小段时间后开始下一个时间段
    setTimeout(() => {
      animateTimeSequence(timeIndex + 1);
    }, 10);
  };

  // 开始第一个时间段的动画
  animateTimeSequence();
};

// 修改点击处理函数
const handleMouseClick = (event) => {
  event.preventDefault();
  
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(instancedMesh);
  
  if (intersects.length > 0) {
    const instanceId = intersects[0].instanceId;
    console.log('点击了三角形:', instanceId);
    startFlipAnimation(instanceId);
  }
};

const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

const handleResize = () => {
  if (camera && renderer) {
    camera.left = window.innerWidth / -2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / -2;
    camera.updateProjectionMatrix();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // 重新创建三角形网格
    scene.remove(instancedMesh);
    createTriangleGrid();
  }
};

onMounted(() => {
  initThreeJS();
  window.addEventListener('click', handleMouseClick);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('click', handleMouseClick);
  window.removeEventListener('resize', handleResize);
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<style scoped>
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background-color: white;
}

.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: opacity 0.3s ease;
}
</style> 