import { Component, Vue, Watch } from 'vue-property-decorator'
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
  topics: any
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
  getTopic(): void {
    let data:Topic = {
      id: 1,
      date: Date.now().toString(),
      title: '主题',
      summary: '摘要',
      tab: 'tab',
      pv: 10,
      commentsCount: 2,
      tags: ['a','b','c']
    }
    this.topics = data
    console.log(this.topics)
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