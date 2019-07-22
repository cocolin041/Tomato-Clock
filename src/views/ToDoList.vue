<template>
  <ToDoList/>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDoList from '@/components/ToDoList.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'toDoListPage',
  components: {
    ToDoList
  }
})
</script>
