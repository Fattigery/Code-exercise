<template>
	<div class="getter">
		<h4>doubleCounter：{{ $store.getters.doubleCounter }}</h4>
		<h4>friendsTotalAge：{{ $store.getters.totalAge }}</h4>
		<h4>message：{{ $store.getters.message }}</h4>

		<hr />

		<!-- 根据id获取某一个朋友的信息（给getters传递参数） -->
		<h4>222-friend：{{ $store.getters.getFriendById(222) }}</h4>
		<button @click="changeAge">changeAge</button>

		<hr />

		<!-- setup中获取getters数据 -->
		<!-- 使用computed函数 -->
		<h4>message：{{ message }}</h4>
		<!-- toRefs解构出的数据 -->
		<h4>totalAge：{{ totalAge }}</h4>
	</div>
</template>

<script setup>
	import { toRefs, reactive, computed } from 'vue';
	import { useStore, mapGetters } from 'vuex';

	const store = useStore();

	// 1.在setup中使用mapGetters（不推荐）
	// const { message: messageFn } = mapGetters(['message']);
	// const message = computed(messageFn.bind({ $store: store }));

	// 2.使用computed（推荐）
	const message = computed(() => store.getters.message);

	// 3.使用toRefs对store.getters中的数据进行解构，解构出来的数据依然具有响应式
	// let { totalAge } = toRefs(store.getters);
	// toRefs期望传入的是一个响应式对象，但是store.getters不是响应式对象，所以可以使用reactive将其转换为响应式对象
	let { totalAge } = toRefs(reactive(store.getters));

	function changeAge() {
		store.commit('changeAge', 20);
	}
</script>

<style lang="less" scoped></style>
