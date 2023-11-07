import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
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
});
