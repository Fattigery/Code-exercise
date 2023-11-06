import { createStore } from 'vuex';
import homeModule from './modules/home.js';
import userModule from './modules/user.js';

const store = createStore({
	state: () => ({
		counter: 100,
		name: '张三',
		age: 18,
		friends: [
			{ id: 111, name: '张三', age: 18 },
			{ id: 222, name: '李四', age: 30 },
			{ id: 333, name: '王五', age: 25 }
		]
	}),
	getters: {
		doubleCounter(state) {
			return state.counter * 2;
		},
		totalAge(state) {
			return state.friends.reduce((preValue, item) => {
				console.log(preValue, item.age);
				return preValue + item.age;
			}, 0);
		},
		// getter的第二个参数就是getters对象本身，用于引用getter对象中的其他getter
		message(state, getters) {
			return `counter:${state.counter}，age:${state.age}，totalAge:${getters.totalAge}`;
		},
		// getters可以返回一个函数，外部可以通过调用这个函数实现给getter传递参数 - 根据id获取某一个friend
		getFriendById(state) {
			return function (id) {
				return state.friends.find(item => item.id === id);
			};
		}
	},
	mutations: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		changeAge(state, payload) {
			state.age = payload;
		},
		changeName(state, payload) {
			state.name = payload;
		}
	},
	actions: {
		incrementAction(context) {
			// 模拟异步操作
			setTimeout(() => {
				// 提交mutation
				context.commit('increment');
			}, 2000);
		},
		changeNameAction(context, payload) {
			// 模拟异步操作
			setTimeout(() => {
				// 提交mutation并携带参数
				context.commit('changeName', payload);
			}, 2000);
		},
		async fetchHomeMultidataAction(context) {
			// 使用promise
			// fetch('http://123.207.32.32:8000/home/multidata')
			// 	.then(res => {
			// 		return res.json();
			// 	})
			// 	.then(data => {
			// 		console.log(data);
			// 	});

			// 使用async/await
			let res = await fetch('http://123.207.32.32:8000/home/multidata');
			let data = await res.json();
			console.log(data);
			// async函数默认返回一个promise对象
			return data;
		}
	},
	modules: {
		home: homeModule,
		user: userModule
	}
});

export default store;
