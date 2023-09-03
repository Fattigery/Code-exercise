<template>
	<h4>我是ShowInfo组件</h4>
	<p :class="$attrs.class">姓名：{{ name }}</p>
	<p :aaa="$attrs.abc">年龄：{{ age }}</p>
	<!-- 直接绑定整个$attrs -->
	<p v-bind="$attrs">身高：{{ height }}</p>
</template>

<script>
	export default {
		name: 'ShowInfo',
		// 禁止非prop的Attribute添加到根元素上
		inheritAttrs: false,
		// 通过props接收父组件传递过来的数据，没有接收abc和class属性
		props: ['name', 'age', 'height']
	};
</script>

<style scoped></style>
