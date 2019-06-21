<template>
  <div>
    <p>{{message}}</p>
    <p><button @click="onClick">Click!</button></p>
  </div>
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
