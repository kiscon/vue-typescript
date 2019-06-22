// @ts-ignore
import { Vue, Component } from 'vue-property-decorator'
import { amapAk } from '@/common/js/mapAk'
// @ts-ignore
import aMap from '@/common/map/amapApi.js'


@Component
export default class App extends Vue {
  // initial data
  mapApi: Object = {}
  mapConfig: Object = {
    traffic: null,
    infoWindow: null
  }
  map: null = null
  isRTT: Boolean = false

  created() {
    this.setAmapLink()
  }
  //
  mounted() {
    // @ts-ignore
    console.log(process.env.NODE_ENV)
  }

  // method
  setAmapLink() {
    amapAk().then(() => {
      this.initAmap()
    }).catch(e => {
      console.log(e)
    })
  }
  initAmap() {
    let mapApi = aMap
    this.mapApi = mapApi
    // @ts-ignore
    let map = new AMap.Map('mapBox', {
      resizeEnable: true,
      zoom: 12
    })
    this.map = map
    // @ts-ignore
    AMap.plugin([
      'AMap.ToolBar',
      'AMap.Autocomplete',
      'AMap.PlaceSearch',
      'AMap.MouseTool'
    ], () => {
      // @ts-ignore
      map.addControl(new AMap.ToolBar())
    })
    // @ts-ignore
    this.mapConfig.traffic = mapApi.createTraffic()
    // @ts-ignore
    this.mapConfig.infoWindow = mapApi.createInfoWindow()
  }
  openOrCloseRTT() {
    // @ts-ignore
    let _traffic = this.mapConfig.traffic
    this.isRTT = !this.isRTT
    if (this.isRTT) {
      _traffic.setMap(this.map)
      _traffic.show()
      return
    }
    _traffic.hide()
  }
}
