<template>
  <div>
    <ul>
      <li><router-link to="test1">跳转到test1（vue-class-component）</router-link></li>
      <li><router-link to="test2">跳转到test2（vue-property-decorator）</router-link></li>
    </ul>
  </div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component({
		components: {
		}
	})
	export default class App extends Vue {}
</script>
<style lang="less" scoped>
  ul{
    outline: none;
    list-style: none;
    li{
      padding: 10px;
      a{
        text-decoration: none;
      }
    }
  }
</style>
