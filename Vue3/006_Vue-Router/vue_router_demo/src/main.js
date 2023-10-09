import { createApp } from 'vue';
import App from './App.vue';

// 导入路由实例
import router from './router/index.js';

const app = createApp(App);
// 使用use方法将路由实例注册为vue插件，这样整个vue应用就都可以使用路由了
app.use(router);
app.mount('#app');
