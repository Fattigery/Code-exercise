<template>
	<div class="map-store">
		<h4>当前计数：{{ counter }}</h4>
		<h4>当前姓名：{{ name }}</h4>
		<h4>当前年龄：{{ age }}</h4>
		<h4>当前姓名：{{ uname }}</h4>
		<h4>当前年龄：{{ uage }}</h4>
		<button @click="increment">+1</button>
		<button @click="decrement">-1</button>
	</div>
</template>

<script>
	// map辅助函数只推荐结合选项式API使用（Vue2/Vue3）
	import { mapState, mapMutations } from 'vuex';
	export default {
		computed: {
			counter() {
				return this.$store.state.counter;
			},
			// 使用mapState辅助函数，将store中的state映射到当前组件的computed计算属性中
			// 参数为数组
			...mapState(['name', 'age']),
			// 参数为对象
			...mapState({
				uname: state => state.name,
				uage: state => state.age
			})
		},
		methods: {
			// 使用mapMutations辅助函数，将store中的mutations映射到当前组件的methods方法中
			...mapMutations(['increment', 'decrement'])
		}
	};
</script>

<style lang="less" scoped></style>
