<template>
	<div>
		<button @click="sub(1)">-1</button>
		<button @click="sub(5)">-5</button>
		<button @click="sub(10)">-10</button>
	</div>
</template>

<script>
	export default {
		name: 'SubCounter',
		emits: ['subCounter'],
		methods: {
			sub(counter) {
				this.$emit('subCounter', counter);
			}
		}
	};
</script>

<style scoped></style>
