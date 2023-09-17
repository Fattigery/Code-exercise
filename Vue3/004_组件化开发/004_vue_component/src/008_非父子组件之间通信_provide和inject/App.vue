<template>
	<div>
		<Home></Home>
		{{ age }}
		<button @click="add">+1</button>
	</div>
</template>

<script>
	import Home from './components/Home.vue';
	import { computed } from 'vue';
	export default {
		name: 'App',
		components: {
			Home
		},
		provide() {
			return {
				name: '张三',
				age: computed(() => this.age)
			};
		},
		data() {
			return {
				age: 18
			};
		},
		methods: {
			add() {
				this.age++;
			}
		}
	};
</script>

<style scoped></style>
