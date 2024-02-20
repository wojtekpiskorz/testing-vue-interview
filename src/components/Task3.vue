<script setup
        lang="ts">
import {TREE_MOCK} from "../defaults/treeMock.ts";
import {reactive} from "vue";
import ListItem from "./List.vue";

const data = reactive(TREE_MOCK)


function renderStep(data) {

  // for each in data
  // if there is data.children


}






</script>

<template>

  <ol>
      <ListItem  v-for="item in data" :key="item.code" :code="item.code" :children="item.children" :name="item.name" />
  </ol>

</template>

<style scoped>
</style>
