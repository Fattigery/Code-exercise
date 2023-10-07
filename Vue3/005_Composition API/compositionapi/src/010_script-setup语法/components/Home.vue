<template>
	<div>
		<h4>Home：{{ name }} - {{ age }}</h4>
		<button @click="changeAge">修改age</button>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	// 在<script setup>中使用defineProps代替props
	const props = defineProps({
		name: {
			type: String,
			default: ''
		},
		age: {
			type: Number,
			default: 0
		}
	});

	// 在<script setup>中使用defineEmits代替emits
	// 返回的emits用于抛出事件
	const emits = defineEmits(['changeHomeAge']);
	function changeAge() {
		emits('changeHomeAge', 22);
	}

	let num1 = 10;
	let num2 = 20;

	// 暴漏父组件可以拿到的数据
	defineExpose({
		num1
	});
</script>

<style lang="css" scoped></style>
