<template>
	<div>
		<!-- 给子组件传递的是只读代理，防止子组件直接修改props -->
		<show-info
			:info1="readonlyInfo1"
			:info2="readonlyInfo2"
			:info3="readonlyInfo3"
			@changeShowInfoProps="changeShowInfoProps"></show-info>
	</div>
</template>

<script>
	import { ref, reactive, readonly } from 'vue';
	import ShowInfo from './components/ShowInfo.vue';
	export default {
		components: {
			ShowInfo
		},
		setup() {
			// 普通对象
			let info1 = {
				name: 'zs',
				age: 18
			};

			// reactive响应式对象
			let info2 = reactive({
				name: 'ls',
				age: 20
			});

			// ref响应式对象
			let info3 = ref('Hello');

			// readonly只读对象
			let readonlyInfo1 = readonly(info1);
			let readonlyInfo2 = readonly(info2);
			let readonlyInfo3 = readonly(info3);

			// 只能由父组件修改原数据，当原数据被修改，readonly对象也会被修改
			function changeShowInfoProps(name) {
				info1.name = name;
			}

			return {
				info1,
				info2,
				info3,
				readonlyInfo1,
				readonlyInfo2,
				readonlyInfo3,
				changeShowInfoProps
			};
		}
	};
</script>

<style scoped></style>
