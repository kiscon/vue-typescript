const amapAk = () => {
  return new Promise(function (resolve, reject) {
    // @ts-ignore
    window.amapInit = function () {
      resolve()
    }
    let script = document.querySelector('#amap-script')
    if (script) {
      resolve()
      return
    }
    script = document.createElement('script')
    script.setAttribute('id', 'amap-script')
    // @ts-ignore
    script.src = '//webapi.amap.com/maps?v=1.4.10&key=f6c5605653a47c5d22640c61d48f24aa&callback=amapInit'
    // @ts-ignore
    script.onerror = reject
    document.head.appendChild(script)
  })
}

export {
  amapAk
}
