<template>
	<div class="getters">
		<h4>doubleCount：{{ doubleCount }}</h4>
		<h4>doubleCountPlusOne：{{ doubleCountPlusOne }}</h4>
		<h4>queryHobby：{{ userStore.queryHobby(2) }}</h4>
		<h4>homeGetrer：{{ userStore.homeGetter }}</h4>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useUserStore } from '../stores/user.js';

	const userStore = useUserStore();

	let { doubleCount, doubleCountPlusOne } = storeToRefs(userStore);
</script>

<style lang="less" scoped></style>
