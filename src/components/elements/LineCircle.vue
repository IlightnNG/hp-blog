<template>
  <svg class="line-circle" width="200" height="200" viewBox="0 0 200 200">
    <line v-for="(line, index) in lines" 
            :key="index" 
            :x1="line.x1" 
            :y1="line.y" 
            :x2="line.x2" 
            :y2="line.y" 
            stroke="black" 
            stroke-width="1"/>
    </svg>
</template>

<script setup>
import {ref, onMounted} from "vue"
const lines = ref([]);
const radius = 100; // 圆的半径
const lineCount = 30; // 线条数量

onMounted(() => {
  for (let i = 0; i < lineCount; i++) {
    const y = radius - (i * (radius * 2) / lineCount);
    const lineWidth = 2 * Math.sqrt(radius * radius - y * y);
    
    lines.value.push({
      y: y + radius,
      x1: radius - lineWidth / 2,
      x2: radius + lineWidth / 2
    });
  }
});
</script>

<style>

</style>