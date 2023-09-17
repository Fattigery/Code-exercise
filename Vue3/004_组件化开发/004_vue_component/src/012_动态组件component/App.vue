<template>
	<div class="app">
		<!-- 全局组件：component组件，通过is属性决定渲染哪个组件 -->
		<!-- <component is="home"></component> -->
		<div class="tabs">
			<template v-for="tab in tabs" :key="tab">
				<button @click="itemClick(tab)" :class="{ active: componentId == tab }">{{ tab }}</button>
			</template>
		</div>
		<!-- 可以向动态组件传值，还可以监听动态组件发出的事件 -->
		<component :is="componentId" name="coder" age="18" @homeEvent="homeEvent"></component>
	</div>
</template>

<script>
	import Home from './components/Home.vue';
	import About from './components/About.vue';
	import Category from './components/Category.vue';
	export default {
		name: 'App',
		components: {
			Home,
			About,
			Category
		},
		data() {
			return {
				componentId: 'home',
				tabs: ['home', 'about', 'category']
			};
		},
		methods: {
			itemClick(tab) {
				this.componentId = tab;
			},
			homeEvent(msg) {
				console.log(msg);
			}
		}
	};
</script>

<style scoped>
	.active {
		color: red;
	}
</style>
