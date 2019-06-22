<template>
  <div class="login-page">
    <section class="login-wrap">
      <h2 class="title">
        <span >用户登录</span>
        <i>|</i>
        <span >管理员登录</span>
      </h2>
      <div class="input-wrap">
        <span class="icon icon-account"></span>
        <input maxlength="30" placeholder="请输入账户名">
      </div>
      <div class="input-wrap">
        <span class="icon icon-password"></span>
        <input type="text" maxlength="20" placeholder="请输入密码" autocomplete="off">
      </div>
      <button class="login-btn">登录</button>
    </section>
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