<template>
	<div id="app">
		<!-- 在模板中访问从setup返回的ref时，它会自动浅层解包（无需.value）。当通过this访问时也会自动浅层解包 -->
		<h4>当前计数：{{ counter }}</h4>
		<button @click="increment">+1</button>
	</div>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'App',
		setup() {
			// 注意：在setup中访问this会是undefined，因为setup钩子会在所有选项式API钩子之前调用

			// 使用响应式API来声明响应式的状态
			let counter = ref(0);

			function increment() {
				counter.value++;
			}

			// 在setup()函数中返回的对象会暴漏给模板和组件实例。
			// 其他选项可以通过组件实例来获取setup()暴漏的属性
			return {
				counter,
				increment
			};
		},
		mounted() {
			console.log(this.counter);
		}
	};
</script>

<style></style>
