<template>
	<div>
		<home name="coder" :age="22" ref="homeEl"></home>
	</div>
</template>

<script>
	import { defineAsyncComponent, ref, watchEffect } from 'vue';
	const Home = defineAsyncComponent(() => import('./components/Home.vue'));
	export default {
		components: {
			Home
		},
		setup() {
			// 为了通过组合式API获得该模板引用，我们需要声明一个同名的ref
			let homeEl = ref(null);

			// 因为只有在组件挂载后才能访问模板引用，但是初次渲染时会是null，所以这里我们需要侦听一个模板引用ref的变化
			watchEffect(() => {
				// 当值不为null时
				if (homeEl.value) {
					console.log(homeEl.value.$el);
					console.log(homeEl.value.num1, homeEl.value.num2);
				}
			});

			// 如果不使用<script setup>，需确保从setup()中返回ref
			return {
				homeEl
			};
		}
	};
</script>

<style scoped></style>
