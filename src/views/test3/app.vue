<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  ul{
    outline: none;
    list-style: none;
    li{
      padding: 10px;
    }
    a{
      text-decoration: none;
    }
  }
</style>