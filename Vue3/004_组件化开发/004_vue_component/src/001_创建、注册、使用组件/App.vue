<template>
	<h2>{{ message }}</h2>

	<!-- 使用全局组件 -->
	<product1></product1>
	<product2></product2>

	<!-- 使用局部组件 -->
	<Cpn1></Cpn1>
</template>

<script>
	// 导入组件导出的组件对象
	import Cpn1 from './components/Cpn1.vue';
	export default {
		name: 'App',
		components: {
			Cpn1
		},
		data() {
			return {
				message: '我是App组件'
			};
		}
	};
</script>

<style></style>
