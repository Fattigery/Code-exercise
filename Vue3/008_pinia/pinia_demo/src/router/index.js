import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/basic'
	},
	{
		path: '/basic',
		component: () => import('@/views/001_pinia的基本使用.vue')
	},
	{
		path: '/state',
		component: () => import('@/views/002_state的使用.vue')
	},
	{
		path: '/getter',
		component: () => import('@/views/003_getter的使用.vue')
	},
	{
		path: '/action',
		component: () => import('@/views/004_action的使用.vue')
	}
];

const router = createRouter({
	routes,
	history: createWebHashHistory(),
	linkActiveClass: 'link-active'
});

export default router;
