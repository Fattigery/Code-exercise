<template>
	<div class="state">
		<h4>name：{{ name }}</h4>
		<h4>age：{{ age }}</h4>
		<h4>count：{{ count }}</h4>
		<h4>hobby：{{ hobby }}</h4>

		<button @click="changeState">changeState</button>
		<button @click="resetState">重置state</button>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useUserStore } from '../stores/user.js';

	const userStore = useUserStore();

	// 解构state并保持响应性
	let { name, age, count, hobby } = storeToRefs(userStore);

	// 修改state
	function changeState() {
		// 一个一个修改
		// userStore.name = '李四';
		// userStore.age = 20;

		// 同时修改多个属性（接受一个对象）
		// userStore.$patch({
		// 	name: '王二',
		// 	age: 22,
		// 	count: userStore.count + 100
		// });

		// 同时修改多个属性（接受一个函数）
		userStore.$patch(state => {
			state.hobby.push('游泳');
			state.age = 28;
		});
	}

	// 重置state
	function resetState() {
		userStore.$reset();
	}
</script>

<style lang="less" scoped></style>
