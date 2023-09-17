<template>
	<div>
		<button @click="clearEvent">HomeContent按钮：取消事件监听</button>
	</div>
</template>

<script>
	import emitter from '../utils/eventBus';
	export default {
		created() {
			emitter.on('code', this.foo);
		},
		methods: {
			foo(data) {
				console.log('HomeContent中的foo方法', data);
			},
			// 取消监听
			clearEvent() {
				emitter.off('code', this.foo);
			}
		}
	};
</script>

<style scoped></style>
