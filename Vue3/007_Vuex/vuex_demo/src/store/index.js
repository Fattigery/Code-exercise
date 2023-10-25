import { createStore } from 'vuex';

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
		}
	}
});

export default store;
