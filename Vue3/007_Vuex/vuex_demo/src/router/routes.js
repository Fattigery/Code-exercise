const State = () => import('../components/001_State的基本使用.vue');
const MapState = () => import('../components/002_mapState辅助函数的使用.vue');
const Getters = () => import('../components/003_Getters的基本使用.vue');
const MapGetters = () => import('../components/004_mapGetters辅助函数的使用.vue');

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
	}
];

export default routes;
