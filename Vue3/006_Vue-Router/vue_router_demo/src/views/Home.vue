<template>
	<div>
		<h4>Home</h4>

		<div class="home-nav">
			<router-link to="/home/recommend">推荐</router-link>
			<router-link to="/home/ranking">排行</router-link>
		</div>

		<router-view></router-view>
	</div>
</template>

<script setup></script>

<style lang="css" scoped>
	.home-nav a {
		margin-right: 10px;
	}
</style>
