<template>
	<div>
		<!-- 给HTML元素添加ref属性 -->
		<h4 ref="h4el">{{ msg }}</h4>
		<!-- 给子组件添加ref属性 -->
		<Home ref="HomeComponent"></Home>
	</div>
</template>

<script>
	import Home from './components/Home.vue';
	export default {
		components: {
			Home
		},
		data() {
			return {
				msg: 'Hello World'
			};
		},
		mounted() {
			// 通过this.$refs.引用名称 可以获取到对应的DOM元素，然后执行一些操作
			console.log(this.$refs.h4el);
			// 比如将文本颜色修改为红色
			this.$refs.h4el.style.color = 'red';

			// 通过this.$refs.引用名称 可以获取到对应的子组件实例对象，然后我们可以做非常多的事情，比如：
			// 可以调用子组件上的methods方法
			this.$refs.HomeComponent.changeMessage();
			// 还可以通过$el获取到子组件的根元素（如果有多个根元素，则获取到的就是第一个node节点）
			// 所以：在开发中，推荐一个组件只有一个根元素
			console.log(this.$refs.HomeComponent.$el);
			// 还可以拿到子组件中的data数据
			console.log(this.$refs.HomeComponent.message);
		}
	};
</script>

<style scoped></style>
