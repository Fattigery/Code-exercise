<template>
	<div class="app">
		<h4>counter：{{ homeStore.counter }}</h4>
		<h4>doubleCounter：{{ homeStore.doubleCounter }}</h4>
		<button @click="homeStore.changeCounter">increment</button>
	</div>
</template>

<script setup>
	import { useHomeStore } from './stores/home.js';

	const homeStore = useHomeStore();
	console.log(homeStore.counter);
</script>

<style lang="less" scoped></style>
