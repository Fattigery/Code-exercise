// 二次封装axios（简洁版）
import axios from 'axios';

class HYRequest {
	constructor(baseURL, timeout = 10000) {
		// 创建一个新的axios实例
		this.instance = axios.create({
			baseURL,
			timeout
		});
	}

	// 添加原型方法
	request(config) {
		return new Promise((resolve, reject) => {
			this.instance(config)
				.then(res => resolve(res.data))
				.catch(err => reject(err));
		});
	}

	get(url, config) {
		return this.request({ method: 'get', url, ...config });
	}

	post(url, config) {
		return this.request({ method: 'post', url, ...config });
	}
}

// export default new HYRequest('http://123.207.32.32:8000');

const hyRequest = new HYRequest('http://123.207.32.32:8000');
const hyRequest1 = new HYRequest('http://123.207.32.32:1888');

// 使用
hyRequest.get('/home/multidata').then(res => {
	console.log(res);
});

hyRequest1
	.post('/02_param/postjson', {
		data: {
			name: 'coderwhy',
			password: 123456
		}
	})
	.then(res => {
		console.log(res);
	});
