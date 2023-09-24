const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	// 配置入口文件
	pages: {
		index: {
			// 当有多行entry时，Vue会以最后一行entry为准
			// entry: 'src/001_创建、注册、使用组件/main.js',
			// entry: 'src/002_组件通信_父传子/main.js'
			// entry: 'src/003_组件通信_子传父/main.js'
			// entry: 'src/004_组件通信_案例练习/main.js'
			// entry: 'src/005_组件插槽_基本使用/main.js'
			// entry: 'src/006_组件插槽_具名插槽/main.js'
			// entry: 'src/007_组件插槽_作用域插槽/main.js'
			// entry: 'src/008_非父子组件之间通信_provide和inject/main.js'
			// entry: 'src/009_任意组件之间通信_Mitt库/main.js'
			// entry: 'src/010_生命周期函数（选项）/main.js'
			// entry: 'src/011_ref获取元素或组件的引用/main.js'
			// entry: 'src/012_动态组件component/main.js'
			// entry: 'src/013_keep-alive的使用/main.js'
			// entry: 'src/014_异步组件（分包处理）/main.js'
			entry: 'src/015_组件的v-model/main.js'
		}
	}
});
