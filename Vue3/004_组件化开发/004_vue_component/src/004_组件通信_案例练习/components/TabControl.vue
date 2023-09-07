<template>
	<div class="tab-control">
		<div
			class="tab-control-item"
			v-for="(item, index) in titles"
			:key="index"
			:class="{ active: currentIndex == index }"
			@click="itemClick(index)">
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		emits: ['tab-item-click'],
		props: {
			titles: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				currentIndex: 0
			};
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabItemClick', index);
			}
		}
	};
</script>

<style scoped>
	.tab-control {
		display: flex;
		text-align: center;
		line-height: 44px;
	}

	.tab-control-item {
		flex: 1;
	}

	.active span {
		display: inline-block;
		padding: 0 8px;
		color: red;
		border-bottom: 3px solid red;
	}
</style>
