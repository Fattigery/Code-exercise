<template>
	<div>
		<h4>{{ fullName }}</h4>
		<button @click="changeNames">修改FullName</button>

		<h4>分数：{{ score }} - {{ scoreLevel }}</h4>
		<button @click="changeScore">修改分数</button>
	</div>
</template>

<script>
	import { ref, reactive, computed } from 'vue';
	export default {
		setup() {
			// 姓名案例
			// 定义数据
			let names = reactive({
				firstName: 'zhang',
				lastName: 'san'
			});

			let fullName = computed(() => {
				return names.firstName + ' - ' + names.lastName;
			});

			function changeNames() {
				names.firstName = 'li';
				names.lastName = 'si';
			}

			// 分数线案例
			// 定义数据
			let score = ref(88);
			let scoreLevel = computed(() => {
				return score.value >= 60 ? '及格' : '不及格';
			});

			function changeScore() {
				score.value = 55;
			}

			return {
				fullName,
				changeNames,
				score,
				scoreLevel,
				changeScore
			};
		}
	};
</script>

<style scoped></style>
