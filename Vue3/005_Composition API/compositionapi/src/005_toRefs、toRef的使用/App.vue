<template>
	<div>
		<h4>{{ name }} {{ age }}</h4>
		<button @click="age++">修改age</button>

		<h4>{{ uname }}</h4>
		<button @click="uname = '李四'">修改uname</button>
	</div>
</template>

<script>
	import { reactive, toRefs, toRef, shallowRef, triggerRef } from 'vue';
	export default {
		setup() {
			let state = reactive({
				name: 'coderwhy',
				age: 18
			});

			// 如果直接对响应式对象进行解构，那么解构出来的变量不是响应式的
			// let { name, age } = state;
			// 如果想要解构出来的变量依然是响应式的，那么需要使用toRefs
			let { name, age } = toRefs(state);

			// 如果只需要将响应式对象中的某一个属性解构出来并保持响应式，那么可以使用toRef
			let uname = toRef(state, 'name');

			return {
				// name,
				// age
				...toRefs(state),
				uname
			};
		}
	};
</script>

<style scoped></style>
