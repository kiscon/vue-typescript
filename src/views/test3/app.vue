<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
    import App from "./app.js";
    export default App;
</script>
<style lang="less" scoped>
  @import "./app.less";
</style>