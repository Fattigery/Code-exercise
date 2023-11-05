<template>
	<div class="app">
		<nav>
			<router-link to="/state">State</router-link>
			<router-link to="/map-state">MapState</router-link>
			<router-link to="/getters">Getters</router-link>
			<router-link to="/map-getters">MapGetters</router-link>
			<router-link to="/mutations">Mutations</router-link>
			<router-link to="/actions">Actions</router-link>
			<router-link to="/modules">Modules</router-link>
		</nav>

		<router-view></router-view>
	</div>
</template>

<script setup></script>

<style lang="less" scoped>
	.app {
		nav {
			display: flex;
			a {
				margin-right: 10px;
				padding: 5px 10px;
				border: 1px solid #000;
				border-radius: 999px;
			}

			a.link-active {
				background-color: tomato;
				border: 1px solid transparent;
				color: white;
			}
		}

		/deep/button {
			margin-right: 10px;
		}
	}
</style>
