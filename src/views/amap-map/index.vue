<template>
  <section class="map-container">
    <section id="mapBox" class="map-box"></section>
    <ul class="control-bar">
      <li :class="{'active': isRTT}" @click="openOrCloseRTT">实时路况</li>
    </ul>
  </section>
</template>
<script>
  import { Component, Vue } from 'vue-property-decorator'
  import Index from './index.ts'
  @Component({
    mixins: [Index]
  })
  export default class App extends Vue {
  }
</script>
<style lang="less" scoped>
  @import "./index.less";
</style>
