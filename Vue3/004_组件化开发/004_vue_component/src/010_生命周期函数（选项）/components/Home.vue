<template>
	<div>
		<h4>Home</h4>
	</div>
</template>

<script>
	export default {
		// 7.实例销毁之前
		beforeUnmount() {
			console.log('Home组件准备被销毁');
		},
		// 8.实例销毁完成
		unmounted() {
			console.log('Home组件被销毁');
		}
	};
</script>

<style scoped></style>
