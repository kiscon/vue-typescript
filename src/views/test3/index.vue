<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
  import Index from './index'
  export default Index
</script>
<style lang="less" scoped>
  @import "./index.less";
</style>