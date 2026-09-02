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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useSettingsStore } from '@/stores/settings';
import { useRoute } from 'vue-router';

const settingsStore = useSettingsStore();
const route = useRoute();
const isHomePage = computed(() => route.name === 'Home');
const containerRef = ref(null);
const isChangingBg = ref(true); // 点中的三角形是否属于 group 0（联动页面主题色）

// ---------- 网格参数 ----------
const TRIANGLE_SIZE = window.innerWidth / 32;
const TRIANGLE_WIDE = (TRIANGLE_SIZE * Math.sqrt(3)) / 2;
const Z_AXIS = new THREE.Vector3(0, 0, 1);

let scene, camera, renderer, instancedMesh, raycaster, mouse;
let cols = 0, rows = 0, totalTriangles = 0;
let groups = new Uint8Array(0); // 每个三角形的分组（0 默认组，1-4 编辑分组）

// 编辑分组图案（硬编码；可在编辑模式下用 printGroupTriangles 导出新图案）
const TARGET_ICON = [
    [19,2,0],[11,3,1],[17,3,0],[17,3,1],[18,3,1],[19,3,0],[20,3,0],[20,3,1],[21,3,1],[26,3,0],[27,3,0],[27,3,1],[9,4,0],[10,4,0],[10,4,1],[16,4,0],[17,4,0],[17,4,1],[18,4,1],[19,4,0],[20,4,0],[20,4,1],[21,4,1],[27,4,0],[28,4,1],[9,5,0],[10,5,1],[13,5,0],[13,5,1],[14,5,1],[16,5,0],[17,5,0],[17,5,1],[18,5,1],[19,5,0],[20,5,0],[20,5,1],[21,5,1],[22,5,0],[23,5,0],[23,5,1],[28,5,1],[12,6,0],[13,6,0],[13,6,1],[14,6,1],[16,6,0],[17,6,0],[17,6,1],[18,6,1],[19,6,0],[20,6,0],[20,6,1],[21,6,1],[22,6,0],[23,6,0],[23,6,1],[24,6,0],[24,6,1],[25,6,1],[12,7,0],[13,7,0],[13,7,1],[14,7,1],[15,7,0],[15,7,1],[16,7,0],[16,7,1],[17,7,0],[17,7,1],[18,7,1],[19,7,0],[20,7,0],[20,7,1],[21,7,1],[23,7,0],[24,7,0],[24,7,1],[25,7,1],[12,8,0],[13,8,0],[13,8,1],[14,8,0],[14,8,1],[15,8,0],[15,8,1],[16,8,0],[16,8,1],[17,8,0],[17,8,1],[18,8,1],[19,8,0],[20,8,0],[20,8,1],[21,8,1],[23,8,0],[24,8,0],[24,8,1],[25,8,1],[12,9,0],[13,9,0],[13,9,1],[14,9,0],[14,9,1],[16,9,0],[17,9,0],[17,9,1],[18,9,1],[19,9,0],[20,9,0],[20,9,1],[21,9,1],[23,9,0],[23,9,1],[24,9,0],[24,9,1],[25,9,1],[9,10,0],[12,10,0],[13,10,0],[13,10,1],[14,10,1],[16,10,0],[17,10,0],[17,10,1],[18,10,1],[19,10,0],[20,10,0],[20,10,1],[21,10,0],[21,10,1],[22,10,0],[22,10,1],[23,10,0],[23,10,1],[24,10,0],[24,10,1],[27,10,0],[28,10,1],[9,11,0],[10,11,1],[14,11,1],[16,11,0],[17,11,0],[17,11,1],[18,11,1],[19,11,0],[20,11,0],[20,11,1],[21,11,0],[21,11,1],[22,11,0],[22,11,1],[27,11,0],[27,11,1],[28,11,1],[10,12,0],[10,12,1],[11,12,1],[16,12,0],[17,12,0],[17,12,1],[18,12,1],[19,12,0],[20,12,0],[20,12,1],[26,12,0],[18,13,1]
];
const isTarget = (col, row, dir) =>
    TARGET_ICON.some(([c, r, d]) => c === col && r === row && d === dir);

// ---------- 颜色 ----------
// 页面主题色可能被 settings 从 localStorage 恢复，从 CSS 变量取实际生效值；取不到时回退默认蓝
const getBaseColor = () => {
    const css = getComputedStyle(document.documentElement).getPropertyValue('--target-color').trim();
    return css ? new THREE.Color(css) : new THREE.Color(0xa1b5d8);
};

