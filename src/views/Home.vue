<template>
  <div class="home">
    <ClockPage/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ClockPage from '@/components/ClockPage.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    ClockPage
  }
})
</script>
