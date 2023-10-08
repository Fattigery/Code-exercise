<template>
	<div class="room-area">
		<!-- 1.区域height -->
		<area-header :title="areaData.title" :subtitle="areaData.subtitle"></area-header>

		<!-- 2.房间列表 -->
		<div class="room-list">
			<template v-for="item in areaData.list" :key="item.id">
				<room-item :itemData="item"></room-item>
			</template>
		</div>
	</div>
</template>

<script setup>
	import AreaHeader from './AreaHeader.vue';
	import RoomItem from './RoomItem.vue';

	defineProps({
		areaData: {
			type: Object,
			default: () => ({})
		}
	});
</script>

<style lang="less" scoped>
	.room-list {
		display: flex;
		flex-wrap: wrap;
		// 3.最后将最外层的整体往左移动8px（解决左侧多余的8px）
		margin: 20px -8px;
	}
</style>
