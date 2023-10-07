// 获取页面滚动位置的Hook
import { ref } from 'vue';

export default function () {
	let scrollX = ref(0);
	let scrollY = ref(0);

	function setScrollPosition() {
		scrollX.value = window.scrollX;
		scrollY.value = window.scrollY;
	}
	setScrollPosition();

	window.addEventListener('scroll', () => {
		setScrollPosition();
	});

	return { scrollX, scrollY };
}
