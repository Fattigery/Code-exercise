<template>
	<div>
		<h4>HomeBanner：{{ name }} - {{ age }}</h4>
	</div>
</template>

<script>
	export default {
		name: 'banner',
		inject: ['name', 'age']
	};
</script>

<style scoped></style>
