<template>
	<div>
		<h4>{{ msg }}</h4>

		<h4>当前计数：{{ counter }}</h4>
		<button @click="changeCounter">+1</button>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				msg: 'Home页面',
				counter: 0
			};
		},
		methods: {
			changeCounter() {
				this.counter++;
			}
		},
		created() {
			console.log('home created');
		},
		unmounted() {
			console.log('home unmounted');
		},
		activated() {
			console.log('home 我被激活了');
		},
		deactivated() {
			console.log('home 我被缓存了');
		}
	};
</script>

<style scoped></style>
