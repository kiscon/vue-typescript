# vue-test

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

## 路由懒加载配置
```
component: () => import('@/views/index.vue')
```

### 问题解决
https://blog.csdn.net/hesi726/article/details/80926331

### 配置
https://blog.csdn.net/u011818572/article/details/79999003
- 安装 @vue/cli-plugin-typescript，ts-loader

- https://cli.vuejs.org/zh/guide/browser-compatibility.html#polyfill
```
['@vue/app', {
  polyfills: [
    'es6.promise',
    'es6.symbol'
  ]
}]
```

- 打包路径，环境
```
"scripts": {
  "serve": "vue-cli-service serve --open",
  "build": "vue-cli-service build --dest=server/",
  "lint": "vue-cli-service lint",
  "test-build": "vue-cli-service build --mode=test --dest=server/"
},
```


