<template>
	<div class="basic">
		<h4>counter：{{ homeStore.counter }}</h4>
		<h4>直接解构counter：{{ counter }}</h4>
		<h4>toRefsCounter：{{ counter2 }}</h4>
		<h4>storeToRefsCounter：{{ counter3 }}</h4>

		<h4>doubleCounter：{{ homeStore.doubleCounter }}</h4>
		<button @click="homeStore.changeCounter">increment</button>
		<button @click="changeCounter">changeCounter</button>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { toRefs } from 'vue';
	import { useHomeStore } from '../stores/home.js';

	const homeStore = useHomeStore();

	const { counter } = homeStore; // 直接解构，不是响应式的
	const { counter: counter2 } = toRefs(homeStore); // 是响应式的
	const { counter: counter3 } = storeToRefs(homeStore); // 是响应式的

	// 可以直接从store中解构action，因为它们被绑定到了store上
	const { changeCounter } = homeStore;
</script>

<style lang="less" scoped></style>
