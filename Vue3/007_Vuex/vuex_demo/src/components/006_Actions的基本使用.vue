<template>
	<div class="actions">
		<h4>counter：{{ $store.state.counter }}</h4>
		<h4>name：{{ $store.state.name }}</h4>

		<button @click="dispatchIncrement">派发action修改increment</button>
		<button @click="dispatchChangeName('李四')">派发action修改name</button>
	</div>
</template>

<script setup>
	import { useStore, mapActions } from 'vuex';

	const store = useStore();

	function dispatchIncrement() {
		store.dispatch('incrementAction');
	}

	function dispatchChangeName(value) {
		store.dispatch('changeNameAction', value);
	}

	// 告诉vuex发送网络请求
	store.dispatch('fetchHomeMultidataAction');
</script>

<style lang="less" scoped></style>
