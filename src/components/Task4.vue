<script setup
        lang="ts">

import {computed, reactive, ref} from "vue";
import {getStringWidth} from "../utils/string.ts";

const items = reactive(['Hello', 'Im very long text', 'How are you?', 'Are u ok?'])


const width = ref(200)

const mappedItems = computed(() => {
  return items.map((item) => {
    return {
      text: item,
      width: getStringWidth(item, "16px arial")
    }
  })
})

const includedItems = computed(() => {
  let itemsWidth = 0;
  let includedItems = 0;
  let gap = 8;
  mappedItems.value.forEach((item) => {
    if (width.value < itemsWidth) return
    itemsWidth = itemsWidth + item.width + gap;
    includedItems++
  })
  return includedItems
})

const remainingItems = computed(() => items.length - includedItems.value)

// Use to determinate string size
// getStringWidth
</script>

<template>
	<input type="text" v-model="width">
  <div ref="testItem" class="badges" :style="{ width: `${width}px` }">
      <div  class="badge" v-for="item in items" :key="item">
          <span >{{ item }}</span>
      </div>
      <div class="badge-counter">Counter: {{remainingItems}}</div>
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
