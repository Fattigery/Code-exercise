<template>
	<div class="app">
		<h4>App组件</h4>
		<div class="nav">
			<!-- 路由导航，<router-link>将呈现为一个<a>标签 -->
			<router-link :to="{ name: 'home' }">首页</router-link>
			<router-link to="/about">关于</router-link>
			<router-link to="/user/123">用户</router-link>
			<router-link to="/order">订单</router-link>
		</div>

		<div class="nav1">
			<!-- 编程式路由导航 -->
			<span @click="homeSpanClick">首页</span>
			<button @click="aboutBtnClick">关于</button>
		</div>

		<!-- 路由占位组件 -->
		<router-view></router-view>
	</div>
</template>

<script setup>
	import { onMounted, watch } from 'vue';
	import { useRoute, useRouter } from 'vue-router';

	const route = useRoute();
	const router = useRouter();

	// 监听当前路由对象中meta数据的变化
	watch(
		() => route.meta,
		newValue => {
			console.log(newValue.title);
		}
	);

	// -------------------------------------------------------------

	// 编程式路由导航
	function homeSpanClick() {
		// router.push('/home');
		router.push({ path: '/home' });
	}

	function aboutBtnClick() {
		router.push({ path: '/about', query: { name: 'coder', age: '18' } });
	}
</script>

<style lang="css" scoped>
	.app .nav,
	.app .nav1 {
		padding: 10px 0;
	}

	.app .nav1 {
		margin-top: 10px;
	}

	.app .nav a,
	.app .nav1 span {
		background-color: #ccc;
		padding: 10px 20px;
	}

	.app .nav a:not(:last-child) {
		border-right: 1px solid #999;
	}

	.app .nav a:hover {
		background-color: #999;
		color: white;
	}

	.app .nav1 span {
		margin-right: 10px;
	}

	.app .active {
		color: red;
	}
</style>
