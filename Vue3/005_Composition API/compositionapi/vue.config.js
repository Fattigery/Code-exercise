const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	pages: {
		index: {
			// entry: 'sec/001_setup的基本使用/main.js'
			// entry: 'src/002_setup的参数/main.js'
			// entry: 'src/003_响应式API/main.js'
			// entry: 'src/004_readonly函数的使用/main.js'
			// entry: 'src/005_toRefs、toRef的使用/main.js'
			// entry: 'src/006_computed函数的使用/main.js'
			// entry: 'src/007_setup中获取ref引用元素/main.js'
			// entry: 'src/008_setup中侦听数据的变化/main.js'
			// entry: 'src/009_setup中Hooks练习/main.js'
			entry: 'src/010_script-setup语法/main.js'
		}
	}
});
