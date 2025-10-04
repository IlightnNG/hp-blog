import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    // 从 localStorage 加载设置或使用默认值
    const loadSettings = () => {
        const saved = localStorage.getItem('blogSettings')
        return saved ? JSON.parse(saved) : {
            isAddingGroup: false,
            isShowingBg: false,
            targetColor: '#ffffff',
            triangleGroups: {} // 添加分组数据存储
        }
    }

    const settings = ref(loadSettings())

    // 保存设置到 localStorage
    const saveSettings = () => {
        localStorage.setItem('blogSettings', JSON.stringify(settings.value))
    }

    // 切换添加模式
    const toggleAddGroupMode = () => {
        settings.value.isAddingGroup = !settings.value.isAddingGroup
        saveSettings()
    }

    const toggleShowingBg = () => {
        settings.value.isShowingBg = !settings.value.isShowingBg
        console.log(settings.value.isShowingBg)
        saveSettings()
    }

    const resetShowingBgAndAddGroupMode = () => {
        settings.value.isShowingBg = false
        settings.value.isAddingGroup = false
        console.log(innerWidth)
        saveSettings()
    }

    const setTargetColor = (color) => {
        settings.value.targetColor = color
        document.documentElement.style.setProperty(
            '--target-color',
            settings.value.targetColor
        )
        saveSettings()
    }

    // 新增：保存三角形分组
    const saveTriangleGroups = (groupsData, positions) => {
        // 将分组数据转换为可序列化的格式
        const serializedGroups = {};
        for (let i = 0; i < groupsData.length; i++) {
            if (groupsData[i] !== 0) { // 只保存非0分组
                const key = `${positions[i * 3]},${positions[i * 3 + 1]},${positions[i * 3 + 2]}`;
                serializedGroups[key] = groupsData[i];
            }
        }
        settings.value.triangleGroups = serializedGroups;
        saveSettings();
    }

    // 新增：加载三角形分组
    const loadTriangleGroups = (totalTriangles, positions) => {
        const groups = new Uint8Array(totalTriangles).fill(0);

        if (settings.value.triangleGroups) {
            Object.entries(settings.value.triangleGroups).forEach(([key, groupId]) => {
                const [col, row, dir] = key.split(',').map(Number);

                // 找到对应的三角形索引
                for (let i = 0; i < totalTriangles; i++) {
                    if (positions[i * 3] === col &&
                        positions[i * 3 + 1] === row &&
                        positions[i * 3 + 2] === dir) {
                        groups[i] = groupId;
                        break;
                    }
                }
            });
        }

        return groups;
    }

    // 新增：清除所有分组
    const clearTriangleGroups = () => {
        settings.value.triangleGroups = {};
        saveSettings();
    }

    // 监听变化自动保存
    watch(settings, saveSettings, { deep: true })

    return {
        settings,
        toggleAddGroupMode,
        toggleShowingBg,
        resetShowingBgAndAddGroupMode,
        setTargetColor
    }
})