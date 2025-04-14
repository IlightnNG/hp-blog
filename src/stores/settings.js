import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
    // 从 localStorage 加载设置或使用默认值
    const loadSettings = () => {
        const saved = localStorage.getItem('blogSettings')
        return saved ? JSON.parse(saved) : {
            isAddingGroup: false,
            isShowingBg: true,
            targetColor: '#ffffff'
        }
    }

    const settings = ref(loadSettings())

    // 保存设置到 localStorage
    const saveSettings = () => {
        localStorage.setItem('blogSettings', JSON.stringify(settings.value))
    }



    // 切换添加矩形模式
    const toggleAddGroupMode = () => {
        settings.value.isAddingGroup = !settings.value.isAddingGroup
        saveSettings()
    }

    const toggleShowingBg = () => {
        settings.value.isShowingBg = !settings.value.isShowingBg
        saveSettings()
    }

    const resetShowingBg = (title) => {
        if (title === 'Home') {
            settings.value.isShowingBg = true
        } else {
            settings.value.isShowingBg = false
        }
        saveSettings()
    }

    const setTargetColor = (color) => {
        settings.value.targetColor = color
        // 设置 --text-primary 为 targetColor
        document.documentElement.style.setProperty(
            '--target-color',
            settings.value.targetColor
        )
        saveSettings()
    }

    // 监听变化自动保存
    watch(settings, saveSettings, { deep: true })

    return {
        settings,
        toggleAddGroupMode,
        toggleShowingBg,
        resetShowingBg,
        setTargetColor
    }
})