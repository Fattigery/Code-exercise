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
				position: relative;
				padding: 10px 0;
				margin: 0 10px;
			}

			a::before {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 2px;
				background-color: #3271ae;
				transform-origin: bottom right;
				transform: scaleX(0);
				transition: transform 0.3s ease-in;
			}

			a:not(a.link-active):hover::before {
				transform-origin: bottom left;
				transform: scaleX(1);
			}

			a.link-active::after {
				content: '';
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				height: 2px;
				background-color: #c12c1f;
				animation: line 1s;
			}
		}

		// 线条动画
		@keyframes line {
			0% {
				transform: translateX(-10%);
				opacity: 0;
			}
			100% {
				transform: translateX(0);
				opacity: 1;
			}
		}

		.router-link-active {
			/*background-color: #4c8045;*/
			animation: line 1s ease infinite;
		}

		/deep/button {
			margin-right: 10px;
		}
	}
</style>
