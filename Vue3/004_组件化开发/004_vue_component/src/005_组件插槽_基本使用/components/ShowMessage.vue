<template>
	<div>
		<h2>{{ title }}</h2>

		<div class="content">
			<!-- 开始一个插槽（挖个坑，由父组件决定显示什么样的内容） -->
			<slot>
				<!-- 插槽默认内容 -->
				默认内容
			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '默认标题'
			}
		}
	};
</script>

<style scoped></style>
