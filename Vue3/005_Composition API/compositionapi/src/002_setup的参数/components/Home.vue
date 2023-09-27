<template>
	<div id="home">
		<h4>Home：{{ name }} - {{ age }}</h4>
	</div>
</template>

<script>
	import { ref } from 'vue';
	export default {
		props: {
			name: {
				typeo: String,
				default: ''
			},
			age: {
				type: Number,
				default: 0
			}
		},
		setup(props, { attrs, slots, emit, expose }) {
			// props对象是响应式的，不能使用解构，否则会丢失响应式。
			// context上下文对象不是响应式的，所以可以使用解构。
			// attrs，等价于$attrs，可以拿到所有的透传attribute。
			// slots，等价于$slots，可以拿到父组件传递过来的插槽（在以返回值为渲染函数返回时会有用）。
			// emit，等价于$emit，用于在组件内部发出事件时使用，因为在setup中不能访问this，所以不能通过this.$emit来发出事件。
			// expose，用于显示地控制组件暴露的属性，当父组件使用ref访问该组件的引用实例时，将只能访问expose函数暴器出的内容。

			console.log(props.name, props.age);

			// 让组件实例处于“关闭”状态，即不向父组件暴漏任何东西。
			// expose();

			let num1 = ref(10);
			let num2 = ref(20);

			// 有选择的暴漏一些内容
			expose({ num1 });
		}
	};
</script>

<style scoped></style>
