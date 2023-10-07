<template>
	<div>
		<h4 ref="titleRef">我是App组件</h4>
		<Home ref="HomeComponent"></Home>
		<About ref="AboutComponent"></About>
	</div>
</template>

<script>
	import { ref, defineAsyncComponent, watchEffect, onMounted } from 'vue';
	import Home from './components/Home.vue';
	// 异步组件
	const About = defineAsyncComponent(() => import('./components/About.vue'));
	export default {
		components: {
			Home,
			About
		},
		setup() {
			// 在setup中获取模板ref引用元素，我们需要声明一个同名的ref
			const titleRef = ref(null);
			const HomeComponent = ref(null);
			const AboutComponent = ref(null);

			// 在组件挂载完成之后，获取模板ref引用元素
			onMounted(() => {
				console.log(titleRef.value);
				console.log(HomeComponent.value.$el);
			});

			// 如果是异步组件，我们还需要侦听异步组件是否挂载完成，因为异步组件是在组件挂载完成之后才会挂载的
			watchEffect(() => {
				if (AboutComponent.value) {
					console.log(AboutComponent.value.$el);
				}
			});

			return {
				titleRef,
				HomeComponent,
				AboutComponent
			};
		}
	};
</script>

<style scoped></style>
