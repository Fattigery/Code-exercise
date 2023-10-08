// 获取页面滚动位置的Hook
import { reactive } from 'vue';

export default function () {
	// 使用reactive记录位置数据
	let scrollPosition = reactive({
		x: 0,
		y: 0
	});

	// 设置获取滚动位置
	function setScrollPosition() {
		scrollPosition.x = window.scrollX;
		scrollPosition.y = window.scrollY;
		console.log(scrollPosition.x, scrollPosition.y);
	}
	setScrollPosition();

	// 监听滚动，更新位置
	window.addEventListener('scroll', () => {
		setScrollPosition();
	});

	return scrollPosition;
}
