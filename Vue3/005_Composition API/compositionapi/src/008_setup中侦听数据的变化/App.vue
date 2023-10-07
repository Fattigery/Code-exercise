<template>
	<div>
		<h4>{{ message }}</h4>
		<h4>{{ name }} - {{ age }}</h4>
		<h4>{{ info }}</h4>
		<button @click="message = 'Hello Vue3'">修改message</button>
		<button @click="name = '李雷'">修改name</button>
		<button @click="info.name = '王五'">修改info</button>
		<button @click="age++">修改age</button>
	</div>
</template>

<script>
	import { ref, reactive, watch, watchEffect } from 'vue';
	export default {
		setup() {
			// 定义数据
			let message = ref('Hello World');
			let name = ref('张三');
			let age = ref(20);
			let info = reactive({
				name: '李四',
				age: 30
			});

			// ------------------------------------watch------------------------------------

			// 侦听数据的变化（直接写入一个响应式对象）
			watch(message, (newValue, oldValue) => {
				console.log(newValue, oldValue);
			});

			// 侦听数据的变化（传入一个getter函数）
			watch(
				() => info.name,
				(newValue, oldValue) => {
					console.log(newValue, oldValue);
				}
			);

			// 侦听多个数据源（传入一个数组）
			watch(
				[name, age, () => info.name],
				(newValue, oldValue) => {
					console.log(newValue, oldValue);
				},
				{
					immediate: true
				}
			);

			// ------------------------------------watchEffect------------------------------------
			// watchEffect传入的函数会直接执行一次，在执行的过程中，会自动收集使用到的数据的依赖，当依赖发生变化时，会自动重新执行回调函数。
			let stopWatch = watchEffect(onInvalodate => {
				// 这里我们使用到了age，所以当age发生变化时，会重新执行回调函数
				console.log(age.value);

				let timer = setTimeout(() => {
					console.log('两秒后执行的操作');
				}, 2000);

				/**清除副作用:
				 * 我们在开发的时候，可能会在监视器函数中执行网络请求，但是在网络请求的结果还没有返回的时候，我们停止了侦听器，或者因为数据更新函数又重新执行，又发送了一次网络请求。
				 * 那么上一次的网络请求就应该被清除掉，这个时候我们可以清除上一次的网络请求（副作用）
				 *
				 * 我们给watcheffect传入的函数被调用时，可以获取到一个参数，参数名随意。
				 * 这个参数是一个函数，这个参数函数需要传入一个函数，在这个函数中，我们可以执行一些清除操作。
				 * 这个参数函数会在watcheffect侦听器停止侦听时执行。
				 * */
				onInvalodate(() => {
					clearTimeout(timer);
				});

				// watchEffect会返回一个函数，调用该函数可以停止侦听
				// 判断age的值，当age大于30时，停止侦听
				if (age.value >= 22) {
					stopWatch();
				}
			});

			return {
				message,
				name,
				age,
				info
			};
		}
	};
</script>

<style scoped></style>
