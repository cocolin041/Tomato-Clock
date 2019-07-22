<template>
    <ClockPage/>
</template>

<script lang="ts">
import Vue from 'vue'
import ClockPage from '@/components/ClockPage.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'clockPage',
  components: {
    ClockPage
  }
})
</script>
