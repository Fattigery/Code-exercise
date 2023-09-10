<template>
	<div class="nav-bar">
		<div class="left">
			<slot name="left">left</slot>
		</div>

		<div class="center">
			<slot name="center">center</slot>
		</div>

		<div class="right">
			<slot name="right">right</slot>
		</div>
	</div>

	<!-- default默认插槽 -->
	<slot></slot>
</template>

<script>
	export default {
		name: 'NavBar',
		data() {
			return {};
		}
	};
</script>

<style scoped>
	.nav-bar {
		display: flex;
		height: 44px;
		text-align: center;
		line-height: 44px;
	}

	.nav-bar:not(:first-child) {
		margin-top: 10px;
	}

	.left {
		width: 80px;
		background-color: orange;
	}

	.center {
		flex: 1;
		background-color: skyblue;
	}

	.right {
		width: 80px;
		background-color: tan;
	}
</style>
