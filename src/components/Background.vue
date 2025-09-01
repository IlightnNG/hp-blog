<template>
    <div class="canvas-container" ref="containerRef">
    </div>
    <div>
        <button 
            v-if="isHomePage"
            @click.stop="toggleEditMode"
            class="style-toggle"
            :class="{ 'active': settingsStore.settings.isAddingGroup }"
        >
            {{ settingsStore.settings.isAddingGroup ? 'Edit' : 'Display' }}
        </button>

        <!-- 分组按钮 -->
        <div v-if="settingsStore.settings.isAddingGroup" class="group-buttons">
            <button 
                v-for="group in 4" 
                :key="group"
                @click.stop="setActiveGroup(group)"
                :class="{ 'active': activeGroup === group }"
                class="group-button"
            >
                Group {{ group }}
            </button>
        </div>
    </div>
</template>
  
<script setup>
import { ref,computed , onMounted, onUnmounted, watch } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useSettingsStore } from '@/stores/settings'
import { useRoute } from 'vue-router'; // 引入路由
const settingsStore = useSettingsStore()
const route = useRoute();

// 计算属性判断是否在当前页面
const isHomePage = computed(() => {
    return route.name === 'Home'
});
const containerRef = ref(null);

// 性能优化：使用常量
const TRIANGLE_SIZE = 60;
const TRIANGLE_WIDE = TRIANGLE_SIZE * Math.sqrt(3) / 2;
const COLORS = {
base: new THREE.Color(0xa1b5d8),
target: new THREE.Color(0xffc8dd),
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
let isAnimating = false;

// 性能优化：使用 TypedArray 存储三角形数据
const triangleData = {
    positions: new Float32Array(),
    adjacentTriangles: [], // 存储每个三角形的邻近三角形索引
    groups: new Uint8Array(), // 存储每个三角形的组
    isFlipped: new Uint8Array() // 存储每个三角形是否已翻折
};

// 顶点着色器
const vertexShader = `
attribute vec3 instanceColor;
attribute float instanceRotation;
attribute float instanceState;
attribute float flipProgress;
attribute float animationTime; // 添加时间戳属性
varying vec3 vColor;
varying float vState;
varying float vFlipProgress;
varying float vAnimationTime; // 传递时间戳到片元着色器
varying vec3 vBarycentric; // 添加重心坐标

void main() {
    vColor = instanceColor;
    vState = instanceState;
    vFlipProgress = flipProgress;
    vAnimationTime = animationTime; // 传递时间戳

    // 设置重心坐标
    vBarycentric = vec3(0.0);
    if (gl_VertexID == 0) vBarycentric.x = 1.0;
    else if (gl_VertexID == 1) vBarycentric.y = 1.0;
    else if (gl_VertexID == 2) vBarycentric.z = 1.0;
    
    vec3 pos = position;
    if (flipProgress > 0.0) {
        float angle = flipProgress * 3.14159;
        float height = 100.0 * sin(angle);
        pos.y += height;
    }
    
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
}
`;
// 片元着色器
const fragmentShader = `
varying vec3 vColor;
varying float vState;
varying float vFlipProgress;
varying float vAnimationTime; // 接收时间戳
varying vec3 vBarycentric; // 添加重心坐标

void main() {
    vec3 finalColor = vColor;

    // 添加抗锯齿描边效果
    if (vState > 1.5) {
        // 计算重心坐标的最小值（距离边缘的距离）
        float minBary = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);
        
        // 计算边缘宽度（基于距离的渐变）
        float edgeWidth = 0.06; // 边缘宽度
        float edge = smoothstep(0.0, edgeWidth, minBary);
        
        // 边缘部分使用白色，内部保持原色
        finalColor = mix(vec3(1.0), finalColor, edge);
    }

    gl_FragColor = vec4(finalColor, 1.0 - vFlipProgress);
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
const instanceStates = new Float32Array(totalTriangles);
const flipProgress = new Float32Array(totalTriangles);
const instanceGroups = new Float32Array(totalTriangles);
const animationId = new Float32Array(totalTriangles).fill(0); // 添加id属性

// 创建实例化网格
const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
    uniforms: {}// color
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

const targetIlightnNG = [
    //[4,6,0],[5,5,0],[5,5,1],[6,6,0],[6,6,1],[7,6,0],[7,6,1],[8,7,1],[5,6,0],[5,6,1],[6,7,0],[6,7,1],[7,7,0],[7,7,1],[5,7,0],[6,8,1],[6,8,0],[5,8,0],[6,9,1],[6,9,0],[7,8,1]
];
const checkGroup = (index) =>{
    if (targetIlightnNG.findIndex(([targetCol, targetRow, targetDir]) => targetCol === triangleData.positions[index*3] && targetRow === triangleData.positions[index*3+1] && targetDir === triangleData.positions[index*3+2]) !== -1){
        instanceGroups[index] = 1;
    }else{
        instanceGroups[index] = 0;
    }
}

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
            instanceStates[index] = 0;
            flipProgress[index] = 0;

            // 存储位置数据
            triangleData.positions[index * 3] = col;
            triangleData.positions[index * 3 + 1] = row;
            triangleData.positions[index * 3 + 2] = i % 2;
            // group 修改
            checkGroup(index)
            //instanceGroups[index] = Math.floor(Math.random() * 2);
            //instanceGroups[index] = 0;

            
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
// console.log(`检查三角形位置:`, triangleData.positions);

// 添加实例属性
const colorAttribute = new THREE.InstancedBufferAttribute(instanceColors, 3);
colorAttribute.usage = THREE.DynamicDrawUsage; // 允许动态更新
geometry.setAttribute('instanceColor', colorAttribute);
geometry.setAttribute('instanceRotation', new THREE.InstancedBufferAttribute(instanceRotations, 1));
geometry.setAttribute('instanceState', new THREE.InstancedBufferAttribute(instanceStates, 1));
geometry.setAttribute('flipProgress', new THREE.InstancedBufferAttribute(flipProgress, 1));
geometry.setAttribute('instanceGroup', new THREE.InstancedBufferAttribute(instanceGroups, 1));
geometry.setAttribute('animationId', new THREE.InstancedBufferAttribute(animationId, 1));

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
    const visited = new Set();
    // 闭包管理id
    const animationStartId = `${++idSeed}`;
    console.log("New animationStartId: " + animationStartId)


    // 初始三角形
    timeSequence.push([triangleIndex]);
    visited.add(triangleIndex);

    // 收集每个时间段要翻折的三角形
    const collectNextTimeSequence = () => {
        const lastTimeTriangles = timeSequence[timeSequence.length - 1];
        const nextTimeTriangles = new Set();
        // 对上一个时间段的每个三角形
        lastTimeTriangles.forEach(triIndex => {
        // 检查其所有邻接三角形
        const adjacent = triangleData.adjacentTriangles[triIndex];
        if (!adjacent) return;
        
        adjacent.forEach(adjIndex => {
            // 只选择同组的三角形
            if (!visited.has(adjIndex) && 
                triangleData.groups[adjIndex] === triangleData.groups[triIndex] ) {
            nextTimeTriangles.add(adjIndex);
            visited.add(adjIndex);
            }
        });
        });

        // 如果找到了新的要翻折的三角形，添加到序列中并继续寻找下一时间段
        if (nextTimeTriangles.size > 0) {
        timeSequence.push(Array.from(nextTimeTriangles));
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
        const saturation = 0.3 + Math.random() * 0.12; // 0.4-0.6 饱和度
        const lightness = 0.3 + Math.random() * 0.15; // 0.4-0.6 亮度
        console.log("饱和度："+saturation +"亮度："+ lightness)
        
        const color = new THREE.Color();
        color.setHSL(hue, saturation, lightness);
        const hexColor = `#${color.getHexString()}`;
        settingsStore.setTargetColor(hexColor);
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
        const geometry = instancedMesh.geometry;
        const instanceStates = geometry.getAttribute('instanceState');
        const instanceColors = geometry.getAttribute('instanceColor');
        const animationId = geometry.getAttribute('animationId');
        
        // 创建当前时间段所有三角形的动画
        const animations = currentTimeTriangles.map(triIndex => {
        return new Promise(resolve => {
            //检查时间戳，如果已经被更新的动画影响过，则跳过
            if (animationId.array[triIndex] > +animationStartId) {
            // console.log("记录：" + animationId.array[triIndex] + " ID:" + triIndex);
            // console.log("当前：" + animationStartId + " 跳过！！！");
            resolve();
            return;
            }
            
            // 设置状态和时间戳
            instanceStates.setX(triIndex, 1);
            instanceStates.needsUpdate = true;
            animationId.setX(triIndex, animationStartId);
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
                instanceColors.array[triIndex * 3] = variantColor.r;
                instanceColors.array[triIndex * 3 + 1] = variantColor.g;
                instanceColors.array[triIndex * 3 + 2] = variantColor.b;
                instanceColors.needsUpdate = true;
            },
            onComplete: () => {
                resolve();
            }
            });
            
            timeline.to({}, {
            duration: 0.5/(timeIndex+1),
            ease: "power1.inOut",
            onUpdate: () => {
                geometry.attributes.instanceColor.needsUpdate = true;
            }
            });
            
            // // 翻折动画
            // timeline.to(flipProgress.array, {
            //   [triIndex]: 1,
            //   duration: 0.4,
            //   ease: "power1.inOut",
            //   onUpdate: () => {
            //     flipProgress.needsUpdate = true;
            //   }
            // }, "-=0.3");
        });
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

