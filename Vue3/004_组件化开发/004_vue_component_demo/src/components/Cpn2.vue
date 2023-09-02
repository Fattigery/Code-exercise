<template>
	<h4>{{ message }}</h4>
</template>

<script>
	// 导出组件对象
	export default {
		name: 'Cpn2',
		data() {
			return {
				message: '我是Cpn2组件（Cpn1 component的子组件）'
			};
		}
	};
</script>

<style scoped></style>
