const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	pages: {
		index: {
			// entry: 'sec/001_setup的基本使用/main.js'
			// entry: 'src/002_setup的参数/main.js'
			entry: 'src/003_响应式API/main.js'
		}
	}
});
