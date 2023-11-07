<template>
	<div class="home">
		<h4>counter：{{ homeStore.counter }}</h4>
		<h4>counter：{{ counter }}</h4>
		<h4>counter：{{ counter2 }}</h4>
		<h4>counter：{{ counter3 }}</h4>

		<h4>doubleCounter：{{ homeStore.doubleCounter }}</h4>
		<button @click="homeStore.changeCounter">increment</button>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useHomeStore } from '../stores/home.js';

	const homeStore = useHomeStore();

	const { counter } = homeStore; // 直接解构，不是响应式的
	const { counter: counter2 } = toRefs(homeStore); // 是响应式的
	const { counter: counter3 } = storeToRefs(homeStore); // 是响应式的
</script>

<style lang="less" scoped></style>
