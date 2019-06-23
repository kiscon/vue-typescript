<template>
  <div>
    <p>子组件：helloMsg: {{helloMsg}}</p>
    <button @click="childClick">childClick{{msg}}</button>
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

	// @Component 修饰符注明了此类为一个 Vue 组件
	@Component({
		// 所有的组件选项都可以放在这里
	})
	export default class App extends Vue {

    // 初始数据可以直接声明为实例的属性
    @Prop({ default: 'default value' }) propMessage!: string

    helloMsg: string = 'Hello,' + this.propMessage
    msg: number = 1

    created() {
    }
    mounted() {
    }

    @Emit('childClick')
    childClick() {
      return ++this.msg
    }
  }
</script>
<style lang="less" scoped>

</style>
