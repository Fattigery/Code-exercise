import { createApp } from 'vue';
import App from './App.vue';

// 1.导入createPinia方法
import { createPinia } from 'pinia';

// 2.执行方法得到pinia实例（根store）
const pinia = createPinia();

const app = createApp(App);

// 3.将pinia作为插件进行安装
app.use(pinia);

app.mount('#app');
