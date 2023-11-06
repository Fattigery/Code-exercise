export default {
	// module store开启自己的命名空间（getters、mutations、actions注册在自己的命名空间内）
	namespaced: true,
	state: () => ({
		homeCounter: 80
	}),
	getters: {
		doubleHomeCounter(state) {
			return state.homeCounter * 2;
		}
	},
	mutations: {
		homeIncrementMutation(state) {
			state.homeCounter++;
		}
	},
	actions: {
		homeIncrementAction(context) {
			context.commit('homeIncrementMutation');
		}
	}
};
