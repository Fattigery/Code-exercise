<template>
	<div>
		<h4>doubleCounter：{{ doubleCounter }}</h4>
		<h4>totalAge：{{ totalAge }}</h4>
		<h4>message：{{ umessage }}</h4>

		<button @click="changeAge">changeAge</button>
	</div>
</template>

<script>
	// map辅助函数只推荐结合选项式API使用（Vue2/Vue3）
	import { mapGetters } from 'vuex';
	export default {
		computed: {
			doubleCounter() {
				return this.$store.getters.doubleCounter;
			},
			// 使用mapGetters辅助函数，将store中的getters映射到当前组件的computed计算属性中
			// 参数为数组
			...mapGetters(['totalAge']),
			// 参数为对象，与state不同的是，对象中属性对应一个key，而不是一个函数了。
			...mapGetters({
				umessage: 'message'
			})
		},
		methods: {
			changeAge() {
				this.$store.commit('changeAge', 666);
			}
		}
	};
</script>

<style lang="less" scoped></style>
