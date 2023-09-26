<template>
	<div class="app">
		<button @click="componentID = 'Home'">Home</button>
		<button @click="componentID = 'About'">About</button>
		<component :is="componentID"></component>
	</div>
</template>

<script>
	// 正常导入组件（会将所有的组件打包在一个JS文件中）
	// import Home from './components/Home.vue';
	// import About from './components/About.vue';

	// 异步组件（异步组件在打包的时候会被打包到一个个单独的JS文件中，并且在使用到某个组件的时候，才会从服务器请求这个组件的JS文件）
	// Vue提供了defineAsyncComponent方法来定义异步组件。
	// 该方法接收一个返回promise的函数，import函数导入返回的就是一个promise，所以它们之间可以搭配使用。
	import { defineAsyncComponent } from 'vue';
	const About = defineAsyncComponent(() => import('./components/About.vue'));
	const Home = defineAsyncComponent(() => import('./components/Home.vue'));

	export default {
		name: 'App',
		components: {
			Home,
			About
		},
		data() {
			return {
				componentID: 'Home'
			};
		}
	};
</script>

<style scoped></style>
