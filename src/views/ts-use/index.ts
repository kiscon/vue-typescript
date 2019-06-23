import { Component, Vue, Watch, Prop, Emit } from 'vue-property-decorator'
import { Topic } from './interface'
import child from '@/components/child.vue'
import Api from '@/config/api'

@Component({
  components: {
    child
  }
})
export default class App extends Vue {
  // initial data
  msg: number = 123
  propMsg: string = '父传子'
  topics: Topic[] = []
  list: Array<number> = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
  ]

  created() {
  }
  // lifecycle hook
  mounted() {
    this.greet()
    this.getTopic()
    this.getData()
  }
  // computed
  get computedMsg() {
    return 'computed ' + this.msg
  }
  // watch
  @Watch('msg')
  watchMsg(val: any){
    console.log(val)
  }

  // method
  greet() {
    console.log('greeting: ' + this.msg)
    // @ts-ignore
    // this.$emit('postSideShow', this.msg)
    this.postSideShow()
  }

  @Emit('postSideShow')
  postSideShow() {
    return this.msg
  }

  getTopic(): void {
    const data = {
      date: new Date().getTime().toString(),
      title: '主题',
      id: 1,
      tab: 'tab',
      tags: ['a','b','c']
    }
    // this.topics = <Topic[]>data
  }
  getData(): void {
    fetch(Api.base_api_url).then((res) => {
      return res.json()
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }
  childClick(val: number) {
    console.log(val)
  }
}