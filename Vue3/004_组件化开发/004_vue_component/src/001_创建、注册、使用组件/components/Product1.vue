<template>
	<h4>{{ message }}</h4>
</template>

<script>
	// 导出组件对象
	export default {
		name: 'Product1',
		data() {
			return {
				message: '我是Product1全局组件'
			};
		}
	};
</script>

<style scoped></style>
