<template>
	<div>
		<button @click="add(1)">+1</button>
		<button @click="add(5)">+5</button>
		<button @click="add(10)">+10</button>
	</div>
</template>

<script>
	export default {
		name: 'AddCounter',
		// 声明要发出的自定义事件
		emits: ['addCounter'],
		methods: {
			add(counter) {
				// 子组件发出去一个自定义事件
				// 第一个参数是自定义事件的名称，父组件中可以通过事件名称监听子组件发出的事件
				// 第二个及以后的参数是传递的参数，会传递给父组件事件监听的回调函数
				this.$emit('addCounter', counter);
			}
		}
	};
</script>

<style scoped></style>
