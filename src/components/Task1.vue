<script setup
        lang="ts">
import {computed, reactive, ref} from "vue";
import {TREE_MOCK} from "../defaults/treeMock.ts";
import {dfsSearch} from "../utils/search.ts";


const search = ref('')
const items = reactive(TREE_MOCK)

const result = computed(() => {
    if (search.value === '') return items

    return dfsSearch(JSON.parse(JSON.stringify(items)), search.value, ['name'])

})

const anySearch = computed(() => search.value.length)


const classes = computed(() => {
    if (anySearch.value) return ['with-search']

    return []
})
</script>

<template>
    <div :class="classes">
	    <input v-model="search" />
	    <pre>{{ JSON.stringify(result, null, 4) }}</pre>
    </div>
</template>

<style scoped>
pre {
    outline: 1px solid #ccc;
    padding: 24px;
}

.with-search pre {
    outline-color: mediumspringgreen;
}
</style>
