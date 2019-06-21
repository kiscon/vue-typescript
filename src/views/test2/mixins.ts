// import { Vue, Component } from 'vue-property-decorator';
//
// declare module 'vue/types/vue' {
//   interface Vue {
//     methodFromMixins(value: number | string): void;
//     // 记得声明一下，要不然会报错 Property 'methodFromMixins' does not exist on type 'App'.
//   }
// }

// @Component
// export default class Mixins extends Vue {
//   public methodFromMixins(value: number | string): void {
//     console.log('method from mixins', value);
//   }
//
// }

// @ts-ignore
import { Component, Vue, Watch } from 'vue-property-decorator'

// @Component 修饰符注明了此类为一个 Vue 组件

// @ts-ignore
@Component({
// 所有的组件选项都可以放在这里
})

export default class App extends Vue {
  // 初始数据可以直接声明为实例的属性
  message: string = 'Hello!'

  // 组件方法也可以直接声明为实例的方法
  onClick (): void {
    window.alert(this.message)
  }
}