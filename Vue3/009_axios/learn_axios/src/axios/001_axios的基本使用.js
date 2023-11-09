import axios from 'axios';

// 1.发送request请求
axios
	.request({
		url: 'http://123.207.32.32:8000/home/multidata'
	})
	.then(res => {
		console.log(res.data);
	});

// 2.发送get请求
axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
	console.log(res.data);
});

// 3.发送post请求
axios
	.post('http://123.207.32.32:1888/02_param/postjson', {
		// request body（请求体）
		data: {
			name: 'coderwhy',
			password: 123456
		}
	})
	.then(res => {
		console.log(res.data);
	});
