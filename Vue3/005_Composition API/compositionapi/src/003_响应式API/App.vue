<template>
	<div>
		<h4>{{ message }}</h4>
		<h4>当前计数：{{ counter }}</h4>
		<button @click="increment">+1</button>

		<hr />

		<h4>{{ info1.name }} {{ info1.age }}</h4>
		<h4>{{ info2.name }} {{ info2.age }}</h4>
		<button @click="changeInfo">changeInfo</button>
	</div>
</template>

<script>
	import { ref, reactive } from 'vue';
	export default {
		setup() {
			// 定义普通数据（不是响应式的 ）
			let message = 'Hello world';

			// 定义响应式数据
			// ref函数：主要用于定义普通数据为响应式数据（也可以定义复杂类型的数据）
			// reactive函数：主要用于定义复杂类型的数据为响应式数据
			// 所以，在定义响应式数据的时候，可以都使用ref函数，并且ref对象是可更改的，当我们为ref对象的value属性赋予新的值时，它也是响应式的。
			let counter = ref(0);
			function increment() {
				counter.value++;
			}

			let info1 = ref({
				name: '张三1',
				age: 18
			});

			let info2 = reactive({
				name: '张三2',
				age: 20
			});

			// 为ref对象的value属性赋予新的值时，它也是响应式的
			function changeInfo() {
				info1.value = {
					name: '李四1',
					age: 19
				};

				info2 = {
					name: '李四2',
					age: 21
				};
			}

			return {
				message,
				counter,
				increment,
				info1,
				info2,
				changeInfo
			};
		}
	};
</script>

<style scoped></style>
