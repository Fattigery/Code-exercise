<template>
	<div>
		<h4>{{ msg }}</h4>
		<button @click="msg = 'hello world'">changeMsg</button>

		<div>
			<button @click="isShow = !isShow">显示Home</button>
			<Home v-if="isShow"></Home>
		</div>
	</div>
</template>

<script>
	import Home from './components/Home.vue';
	export default {
		name: 'App',
		data() {
			return {
				msg: 'hello vue3',
				isShow: true
			};
		},
		components: {
			Home
		},
		// 1.组件被创建之前
		beforeCreate() {
			console.log('beforeCreate');
		},
		// 2.组件被创建完成之后
		created() {
			console.log('created');
			console.log('1.发送网络请求，将数据保存到data中', this.msg);
			console.log('2.监听eventBus事件');
			console.log('3.监听watch数据');
		},
		// 3.组件template准备被挂载
		beforeMount() {
			console.log('beforeMount');
		},
		// 4.组件template已经被挂载
		mounted() {
			console.log('mounted');
			console.log('获取和使用DOM');
		},
		// 5.数据发生改变，准备更新DOM
		beforeUpdate() {
			console.log('beforeUpdate');
		},
		// 6.数据发生改变，更新完成DOM
		updated() {
			console.log('updated');
		},
		// 7.实例销毁之前
		beforeUnmount() {
			console.log('beforeUnmount');
		},
		// 8.实例销毁完成
		unmounted() {
			console.log('unmounted');
		}
	};
</script>

<style scoped></style>
