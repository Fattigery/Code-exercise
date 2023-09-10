<template>
	<div>
		<!-- 没有传入插槽内容，插槽将使用其默认内容 -->
		<show-message></show-message>

		<!-- 插槽内容是按钮 -->
		<show-message title="按钮">
			<button>点击</button>
		</show-message>

		<!-- 插槽内容是一张图片 -->
		<show-message title="图片">
			<img :src="imgUrl" alt="" />
		</show-message>

		<!-- 插槽内容是一个列表 -->
		<show-message title="游戏">
			<ul>
				<li v-for="(item, index) in games" :key="index">{{ item }}</li>
			</ul>
		</show-message>
	</div>
</template>

<script>
	import ShowMessage from './components/ShowMessage.vue';
	export default {
		name: 'App',
		components: {
			// 注册组件
			ShowMessage
		},
		data() {
			return {
				imgUrl: 'https://cdn.novenn.com/random/avatars/1595853489525.jpg',
				games: ['红色警戒', '穿越火线', '王者荣耀']
			};
		}
	};
</script>

<style scoped>
	img {
		width: 200px;
	}
</style>
