<template>
	<div class="app">
		<Home />
		<About />
	</div>
</template>

<script>
	// 正常导入组件（会将所有组件都打包在一个JS文件中，会导致这个JS文件越来越大，容易造成首屏渲染速度变慢）
	// import Home from './components/Home.vue';
	// import About from './components/About.vue';

	// 异步导入组件（异步导入的组件在打包的时候会被打包到一个个单独的JS文件中，这样的话，当使用到某个组件的时候，才会从服务器请求这个组件的JS文件）
	// 方式一：路由懒加载
	const Home = () => import('./components/Home.vue');
	// 方式二：Vue提供的异步加载组件函数 defineAsyncComponent，该函数需要返回一个promise对象，而import函数导入返回的就是一个promise对象
	import { defineAsyncComponent } from 'vue';
	const About = defineAsyncComponent(() => import('./components/About.vue'));

	export default {
		name: 'App',
		components: {
			Home,
			About
		}
	};
</script>

<style scoped>
	.active {
		color: red;
	}
</style>
