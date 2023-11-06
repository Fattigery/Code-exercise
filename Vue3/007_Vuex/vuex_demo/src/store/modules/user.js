export default {
	// 默认没有开启命名空间，会继承父模块的空间，getter、mutatin、action会注册在父模块命名空间中
	state: () => ({
		userName: '张三'
	}),
	getters: {
		userLastName(state) {
			return state.userName.split('')[0];
		}
	},
	mutations: {
		userMutation(state, payload = '李四') {
			state.userName = payload;
		}
	},
	actions: {
		userAction(context, payload) {
			context.commit('userMutation', payload);
		}
	}
};
