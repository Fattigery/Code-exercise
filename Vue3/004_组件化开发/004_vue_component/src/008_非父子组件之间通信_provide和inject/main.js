import { createApp } from 'vue';

// 导入组件对象
import App from './App.vue';

// 将App组件对象传入createApp函数中，作为根组件，并挂载到#app元素中
const app = createApp(App);

// 保证会自动解包computed方法返回的ref对象
app.config.unwrapInjectedRef = true;

app.mount('#app');
