<template>
	<nav-bar>
		<!-- 给具名插槽插入内容 -->
		<template v-slot:left>
			<button>返回</button>
		</template>

		<!-- 没有插入的部分，会使用其默认的内容 -->
		<!-- <template v-slot:center>
			<span>标题</span>
		</template> -->

		<!-- v-slot:的缩写为# -->
		<template #right>
			<a href="#">登录</a>
		</template>
	</nav-bar>

	<!-- 动态插槽名 -->
	<nav-bar>
		<template v-slot:[position]>
			<a href="#">嘿嘿</a>
		</template>

		<!-- 点击按钮决定将嘿嘿插入到哪里 -->
		<button @click="position = 'left'">左边</button>
		<button @click="position = 'center'">中间</button>
		<button @click="position = 'right'">右边</button>
	</nav-bar>
</template>

<script>
	import NavBar from './components/NavBar.vue';
	export default {
		name: 'App',
		components: {
			NavBar
		},
		data() {
			return {
				position: 'center'
			};
		}
	};
</script>

<style scoped></style>
