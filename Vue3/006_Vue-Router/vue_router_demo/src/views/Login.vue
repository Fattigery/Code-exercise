<template>
	<div class="login">
		<h4>登录页面</h4>
		<button @click="loginClick">登录</button>
		<button @click="removeToken">退出登录</button>
	</div>
</template>

<script setup>
	import { useRoute, useRouter } from 'vue-router';
	const route = useRoute();
	const router = useRouter();

	function loginClick() {
		console.log('点击了登录按钮');
		window.localStorage.setItem('token', '123456789');

		// 跳转到来登录页面之前要去的页面
		router.push(`${route.query.redirect || '/home'}`);
	}

	function removeToken() {
		window.localStorage.removeItem('token');
	}
</script>

<style lang="less" scoped></style>