// edit mode ------------------------------------
// 添加响应式变量
const activeGroup = ref(1); // 当前激活的分组

// 切换编辑模式
const toggleEditMode = () => {
    settingsStore.toggleAddGroupMode();
    
    // 更新三角形描边效果
    updateGroupOutlines();
};

// 设置激活的分组
const setActiveGroup = (group) => {
    activeGroup.value = group;
    updateGroupOutlines();
};

// 更新分组描边效果
const updateGroupOutlines = () => {
    if (!instancedMesh) return;
    
    const geometry = instancedMesh.geometry;
    const instanceStates = geometry.getAttribute('instanceState');
    
    for (let i = 0; i < triangleData.groups.length; i++) {
        // 在编辑模式下，为当前激活分组的三角形添加描边效果
        if (settingsStore.settings.isAddingGroup && triangleData.groups[i] === activeGroup.value) {
            instanceStates.setX(i, 2); // 使用状态2表示描边
        } else if (instanceStates.getX(i) === 2) {
            // 恢复非激活分组的状态
            instanceStates.setX(i, triangleData.isFlipped[i] ? 1 : 0);
        }
    }
    
    instanceStates.needsUpdate = true;
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
        console.log("Position: ["+ triangleData.positions[instanceId*3] + ","+triangleData.positions[instanceId*3+1] + ","+triangleData.positions[instanceId*3+2] + "]")
        if(settingsStore.settings.isAddingGroup){
            triangleData.groups[instanceId] = triangleData.groups[instanceId]!=activeGroup.value?activeGroup.value:0;
            updateGroupOutlines(); // 更新描边效果
        }else{
            startFlipAnimation(instanceId);
        }
        
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

watch(useRoute(), () => {
  updateGroupOutlines()
})
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



.style-toggle {
    z-index: 1000;
    top: 20px;
    left: 120px;
    padding: 5px 5px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.65,.43,.31,1.23);
    box-shadow: 2px 2px 1px #dedede,
                -2px -2px 1px #dedede;
    position: fixed;
    overflow: hidden;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    pointer-events: auto;
}

.style-toggle:hover {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 5px 5px 1px #dedede,
                -5px -5px 1px #dedede;
}
.group-buttons {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 1000;
}

.group-button {
    padding: 8px 16px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
}

.group-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.group-button.active {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}


</style> 
