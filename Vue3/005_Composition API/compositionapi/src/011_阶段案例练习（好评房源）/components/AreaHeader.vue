<template>
	<div class="area-header">
		<h3 class="title">{{ title }}</h3>
		<div class="subtitle">{{ subtitle }}</div>
	</div>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			default: '默认标题'
		},
		subtitle: {
			type: String,
			default: '默认副标题'
		}
	});
</script>

<style lang="less" scoped>
	.area-header {
		height: 84px;

		.title {
			font-size: 22px;
			color: #000;
		}

		.subtitle {
			font-size: 16px;
			margin-top: 12px;
			color: #333;
		}
	}
</style>
