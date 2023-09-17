<template>
	<div>
		<h4>Home:{{ message }}</h4>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'Hello Home'
			};
		},
		methods: {
			changeMessage() {
				this.message = 'Hello World';
			}
		}
	};
</script>

<style scoped></style>
