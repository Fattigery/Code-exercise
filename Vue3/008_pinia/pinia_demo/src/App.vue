<template>
	<div class="app">
		<nav>
			<router-link to="/basic">pinia的基本使用</router-link>
			<router-link to="/state">State</router-link>
			<router-link to="/getter">Getter</router-link>
			<router-link to="/action">Action</router-link>
		</nav>

		<router-view></router-view>
	</div>
</template>

<script setup></script>

<style lang="less" scoped>
	.app {
		nav {
			a {
				text-decoration: none;
				color: #000;
				margin-right: 10px;

				&:hover {
					color: red;
				}

				&.link-active {
					color: red;
				}
			}
		}

		/deep/button {
			height: 20px;
			line-height: 20px;
			padding: 0 5px;
			margin-right: 10px;
		}
	}
</style>
