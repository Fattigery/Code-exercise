<template>
	<div class="action">
		<h4>count：{{ userStore.count }}</h4>

		<button @click="userStore.addCount">addCount</button>
		<button @click="userStore.addCountNum(10)">addCountNum10</button>
	</div>
</template>

<script setup>
	import { useUserStore } from '../stores/user.js';

	const userStore = useUserStore();

	userStore.fetchBanners();
</script>

<style lang="less" scoped></style>
