<template>
	<h4>{{ message }}</h4>
	<Cpn2></Cpn2>
</template>

<script>
	// 导入组件导出的组件对象
	import Cpn2 from './Cpn2.vue';
	export default {
		name: 'Cpn1',
		components: {
			Cpn2
		},
		data() {
			return {
				message: '我是Cpn1组件（App component的子组件）'
			};
		}
	};
</script>

<style scoped></style>
