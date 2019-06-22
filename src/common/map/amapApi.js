/*
功能：高德地图JS
*/
/* global AMap */
const utils = {
  getObjType: function (obj) {
    return ({}).toString.call(obj).slice(8, -1)
  }
}
const aMap = {
  createCircle(point, radius) {
    let circle = new AMap.Circle({
      center: point, // 圆心位置
      radius: radius,  //半径
      fillColor: '#358af2', // 圆形填充颜色
      strokeWeight: 2, // 圆形边线的宽度
      strokeColor: '#822ccc', // 圆形边线颜色
      fillOpacity: 0.3 // 圆形填充的透明度
      // strokeOpacity: 0.3 // 圆形边线的透明度
    })
    return circle
  },
  createPolygon(pointArr) {
    let polygon =  new AMap.Polygon({
      path: pointArr,
      fillColor: '#358af2', // 圆形填充颜色
      strokeWeight: 2, // 圆形边线的宽度
      strokeColor: '#358af2', // 圆形边线颜色
      fillOpacity: 0.3 // 圆形填充的透明度
    })
    return polygon
  },
  createPolyline(pointArr) {
    let polyline = new AMap.Polyline({
      path: pointArr,
      strokeColor: '#B89AE5',
      strokeWeight: 4,
      strokeOpacity: 1
    })
    return polyline
  },
  drawingManager(map) {
    let drawingManager = new AMap.MouseTool(map)
    return drawingManager
  },
  drawingStyle() {
    let styleOptions = {
      strokeColor: '#358af2', //边线颜色。
      fillColor: '#6130CA', //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 2, //边线的宽度，以像素为单位。
      // strokeOpacity: 0.8,     //边线透明度，取值范围0 - 1。
      fillOpacity: 0.2, //填充的透明度，取值范围0 - 1。
      strokeStyle: 'solid' //边线的样式，solid或dashed。
    }
    return styleOptions
  },
  centerZoom(map, point, zoom) {
    map.setZoomAndCenter(zoom, point)
  },
  createPoint(lng, lat) {
    return new AMap.LngLat(lng, lat)
  },
  addMapOverlay(map, obj) {
    map.add(obj)
  },
  removeMapOverlay(map, obj) {
    if (!obj) return
    if (utils.getObjType(obj) === 'Array') {
      for(let i = 0, item; (item = obj[i++]);) {
        map.remove(item)
      }
    } else if (utils.getObjType(obj) === 'Object') {
      Object.keys(obj).forEach(k => {
        try {
          map.remove(obj[k])
        } catch (e) {
          map.remove(obj)
        }
      })
    } else {
      map.remove(obj)
    }
  },
  createInfoWindow() {
    let infoWindow = new AMap.InfoWindow({
      content: '',
      offset: new AMap.Pixel(0, -5),
      size: new AMap.Size(335, 280),
      autoMove: false // 是否自动调整窗体到视野内
    })
    return infoWindow
  },
  openInfoWindow(map, infoWd, point) {
    infoWd.open(map, point)
  },
  closeInfoWindow(map) {
    map.clearInfoWindow()
  },
  autoCompleteEvent(ac, cb) {
    AMap.event.addListener(ac, 'select', function(e) {
      let _value = e.poi
      cb && cb(_value)
    })
  },
  createMarker(args) {
    const { point, iconPath } = {...args}
    let marker = new AMap.Marker({
      icon: iconPath,
      position: point
    })
    return marker
  },
  createLabel(args) {
    const {
    	position,
	    labelTxt = '',
	    offset = new AMap.Pixel(-10,-34)
    } = {...args}
    let label = new AMap.Text({
      text: labelTxt,
      position: position,
      offset: offset,
      textAlign: 'left',
      verticalAlign: 'middle'
    })
    label.setStyle({
      'box-sizing': 'border-box',
      'width': 'auto',
      'padding': '3px',
      'font-size': '12px',
      'border': '1px solid #D9DCE2',
      'border-radius': '4px',
      'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.06)',
      'color': '#666',
      'background-color': '#fff'
    })
    return label
  },
  getLocation(point, cb) {
    let geoc = new AMap.Geocoder()
    let address = ''
    geoc.getAddress(point, function(status, result) {
      if (status === 'complete' && result.info === 'OK') {
        // result中对应详细地理坐标信息
        address = result.regeocode.formattedAddress
      }
      cb && cb(address)
    })
  },
  createTraffic() {
    return new AMap.TileLayer.Traffic({ zIndex: 10 })
  },
  setViewArea(map, overlayListArr) {
    map.setFitView(overlayListArr)
  },
  toggleCity(args) {
    const {map, cityName, zoom} = {...args}
    map.setCity(cityName)
    map.setZoom(zoom)
  },
  clearOverlays(map) {
    map.clearMap()
  }
}
export default aMap
