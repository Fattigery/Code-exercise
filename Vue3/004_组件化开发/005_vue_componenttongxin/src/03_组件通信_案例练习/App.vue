<template>
	<div>
		<TabControl :titles="titles" @tabItemClick="tabItemClick"></TabControl>

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
