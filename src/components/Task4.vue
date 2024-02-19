<script setup
        lang="ts">

import {ref} from "vue";
import {getStringWidth} from "../utils/string.ts";

const items = ['Hello', 'Im very long text', 'How are you?', 'Are u ok?']

const width = ref(200)

// Use to determinate string size
// getStringWidth
</script>

<template>
	<input type="text" v-model="width">
  <div class="badges" :style="{ width: `${width}px` }">
      <div class="badge" v-for="item in items" :key="item">
          <span>{{ item }}</span>
      </div>

      <div class="badge-counter">Counter: 0</div>
  </div>
</template>

<style scoped>

.badges {
    display: flex;
    gap: 8px;
    border: 1px solid red;
}

.badge {
    border: 1px solid;
    width: fit-content;
    white-space: nowrap;
}

.badge-counter {
    border: 1px solid green;
    width: fit-content;
    white-space: nowrap;
}
</style>
