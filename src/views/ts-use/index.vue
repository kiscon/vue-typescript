<template>
  <div>
    <input v-model="msg">
    <p>msg: {{msg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
    <div><testComponent :propMessage="propMsg"></testComponent></div>
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
