<template>
	<h4>{{ message }}</h4>
</template>

<script>
	// 导出组件对象
	export default {
		name: 'Product',
		data() {
			return {
				message: '我是Product2全局组件'
			};
		}
	};
</script>

<style scoped></style>
