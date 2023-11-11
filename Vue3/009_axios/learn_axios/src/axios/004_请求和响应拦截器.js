// 引入axios，对axios进行二次封装
import axios from 'axios';

// 创建一个新的axios实例request1
const request1 = axios.create({
	// 设置默认配置
	// 请求根路径
	baseURL: 'http://123.207.32.32:8000',
	// 请求超时时间
	timeout: 5000
});

// 请求拦截器
// 调用axios实例发送请求时，请求拦截器可以监测到，会先调用请求拦截器的回调函数，可以在发请求之前做一些事情。
request1.interceptors.request.use(
	config => {
		// config：本次请求的配置信息对象
		/*
    在这里可以在发送请求之前做些什么事情
      1.开启loading动画
      2.对本次请求的配置信息进行一些修改
    */
		console.log('请求成功的拦截');
		return config;
	},
	error => {
		// 对请求失败做些什么事情
		console.log('请求失败的拦截');
		return Promise.reject(error);
	}
);

// 响应拦截器
// 对axios实例发送请求返回的响应进行拦截
request1.interceptors.response.use(
	res => {
		// 响应成功的回调函数：2xx范围内的状态码会触发该函数。
		/*
    在这里可以对响应数据做一些事情。
      1.关闭loading动画
      2.对响应的数据进行一些处理，再返回，比如在这里帮助我们.data
    */
		console.log('响应成功的拦截');
		return res.data;
	},
	error => {
		// 响应失败的回调函数：超出2xx范围的状态码会触发该函数。
		// 在这里对响应错误做一些事情。
		console.log('响应失败的拦截');
		return Promise.reject(new Error('faile'));
	}
);

request1.get('/home/multidata').then(res => {
	// 响应拦截器帮助我们.data了，所以这里就不需要我们再.data了
	console.log(res);
});

// 对外暴露，供外部使用
// export default request1;
