import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

// 导入路由组件
// import Home from '../views/Home.vue';
// import About from '../views/About.vue';

// 路由懒加载方式导入组件并且命名（webpack）
const Home = () => import(/* webpackChunkName:"home" */ '../views/Home.vue');
const About = () => import(/* webpackChunkName:"about" */ '../views/About.vue');

// 路由映射表
const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		name: 'home',
		path: '/home',
		component: Home,
		meta: {
			title: 'home页面'
		},
		children: [
			{
				path: '/home',
				redirect: '/home/recommend'
			},
			{
				path: 'recommend',
				component: () => import('../views/HomeRecommend.vue')
			},
			{
				path: 'ranking',
				component: () => import('../views/HomeRanking.vue')
			}
		]
	},
	{
		name: 'about',
		path: '/about',
		component: About,
		meta: {
			title: 'about页面'
		}
	},
	{
		path: '/user/:id',
		component: () => import('../views/User.vue')
	},
	{
		path: '/order',
		component: () => import('../views/Order.vue')
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/:pathMatch(.*)',
		component: () => import('../views//NotFound.vue')
	}
];

// 创建路由实例并配置`routes`路由映射表和`history`路由模式
const router = createRouter({
	// 配置路由与组件之间的映射关系（将路由映射表写在外面）
	routes,
	// 路由模式
	// history: createWebHistory(), // 使用history路由模式
	history: createWebHashHistory(), // 使用hash路由模式
	// 自定义路由激活时的类名
	linkActiveClass: 'active'
});

// ---------------------------------------------------------------------------

// 动态添加路由
let admin = true;
if (admin) {
	// 向routes数组中添加一级路由对象
	router.addRoute({
		path: '/admin',
		component: () => import('../views/Admin.vue')
	});

	// 向home一级路由对象中添加二级路由对象
	// router.addRoute("路由的name","要添加的路由对象")
	router.addRoute('home', {
		path: 'homevip',
		component: () => import('../views/HomeVip.vue')
	});
}

// 获取router中所有的路由映射对象组成的数组
console.log(router.getRoutes());

// ---------------------------------------------------------------------------

// 路由导航守卫
// 全局前置守卫：beforeEach
// 在进行任何路由跳转之前，都会回调传入beforeEach方法中的回调函数

// 需求：用户进入到订单页面（Order）时，判断用户是否登录（token）
// 如果用户没有登录，则跳转到登录页面（Login），否则，正常跳转到订单页面（Order）。
router.beforeEach((to, from) => {
	// 获取token
	const token = window.localStorage.getItem('token');
	// 如果用户要进入订单页面，并且token不存在，则跳转到登录页面
	if (to.path === '/order' && !token) {
		// return '/login';
		// 记录用户要访问的页面
		return {
			path: '/login',
			query: {
				redirect: to.path
			}
		};
	}
});

// ---------------------------------------------------------------------------

// 导出路由实例作为vue插件进行使用
export default router;
