<script setup
        lang="ts">
import ColorPicker from "./Task2/ColorPicker.vue";
import {ref} from "vue";

const colorName = ref('')

</script>

<template>
    <div class="task-2">
	    <label for="color-name">Color name</label>
        <input id="color-name" v-model="colorName" />
    </div>
	  <ColorPicker v-model="colorName" />
</template>

<style scoped>
.task-2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