// ---------- 网格着色器 ----------
const vertexShader = `
attribute vec3 instanceColor;
attribute float instanceState;
varying vec3 vColor;
varying float vState;
varying vec3 vBarycentric;

void main() {
    vColor = instanceColor;
    vState = instanceState;

    // 重心坐标：用于片元着色器的描边（编辑模式）
    vBarycentric = vec3(0.0);
    if (gl_VertexID == 0) vBarycentric.x = 1.0;
    else if (gl_VertexID == 1) vBarycentric.y = 1.0;
    else if (gl_VertexID == 2) vBarycentric.z = 1.0;

    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}
`;
const fragmentShader = `
varying vec3 vColor;
varying float vState;
varying vec3 vBarycentric;

void main() {
    vec3 finalColor = vColor;

    // 编辑模式：激活分组描白边（vState > 1.5）
    if (vState > 1.5) {
        float minBary = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);
        float edge = smoothstep(0.0, 0.06, minBary);
        finalColor = mix(vec3(1.0), finalColor, edge);
    }

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

// ---------- 初始化 ----------
const initThreeJS = () => {
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
        powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1);
    containerRef.value.appendChild(renderer.domElement);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    createTriangleGrid();
    animate();
};

const createTriangleGrid = () => {
    cols = Math.ceil(window.innerWidth / TRIANGLE_WIDE) + 2;
    rows = Math.ceil(window.innerHeight / TRIANGLE_SIZE) + 2;
    totalTriangles = rows * cols * 2;

    // 基础三角形几何体（每个实例一个，等边三角形，底边在左）
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
        0, 0, 0,
        0, TRIANGLE_SIZE, 0,
        TRIANGLE_WIDE, TRIANGLE_SIZE / 2, 0,
    ]), 3));

    // 实例化属性
    const instanceColors = new Float32Array(totalTriangles * 3);
    const instanceStates = new Float32Array(totalTriangles);
    const animationIds = new Float32Array(totalTriangles);
    groups = new Uint8Array(totalTriangles);

    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide,
        uniforms: {},
    });

    instancedMesh = new THREE.InstancedMesh(geometry, material, totalTriangles);
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3(1, 1, 1);

    // 逐三角形构建实例（index = (row * cols + col) * 2 + dir）
    let index = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const yOffset = col % 2 === 1 ? TRIANGLE_SIZE / 2 : 0;
            for (let dir = 0; dir < 2; dir++) {
                position.set(
                    col * TRIANGLE_WIDE - window.innerWidth / 2,
                    row * TRIANGLE_SIZE - window.innerHeight / 2 - TRIANGLE_SIZE + yOffset,
                    0
                );
                quaternion.setFromAxisAngle(Z_AXIS, dir === 1 ? Math.PI / 3 : 0);
                matrix.compose(position, quaternion, scale);
                instancedMesh.setMatrixAt(index, matrix);

                // 基于主题色做微小随机变化，保持渐变质感
                const color = getBaseColor();
                color.offsetHSL(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.03,
                    (Math.random() - 0.5) * 0.04
                );
                instanceColors[index * 3] = color.r;
                instanceColors[index * 3 + 1] = color.g;
                instanceColors[index * 3 + 2] = color.b;
                instanceStates[index] = 0;
                groups[index] = isTarget(col, row, dir) ? 1 : 0;
                index++;
            }
        }
    }

    const colorAttribute = new THREE.InstancedBufferAttribute(instanceColors, 3);
    colorAttribute.usage = THREE.DynamicDrawUsage;
    geometry.setAttribute('instanceColor', colorAttribute);
    geometry.setAttribute('instanceState', new THREE.InstancedBufferAttribute(instanceStates, 1));
    geometry.setAttribute('animationId', new THREE.InstancedBufferAttribute(animationIds, 1));

    scene.add(instancedMesh);
};

// ---------- 网格工具 ----------
// 索引 → 网格坐标（与 createTriangleGrid 的 index 公式互逆）
const cellOf = (index) => {
    const cell = index >> 1;
    return { col: cell % cols, row: (cell / cols) | 0, dir: index & 1 };
};

// 闭式邻居：同单元对家 + 两个跨单元邻居（与原 findAdjacentTriangles 等价，已验证）
const neighborsOf = (index) => {
    const { col, row, dir } = cellOf(index);
    const d = 1 - dir;
    const outCol = dir === 0 ? col + 1 : col - 1;
    const rowShift = col % 2 === 0 ? -1 : 1;
    const result = [];
    for (const [c, r] of [[col, row], [outCol, row], [outCol, row + rowShift]]) {
        if (c >= 0 && c < cols && r >= 0 && r < rows) result.push((r * cols + c) * 2 + d);
    }
    return result;
};

// ---------- 颜色扩散动画 ----------
let idSeed = 0; // 动画运行号，用于让新动画优先于旧动画

const generateNewTargetColor = () => {
    const color = new THREE.Color().setHSL(
        Math.random(),
        0.2 + Math.random() * 0.15,
        0.3 + Math.random() * 0.15
    );
    if (isChangingBg.value) settingsStore.setTargetColor(`#${color.getHexString()}`);
    return color;
};

