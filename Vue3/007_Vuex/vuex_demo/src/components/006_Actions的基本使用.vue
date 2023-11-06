<template>
	<div class="actions">
		<h4>counter：{{ $store.state.counter }}</h4>
		<h4>name：{{ $store.state.name }}</h4>

		<button @click="dispatchIncrement">派发action修改increment</button>
		<button @click="dispatchChangeName('李四')">派发action修改name</button>
	</div>
</template>

<script setup>
	import { useStore } from 'vuex';

	const store = useStore();

	function dispatchIncrement() {
		store.dispatch('incrementAction');
	}

	function dispatchChangeName(value) {
		store.dispatch('changeNameAction', value);
	}

	// 派发action发送网络请求（action的异步操作，组件内获取action是什么时候结束的）
	store.dispatch('fetchHomeMultidataAction').then(data => {
		console.log('组件内', data);
	});
</script>

<style lang="less" scoped></style>
