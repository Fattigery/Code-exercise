// 计数器Hook
import { ref } from 'vue';

export default function (number) {
	const counter = ref(number);

	function increment() {
		counter.value++;
	}

	function decrement() {
		counter.value--;
	}

	return {
		counter,
		increment,
		decrement
	};
}
