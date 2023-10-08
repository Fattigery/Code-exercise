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
			/**
			 * ref函数：
			 * 接收一个内部值（基本类型/复杂类型），返回一个响应式的、可更改的ref对象，此对象只有一个指向其内部值的属性.value。
			 * 如果给ref传入一个复杂类型的值，那么其内部将通过reactive()将其转为具有深层次响应式的对象。
			 */
			// reactive函数：用于对复杂类型（对象/数组）进行深层次的响应式转换，其所有的属性包含嵌套的属性都将具有响应式。
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

			// 为ref对象的value属性赋予新的值时，它也是响应式的（比如直接赋值一个新对象）
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
