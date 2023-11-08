import { defineStore } from 'pinia';
import { useHomeStore } from './home.js';

export const useUserStore = defineStore('user', {
	state: () => ({
		name: '张三',
		age: 18,
		count: 10,
		hobby: ['打篮球', '踢足球', '打台球'],
		banners: []
	}),
	getters: {
		// getter的基本使用
		doubleCount: state => {
			return state.count * 2;
		},
		// getter引用其他getter
		doubleCountPlusOne() {
			return this.doubleCount + 1;
		},
		// getter返回一个函数，用于接收参数
		queryHobby: state => {
			return function (index) {
				if (index > state.hobby.length - 1) {
					return '没有这个爱好';
				}
				return state.hobby[index];
			};
		},
		// 访问其他store中的getter
		homeGetter(state) {
			const homeStore = useHomeStore();
			return state.count + homeStore.doubleCounter;
		}
	},
	actions: {
		addCount() {
			this.count++;
		},
		addCountNum(num) {
			this.count += num;
		},
		async fetchBanners() {
			try {
				let res = await fetch('http://123.207.32.32:8000/home/multidata');
				let data = await res.json();
				console.log(data.data.banner.list);
				this.banners = data.data.banner.list;
			} catch (error) {
				console.error(error.message);
			}
		}
	}
});
