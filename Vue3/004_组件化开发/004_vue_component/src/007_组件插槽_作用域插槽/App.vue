<template>
	<div>
		<!-- 接收子组件中默认的default插槽传递出来的数据，接收的是一个对象，我们可以使用解构语法将数据解构出来 -->
		<TabControl :titles="titles" @tabItemClick="tabItemClick">
			<!-- #default的简写 -->
			<!-- <template v-slot="{item}"> -->
			<template #default="{ item }">
				<a href="#">{{ item }}</a>
			</template>
		</TabControl>

		<!--
			当子组件只有一个默认插槽时，可以省略<template>，直接将#default写在组件标签上
			但是，如果不止有默认插槽，还是其他具名插槽，则必须全部使用<template>，
		-->
		<TabControl :titles="titles" @tabItemClick="tabItemClick" #default="{ item }">
			<button>{{ item }}</button>
		</TabControl>

		<!-- 展示内容 -->
		<h2>{{ pageContents[currentIndex] }}</h2>
	</div>
</template>

<script>
	import TabControl from './components/TabControl.vue';

	export default {
		name: 'App',
		components: {
			TabControl
		},
		data() {
			return {
				titles: ['衣服', '鞋子', '裤子'],
				pageContents: ['衣服页面', '鞋子页面', '裤子页面'],
				currentIndex: 0
			};
		},
		methods: {
			tabItemClick(index) {
				console.log(index);
				this.currentIndex = index;
			}
		}
	};
</script>

<style scoped></style>
