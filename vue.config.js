module.exports = {
	baseUrl: '/',
	outputDir: process.env.outputDir || 'dist',
	assetsDir: '',
	runtimeCompiler: false,
	productionSourceMap: false,
	lintOnSave: false,
	css: {
		modules: true,
		sourceMap: false,
		loaderOptions: {
			less: {
				data: `@import '@/common/less/reset.less';`
			}
		}
	},
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
	}
}