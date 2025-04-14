<template>
    <div class="posts-container"  :class="{'show': settingsStore.settings.isShowingPosts }">
        <div class="blog-card" @click.stop>

        <!-- 右上区域 -->
        <div 
            ref="rightZone"
            class="zone right-zone"
            @dragover.prevent
            @drop="handleDrop($event, 'right')"
        >
            <div class="slot">1</div>
        </div>

        <!-- 磁贴渲染区域 -->
        <div
            v-for="(tile, index) in tiles"
            :key="index"
            class="magnetic-tile"
            :style="{
            left: tile.position.left + 'px',
            top: tile.position.top + 'px',
            zIndex: tile.originZone === 'right' ? 2 : 1
            }"
            draggable="true"
            @dragstart="handleDragStart(index, $event)"
            @drag="handleDrag($event)"
            @dragend="handleDragEnd(index)"
        >
            <div class="tile-content">
            Tile {{ index + 1 }}
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
const settingsStore = useSettingsStore()
import { ref, onMounted } from 'vue';

const leftZone = ref(null);
const rightZone = ref(null);

// 磁贴数据
const tiles = ref(Array(5).fill().map((_, i) => ({
    id: i,
    width: 150,
    height: 200,
    position: { left: 0, top: 0 },
    originZone: 'left'
})));

const dragState = ref({
    isDragging: false,
    currentTileIndex: null,
    offsetX: 0,
    offsetY: 0
});

// 初始化随机位置
onMounted(() => {

tiles.value.forEach((tile, index) => {
    tile.position.left = (tile.width+20) * index + 20;
    tile.position.top = tile.height;
});
});

// 拖拽开始事件
const handleDragStart = (index, event) => {
const tile = event.target.getBoundingClientRect();
dragState.value = {
    isDragging: true,
    currentTileIndex: index,
    offsetX: event.clientX - tile.left,
    offsetY: event.clientY - tile.top
};

event.dataTransfer.setData('text/plain', index);
event.dataTransfer.effectAllowed = 'move';
event.target.style.opacity = '0.8';
};

// 拖拽过程中
const handleDrag = (event) => {
    if (!dragState.value.isDragging || !event.clientX) return; // 忽略无效事件

    const index = dragState.value.currentTileIndex;
    if (index === null) return;

    const blogCard = document.querySelector('.blog-card').getBoundingClientRect();

    // 计算相对于blog-card的位置
    const left = event.clientX - blogCard.left - dragState.value.offsetX;
    const top = event.clientY - blogCard.top - dragState.value.offsetY;

    // 更新磁贴位置
    tiles.value[index].position.left = Math.max(0, Math.min(left, blogCard.width - tiles.value[index].width));
    tiles.value[index].position.top = Math.max(0, Math.min(top, blogCard.height - tiles.value[index].height));
};

// 拖拽结束
const handleDragEnd = (index) => {
    dragState.value.isDragging = false;
    dragState.value.currentTileIndex = null;
    const tile = document.querySelector(`[draggable="true"]`);
    if (tile) {
        tile.style.opacity = '1';
    }
};

// 放置处理
const handleDrop = (event, zone) => {
    event.preventDefault();
    const index = parseInt(event.dataTransfer.getData('text/plain'));

    if (zone === 'right') {
        // 获取右上区域的位置信息
        const rightZoneRect = rightZone.value.getBoundingClientRect();
        const slotRect = rightZone.value.querySelector('.slot').getBoundingClientRect();
        const blogCard = document.querySelector('.blog-card').getBoundingClientRect();
        
        // 计算相对于blog-card的位置
        tiles.value[index].position.left = slotRect.left - blogCard.left;
        tiles.value[index].position.top = slotRect.top - blogCard.top;
        tiles.value[index].originZone = 'right';
    } else {
        // 放回左侧区域
        const blogCard = document.querySelector('.blog-card').getBoundingClientRect();
        tiles.value[index].position.left = event.clientX - blogCard.left - dragState.value.offsetX;
        tiles.value[index].position.top = event.clientY - blogCard.top - dragState.value.offsetY;
        tiles.value[index].originZone = 'left';
    }
};
</script>

<style scoped>
.posts-container {
position: fixed;
top: 0;
left: 100%;
width: 100%;
height: 100%;
display: flex;
justify-content: right;
align-items: center;
z-index: 5;
transition: transform 0.5s cubic-bezier(.05,.47,.64,.99);
}

.posts-container.show {
transform: translateX(-100%);
}

.blog-card {
width: calc(100% - 100px);
height: 100%;
background: white;
position: relative; /* 添加相对定位，作为磁贴的定位参考 */
}
.blog-card:hover {
box-shadow: var(--shadow-primary);
}

.zone {
position: absolute;
box-sizing: border-box;
}

.right-zone {
width: 10%;
height: 25%;
top: 0;
right: 0;
background-color: #e0e0ff;
border: 1px dashed #aaa;
position: absolute; /* 添加相对定位 */
}

.magnetic-tile {
position: absolute;
width: 150px;
height: 200px;
background: white;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
cursor: grab;
transition: none; /* 移除过渡效果，实现实时跟随 */
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
user-select: none;
}

.magnetic-tile:active {
cursor: grabbing;
}

.tile-content {
color: black;
}

.slot {
position: absolute;
width: 150px;
height: 200px;
left: 20px;
top: 20px;
border: 2px dashed rgba(0, 0, 255, 0.3);
border-radius: 8px;
pointer-events: none;
background-color: rgba(0, 0, 255, 0.05);
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
color: rgba(0, 0, 255, 0.3);
}
</style>