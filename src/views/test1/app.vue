<template>
  <div>
    <input v-model="msg">
    <p>msg: {{msg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
    <div><testComponent :propMessage="propMsg"></testComponent></div>
  </div>
</template>

<script lang="ts">
  import index from "./index";
  export default index;
</script>
<style lang="less" scoped>
  @import "./app.less";
</style>

