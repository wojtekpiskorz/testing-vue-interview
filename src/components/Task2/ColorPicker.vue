<script setup
        lang="ts">
import useColor from "../../hooks/useColor.ts";

const props = defineProps<{
    colorName?: string
}>()

const { colorHash, color } = useColor(props.colorName)
</script>

<template>
    <div class="color-picker">
        <label for="color-picker">{{color}}</label>
        <input id="color-picker" v-model="colorHash" type="color">
    </div>
</template>

<style scoped>
.color-picker {
    display: flex;
    gap: 8px;
}
</style>
