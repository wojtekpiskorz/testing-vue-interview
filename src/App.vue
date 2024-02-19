<script setup lang="ts">
import Task1 from './components/Task1.vue'
import Task2 from './components/Task2.vue'
import Task3 from './components/Task3.vue'
import Task4 from './components/Task4.vue'
import {ref} from "vue";

const taskToSolve = ref(1)

const descriptions = {
    1: 'By providing any search value we can notice that there are some warnings in the console. Could u explain them what are the warnings about? Provide solution which would eliminate them all.',
    2: 'By entering the color name, the [NAME] placeholder should be updated',
    3: 'Render any list that has tree structure (use treeMock data)',
    4: 'How many elements can fit into selection area',
}

const problems = {
    1: Task1,
    2: Task2,
    3: Task3,
    4: Task4,
}

const onClickTask = (task) => {
    taskToSolve.value = task
}
</script>

<template>
  <div class="app">
      <div class="problems-list">
          <span class="problems-list-title">Problems</span>
          <div class="problems-list-items">
              <div>
                  <button class="task-button" @click="onClickTask(1)">Task 1</button>
              </div>
              <div>
                  <button class="task-button" @click="onClickTask(2)">Task 2</button>
              </div>
              <div>
                  <button class="task-button" @click="onClickTask(3)">Task 3</button>
              </div>
              <div>
                  <button class="task-button" @click="onClickTask(4)">Task 4</button>
              </div>
          </div>
      </div>
      <div class="problems">
          <span v-text="`Problem ${taskToSolve}.`" />
	        <span class="problem-description" v-text="descriptions[taskToSolve]" />
          <Component :is="problems[taskToSolve]" />
      </div>
  </div>
</template>

<style>
.app {
    display: flex;
}

ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
}

.problems-list {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
}

.problems-list-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.problems-list-title {
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 600;
}

.problems {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.problem-description {
  font-size: 14px;
}

.task-button {
    flex-shrink: 0;
    width: 100px;
}
</style>
