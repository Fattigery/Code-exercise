<template>
	<div>
		<h4>{{ info1.name }} {{ info1.age }}</h4>
		<h4>{{ info2.name }} {{ info2.age }}</h4>
		<h4>{{ info3 }}</h4>

		<!-- 因为父组件传递过来的是只读代理，所以不能被修改，防止子组件对props进行修改 -->
		<button @click="info2.nmae = '王五'">changeProps1</button>

		<!-- 如果需要修改，只能由子组件通过emit发出事件，由父组件去修改原数据，当原数据被修改，readonly对象也会被修改 -->
		<button @click="changeProps">changeProps2</button>
	</div>
</template>

<script>
	export default {
		props: {
			info1: {
				type: Object,
				default: () => {}
			},
			info2: {
				type: Object,
				default: () => {}
			},
			info3: {
				type: String,
				default: '默认内容'
			}
		},
		setup(props, { emit }) {
			// 发出事件，由父组件去修改原数据
			function changeProps() {
				emit('changeShowInfoProps', '王五');
			}
			return {
				changeProps
			};
		}
	};
</script>

<style scoped></style>
