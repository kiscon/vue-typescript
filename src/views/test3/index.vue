<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-text="item"></li>
    </ul>
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