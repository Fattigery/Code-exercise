<template>
	<div class="app">
		<div class="tabs">
			<template v-for="tab in tabs" :key="tab">
				<button @click="itemClick(tab)" :class="{ active: componentId == tab }">{{ tab }}</button>
			</template>
		</div>

		<keep-alive include="Home">
			<component :is="componentId"></component>
		</keep-alive>
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
			}
		}
	};
</script>

<style scoped>
	.active {
		color: red;
	}
</style>
