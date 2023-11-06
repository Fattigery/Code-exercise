<template>
	<div class="module">
		<!-- user模块，没有开启命名空间 -->
		<h4>userName：{{ $store.state.user.userName }}</h4>
		<h4>userLastName：{{ $store.getters.userLastName }}</h4>
		<button @click="userMutation">userMutation</button>
		<button @click="userAction">userAction</button>

		<hr />

		<!-- home模块，开启了命名空间 -->
		<h4>homeCounter：{{ $store.state.home.homeCounter }}</h4>
		<h4>doubleHomeCounter：{{ $store.getters['home/doubleHomeCounter'] }}</h4>
		<button @click="homeMutation">homeMutation</button>
		<button @click="homeAction">homeAction</button>
	</div>
</template>

<script setup>
	import { useStore } from 'vuex';

	const store = useStore();

	function userMutation() {
		store.commit('userMutation');
	}
	function userAction() {
		store.dispatch('userAction', '王二麻子');
	}

	function homeMutation() {
		store.commit('home/homeIncrementMutation');
	}
	function homeAction() {
		store.dispatch('home/homeIncrementAction');
	}
</script>

<style lang="less" scoped></style>
