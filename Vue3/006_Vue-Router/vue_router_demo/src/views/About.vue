<template>
	<div>
		<h4>About：{{ $route.query }}</h4>

		<button @click="goBtnClick">前进</button>
		<button @click="backBtnClick">后退</button>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router';

	const router = useRouter();

	// 前进一步
	function goBtnClick() {
		router.go(1);
	}

	// 后退一步
	function backBtnClick() {
		router.go(-1);
	}
</script>

<style lang="less" scoped></style>
