<template>
	<div class="mutations">
		<h4>name：{{ $store.state.name }}</h4>

		<button @click="changeName('coder')">修改name</button>
	</div>
</template>

<script setup>
	import { useStore, mapMutations } from 'vuex';

	const store = useStore();

	// function changeName() {
	// 	// 提交mutation并传递参数
	// 	store.commit('changeName', 'coderhwy');
	// }

	// 在setup中使用mapMutations
	let mutations = mapMutations(['changeName']);
	let newMutations = {};
	Object.keys(mutations).forEach(key => {
		newMutations[key] = mutations[key].bind({ $store: store });
	});
	let { changeName } = newMutations;
</script>

<style lang="less" scoped></style>
