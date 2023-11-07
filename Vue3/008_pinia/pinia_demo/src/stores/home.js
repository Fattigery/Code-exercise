import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const Option = {
	state() {
		return {
			counter: 100
		};
	},
	getters: {
		doubleCounter(state) {
			return state.counter * 2;
		}
	},
	actions: {
		changeCounter() {
			this.counter += 1;
		}
	}
};

export const useHomeStore = defineStore('home', () => {
	// state
	const counter = ref(80);
	// getters
	const doubleCounter = computed(() => counter.value * 2);
	// actions
	function changeCounter() {
		counter.value += 1;
	}

	// 返回一个带有我们想暴露出去的属性和方法的对象
	return {
		counter,
		doubleCounter,
		changeCounter
	};
});
