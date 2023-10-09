<template>
	<div>
		<h4>App组件</h4>
		<!-- 路由导航，<router-link>将呈现为一个<a>标签 -->
		<router-link to="/home">home</router-link>
		<router-link to="/about">about</router-link>
		<!-- 路由占位组件 -->
		<router-view></router-view>
	</div>
</template>

<script setup></script>

<style lang="less" scoped></style>
