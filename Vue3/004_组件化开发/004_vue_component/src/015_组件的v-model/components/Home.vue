<template>
	<div>
		<h4>Home页面</h4>
		<button @click="btnClick">发射</button>
		<input type="text" :value="modelValue" @input="inputChange1" />
		<input type="text" :value="title" @input="inputChange2" />
	</div>
</template>

<script>
	export default {
		name: 'Home',
		props: ['modelValue', 'title'],
		emits: ['update:modelValue', 'update:title'],
		methods: {
			btnClick() {
				// 通过$emit发出update:modelValue事件，将数据传递给父组件
				this.$emit('update:modelValue', 'Hello Home!!!');

				// 发出update:title事件，将数据传递给父组件
				this.$emit('update:title', 'bbb');
			},
			inputChange1(e) {
				this.$emit('update:modelValue', e.target.value);
			},
			inputChange2(e) {
				this.$emit('update:title', e.target.value);
			}
		}
	};
</script>

<style scoped></style>
