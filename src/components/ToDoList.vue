<template>
  <div class="to-do-list">

    <div class="menu-clock">
      <div class="menu">
        <span class="todolist"><i class="fas fa-bars"></i>to-do list</span>
        <span class="analytics"><i class="fas fa-chart-bar"></i>analytics</span>
        <span class="ringtones"><i class="fas fa-music"></i>ringtones</span>
      </div>

      <div class="clock">
        <div class="timing-circle">
          <div class="play-circle">
            <div class="circle-stroke-outside-2"></div>
            <div class="circle-stroke-outside"></div>
            <div class="circle-stroke"></div>
            <i class="fas fa-play"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="missions">
      
    </div>

    <div class="close-logo">
      
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'to-do-list',
  props: {
    
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
    @import './to-do-list.scss';
</style>