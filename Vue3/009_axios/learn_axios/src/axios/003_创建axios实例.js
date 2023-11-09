import axios from 'axios';

// 设置默认axios实例的默认配置
axios.defaults.baseURL = 'http://123.207.32.32:9001';
axios.defaults.timeout = 5000;

// 使用axios.create(config)方法可以创建一个axios实例（导入的axios相当于是一个默认的axios实例）
const request1 = axios.create({
	baseURL: 'http://123.207.32.32:8000',
	timeout: 5000
});

const request2 = axios.create({
	baseURL: 'http://123.207.32.32:1888',
	timeout: 10000
});
