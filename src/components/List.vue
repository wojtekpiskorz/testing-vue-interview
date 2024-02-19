<script setup lang="ts">

  type List = {
    code: number,
    name: string,
    children: Array
  }

  defineProps<List>()

</script>


<template>
  <li >{{name}}</li>
  <ol v-if="children">
    <List v-for="item in children" :key="code" :code="item.code" :children="item.children" :name="item.name"/>
  </ol>
</template>
