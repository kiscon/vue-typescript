import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Login'
})
export default class App extends Vue {
  account: string = 'admin'
  password: string = '123456'

  submit(): void {
    this.$router.push({path: '/amap-page'})
  }
}