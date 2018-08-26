<template>
  <div>
    <p>{{message}}</p>
    <p><button @click="onClick">Click!</button></p>
  </div>
</template>
<script lang="ts">
  import index from "./index";
  export default index;
</script>
<style lang="less" scoped>
  @import "./app.less";
</style>
