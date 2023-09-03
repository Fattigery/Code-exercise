<template>
	<h3>我是App组件</h3>

	<!--
    如果定义在子组件上的属性，没有被子组件的props接收，那么这些属性就被添加到子组件的根元素上
    注意：如果子元素没有根元素，则会报警告
   -->
	<show-info name="coder" :age="age" :height="height" abc="cba" class="active"></show-info>

	<ShowInfo name="张三" age="20" :height="height"></ShowInfo>
</template>

<script>
	import ShowInfo from './components/ShowInfo.vue';
	export default {
		name: 'App',
		components: {
			ShowInfo
		},
		data() {
			return {
				age: 18,
				height: 1.88
			};
		}
	};
</script>

<style></style>
