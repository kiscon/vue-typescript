// @ts-ignore
import { Vue, Component } from 'vue-property-decorator'
import Api from '@/config/api'

@Component
export default class App extends Vue {

  // initial data
  list: any[] = [
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
  ]

  created() {
  }
  //
  mounted() {
    // @ts-ignore
    console.log(process.env.NODE_ENV)
    console.log(3333)
    this.getData()
  }

  // method
  getData(): void {
    fetch(Api.base_api_url).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }
}