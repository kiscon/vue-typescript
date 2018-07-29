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
  import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
  import { Topic } from './interface'
  import testComponent from '@/components/test_1.vue'

  @Component({
    components: {
      testComponent
    }
	})
	export default class App extends Vue {

		// initial data
		msg: number = 123;
    propMsg: string = '父传子';
    topics: Topic[] = [];


    created() {
    }
		// lifecycle hook
		mounted() {
			this.greet()
      this.getTopic()
		}
		// computed
		get computedMsg() {
			return 'computed ' + this.msg
		}
		// watch
		@Watch('msg')
    watchMsg(val: any){
      console.log(val);
    }

		// method
		greet() {
			console.log('greeting: ' + this.msg)
      this.$emit("postSideShow", this.msg)
		}
		getTopic() {
		  const data = {
      //   date: new Date().getTime().toString(),
      //   title: '主题',
      //   id: 1,
      //   tab: 'tab',
      //   // tags: ['a','b','c']
      }
      // this.topics = <Topic[]>data
    }

	}
</script>
<style lang="less" scoped>

</style>
