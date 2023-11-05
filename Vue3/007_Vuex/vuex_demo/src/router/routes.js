const State = () => import('../components/001_State的基本使用.vue');
const MapState = () => import('../components/002_mapState辅助函数的使用.vue');
const Getters = () => import('../components/003_Getters的基本使用.vue');
const MapGetters = () => import('../components/004_mapGetters辅助函数的使用.vue');
const Mutations = () => import('../components/005_Mutations的基本使用.vue');
const Actions = () => import('../components/006_Actions的基本使用.vue');
const Modules = () => import('../components/007_Modules的基本使用.vue');

const routes = [
	{
		path: '/',
		redirect: '/state'
	},
	{
		path: '/state',
		component: State
	},
	{
		path: '/map-state',
		component: MapState
	},
	{
		path: '/getters',
		component: Getters
	},
	{
		path: '/map-getters',
		component: MapGetters
	},
	{
		path: '/mutations',
		component: Mutations
	},
	{
		path: '/actions',
		component: Actions
	},
	{
		path: '/modules',
		component: Modules
	}
];

export default routes;