// 点击后从目标三角形出发，按 BFS 波次逐层对同组三角形换色
const startFlipAnimation = (triangleIndex) => {
    const runId = ++idSeed;
    const visited = new Set([triangleIndex]);
    const timeSequence = [[triangleIndex]];

    // 分层收集：每层取上一层的同组邻接三角形（未访问）
    const collectNextWave = () => {
        const current = timeSequence[timeSequence.length - 1];
        const next = new Set();
        for (const tri of current) {
            for (const adj of neighborsOf(tri)) {
                if (!visited.has(adj) && groups[adj] === groups[tri]) {
                    next.add(adj);
                    visited.add(adj);
                }
            }
        }
        if (next.size) {
            timeSequence.push([...next]);
            collectNextWave();
        }
    };
    collectNextWave();

    const targetColor = generateNewTargetColor();

    // 逐层执行换色动画（同一层并行，层间串行）
    const animateWaves = async (waveIndex = 0) => {
        if (waveIndex >= timeSequence.length) return;
        const triangles = timeSequence[waveIndex];
        const geometry = instancedMesh.geometry;
        const instanceColors = geometry.getAttribute('instanceColor');
        const instanceStates = geometry.getAttribute('instanceState');
        const animationIds = geometry.getAttribute('animationId');

        await Promise.all(triangles.map((tri) => new Promise((resolve) => {
            // 若已被更新的动画处理过则跳过
            if (animationIds.array[tri] > runId) return resolve();

            instanceStates.setX(tri, 1);
            instanceStates.needsUpdate = true;
            animationIds.setX(tri, runId);
            animationIds.needsUpdate = true;

            // 目标色微变体，保持渐变质感
            const variantColor = targetColor.clone();
            variantColor.offsetHSL(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.03,
                (Math.random() - 0.5) * 0.04
            );
            instanceColors.array[tri * 3] = variantColor.r;
            instanceColors.array[tri * 3 + 1] = variantColor.g;
            instanceColors.array[tri * 3 + 2] = variantColor.b;
            instanceColors.needsUpdate = true;

            gsap.to({}, {
                duration: 0.5 / (waveIndex + 1),
                ease: 'power1.inOut',
                onComplete: resolve,
            });
        })));

        // 波次间短暂间隔，形成扩散节奏
        setTimeout(() => animateWaves(waveIndex + 1), 10);
    };
    animateWaves();
};

// ---------- 编辑模式 ----------
const activeGroup = ref(1);

const toggleEditMode = () => {
    settingsStore.toggleAddGroupMode();
    updateGroupOutlines();
};

const setActiveGroup = (group) => {
    activeGroup.value = group;
    updateGroupOutlines();
    printGroupTriangles(group);
};

// 编辑模式下为激活分组的三角形添加白边
const updateGroupOutlines = () => {
    if (!instancedMesh) return;
    const states = instancedMesh.geometry.getAttribute('instanceState');
    const show = settingsStore.settings.isAddingGroup;
    for (let i = 0; i < groups.length; i++) {
        states.setX(i, show && groups[i] === activeGroup.value ? 2 : 0);
    }
    states.needsUpdate = true;
};

// 打印指定分组的三角形网格坐标（用于导出/编辑 TARGET_ICON）
const printGroupTriangles = (group) => {
    const cells = [];
    for (let i = 0; i < groups.length; i++) {
        if (groups[i] === group) {
            const { col, row, dir } = cellOf(i);
            cells.push([col, row, dir]);
        }
    }
    console.log(`Group ${group} 的三角形位置数组:`);
    console.log(JSON.stringify(cells));
};

// ---------- 交互 ----------
const handleMouseClick = (event) => {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObject(instancedMesh);
    if (!hits.length) return;
    const id = hits[0].instanceId;
    const { col, row, dir } = cellOf(id);
    console.log('点击了三角形:', id, '位置:', [col, row, dir]);

    if (settingsStore.settings.isAddingGroup) {
        // 编辑模式：切换分组
        groups[id] = groups[id] !== activeGroup.value ? activeGroup.value : 0;
        updateGroupOutlines();
        return;
    }

    // 展示模式：group 0 联动页面主题色，随后扩散换色
    isChangingBg.value = groups[id] === 0;
    startFlipAnimation(id);
};

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

const handleResize = () => {
    if (!camera || !renderer) return;
    camera.left = window.innerWidth / -2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / -2;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.remove(instancedMesh);
    createTriangleGrid();
};

onMounted(() => {
    initThreeJS();
    window.addEventListener('click', handleMouseClick);
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('click', handleMouseClick);
    window.removeEventListener('resize', handleResize);
    renderer?.dispose();
});

watch(route, () => {
    updateGroupOutlines();
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
    z-index: 1;
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
