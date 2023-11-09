import axios from 'axios';

// 导入的axios相当于是一个默认的实例对象
// 实例对象中有一个defaults属性，这个属性用于修改实例对象的默认配置
// 例如：修改默认的axios实例对象的baseURL
axios.defaults.baseURL = 'http://123.207.32.32:8000';
// 配置默认超时时间
axios.defaults.timeout = 10000;

// 这样，我们在调用axios实例对象的方法时，url直接写路径就可以了
// baseURL会自动拼接在url前面，所以请求的url就是http://123.207.32.32:8000/home/multidata
axios.get('/home/multidata').then(res => {
	console.log('baseURL', res.data);
});

// 发送多个请求
// axios.all([])
// axios.spread(callback)
axios
	.all([
		axios.get('/home/multidata'),
		axios.post('http://123.207.32.32:1888/02_param/postjson', {
			data: {
				name: 'coderwhy',
				password: 123456
			}
		})
	])
	.then(
		axios.spread((res1, res2) => {
			console.log(res1.data);
			console.log(res2.data);
		})
	);
