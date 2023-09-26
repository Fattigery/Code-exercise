<template>
	<div>
		<home name="coder" :age="22"></home>
	</div>
</template>

<script>
	import { defineAsyncComponent, ref } from 'vue';
	const Home = defineAsyncComponent(() => import('./components/Home.vue'));
	export default {
		components: {
			Home
		},
		setup() {}
	};
</script>

<style scoped></style>
