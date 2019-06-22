<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
