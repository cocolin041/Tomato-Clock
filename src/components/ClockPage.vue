<template>
  <div class="clock-page">
    <div class="time">
      <div class="missions">

        <input placeholder="ADD A NEW MISSION…">
        <div class="mission-header">
          <div class="big-circle"></div>
          <div class="name-and-circle">
            <div class="mission-name">the First thing to do today</div>
            <div class="small-circle"></div>
          </div>
        </div>

        <div class="timer">25:00</div>

      </div>

      <div class="clock">
        <div class="clock-border"></div>
        <div class="clock-stroke"></div>
        <div class="clock-inside"></div>
        <div class="play-circle">
          <i class="fas fa-play"></i>
          <div class="stop"></div>
        </div>
      </div>
    </div>

    <div class="nav">
      <div class="menu">
        <i class="fas fa-bars"></i>
        <i class="fas fa-chart-bar"></i>
        <i class="fas fa-music"></i>
      </div>
      
      <div class="logo">POMODORO</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ClockPage',
  props: {

  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
    @import './clock-page.scss';
</style>