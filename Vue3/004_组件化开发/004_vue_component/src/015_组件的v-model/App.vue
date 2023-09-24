<template>
	<div>
		<!-- 在input上使用v-model -->
		<input type="text" v-model="message" />
		<!-- 等同于⬇ -->
		<input type="text" :value="message" @input="message = $event.target.value" />

		<!-- --------------------------------------------------------------------------------- -->

		<h4>{{ message }} - {{ title }}</h4>

		<!-- 在组件上使用v-model -->
		<Home v-model="message" v-model:title="title"></Home>
		<!-- 等同于⬇️ -->
		<!-- 通过modelValue属性将message传递给子组件，并监听子组件发出的update:modelValue事件 -->
		<Home
			:modelValue="message"
			:title="title"
			@update:modelValue="message = $event"
			@update:title="title = $event"></Home>
	</div>
</template>

<script>
	import Home from './components/Home.vue';
	export default {
		name: 'App',
		components: {
			Home
		},
		data() {
			return {
				message: 'Hello Vue',
				title: 'aaa'
			};
		}
	};
</script>

<style scoped></style>
