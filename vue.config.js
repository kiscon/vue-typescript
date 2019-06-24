// https://github.com/vuejs/vue-cli/blob/dev/docs/zh/config/README.md
// https://www.cnblogs.com/ginkgo-leaves/p/10718478.html
const path = require('path')
module.exports = {
	publicPath: '/',
	outputDir: process.env.outputDir || 'dist',
	assetsDir: '',
	runtimeCompiler: false,
	productionSourceMap: false,
	lintOnSave: false,
	devServer: {
		host: 'localhost',
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	},
	chainWebpack: config => {
		// https://github.com/vuejs/vue-cli/issues/1104
		// typescript building error when import .vue file with separate .ts file, 即在 ts 文件中无法引入 .vue 组件;
		// 下面的代码解决上面这个 bug, 解决方法来源: https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/111
		config.plugins.delete('fork-ts-checker')
		config.module
			.rule('ts')
			.use('ts-loader')
			.tap(options => {
				return { ...options,
					'transpileOnly': false
				}
			})
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type =>
			config.module
				.rule('less')
				.oneOf(type)
				.use('style-resource')
				.loader('style-resources-loader')
				.options({
					patterns: [path.join(__dirname, './src/common/less/reset.less')]
				})
		)
	}
}