import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

// 导入路由组件
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// 路由映射表
const routes = [
	{ path: '/', redirect: '/home' },
	{ path: '/home', component: Home },
	{ path: '/about', component: About }
];

// 创建路由实例并配置`routes`路由映射表和`history`路由模式
const router = createRouter({
	// 配置路由与组件之间的映射关系（将路由映射表写在外面）
	routes,
	// 路由模式
	// history: createWebHistory(), // 使用history路由模式
	history: createWebHashHistory() // 使用hash路由模式
});

// 导出路由实例作为vue插件进行使用
export default router;
