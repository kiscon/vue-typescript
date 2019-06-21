module.exports = {
// ...
	chainWebpack: config => {
// https://github.com/vuejs/vue-cli/issues/1104
// typescript building error when import .vue file with separate .ts file, 即在 ts 文件中无法引入 .vue 组件;
// 下面的代码解决上面这个 bug, 解决方法来源: https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/111
		config.plugins.delete('fork-ts-checker');
		config.module
			.rule('ts')
			.use('ts-loader')
			.tap(options => {
				return { ...options,
					'transpileOnly': false
				}
			})
	}
}