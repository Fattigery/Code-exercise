<template>
	<h4>我是App组件</h4>
	<h4>当前计数：{{ counter }}</h4>

	<!-- 通过v-on监听子组件发出的自定义事件，当事件触发时，就会执行对应的方法 -->
	<AddCounter @addCounter="increment"></AddCounter>
	<SubCounter @subCounter="decrement"></SubCounter>
</template>

<script>
	import AddCounter from './components/AddCounter.vue';
	import SubCounter from './components/SubCounter.vue';
	export default {
		name: 'App',
		data() {
			return {
				counter: 0
			};
		},
		components: {
			AddCounter,
			SubCounter
		},
		methods: {
			// 子组件传递的数据，会传递到对应函数的形参中
			increment(val) {
				console.log(val);
				this.counter += val;
			},
			decrement(val) {
				console.log(val);
				this.counter -= val;
			}
		}
	};
</script>

<style scoped></style>
