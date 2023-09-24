<template>
	<div id="app">
		<h4>当前计数：{{ counter }}</h4>
		<button @click="increment">+1</button>
	</div>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name: 'App',
		setup() {
			let counter = ref(0);

			function increment() {
				counter.value++;
			}

			return {
				counter,
				increment
			};
		}
	};
</script>

<style></style>
