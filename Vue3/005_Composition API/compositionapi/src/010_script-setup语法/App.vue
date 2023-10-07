<template>
	<div>
		<!-- 计数器 -->
		<h4>{{ counter }}</h4>
		<button @click="increment">+1</button>

		<Home name="张三" :age="age" @changeHomeAge="changeHomeAge" ref="homeComponent"></Home>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	// 导入的组件会自动进行注册，可以直接在模板中使用
	import Home from './components/Home.vue';

	// 定义的变量，函数声明等，都不用手动return，可以直接在模板中使用
	let age = ref(18);

	let counter = ref(12);
	function increment() {
		counter.value++;
	}

	// 子组件发出事件时触发的函数（对age进行修改）
	function changeHomeAge(value) {
		age.value = value;
	}

	// 获取子组件的ref引用
	let homeComponent = ref(null);
	// 打印子组件暴漏的内容
	onMounted(() => {
		console.log(homeComponent.value.$el, homeComponent.value.num1, homeComponent.value.num2);
	});
</script>

<style lang="css" scoped></style>
