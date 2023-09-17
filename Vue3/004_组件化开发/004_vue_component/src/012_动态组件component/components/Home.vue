<template>
	<div>
		<h4>{{ msg }} - {{ name }} - {{ age }}</h4>

		<button @click="btnClick">Home组件发出的事件</button>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		props: ['name', 'age'],
		data() {
			return {
				msg: 'Home页面'
			};
		},
		methods: {
			btnClick() {
				this.$emit('homeEvent', 'Home组件发出的~');
			}
		}
	};
</script>

<style scoped></style>
