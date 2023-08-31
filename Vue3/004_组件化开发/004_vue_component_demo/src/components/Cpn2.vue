<template>
	<h4>{{ message }}</h4>
</template>

<script>
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
