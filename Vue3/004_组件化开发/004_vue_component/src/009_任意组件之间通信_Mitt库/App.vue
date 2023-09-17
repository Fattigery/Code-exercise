<template>
	<div>
		<home></home>

		<button @click="btnClick">App点击</button>
	</div>
</template>

<script>
	import emitter from './utils/eventBus.js';
	import Home from './components/Home.vue';
	export default {
		name: 'App',
		components: {
			Home
		},
		data() {
			return {};
		},
		methods: {
			btnClick() {
				emitter.emit('code', { name: 'code', age: 18 });
			}
		}
	};
</script>

<style scoped></style>
