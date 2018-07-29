<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
  import Api from "@/config/api"
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
    },
    mounted() {
      // 打印不同的环境
      console.log(process.env.NODE_ENV);
      this.getData();
    },
    methods: {
      getData() {
        fetch(Api.base_api_url).then((res)=>{
          return res.json();
        }).then((data)=>{
          console.log(data);
        }).catch((err)=>{
          console.log(err);
        })
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