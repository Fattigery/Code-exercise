import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import pinia from './stores/index.js';

const app = createApp(App);

app.use(router);

// 3.将pinia作为插件进行安装
app.use(pinia);

app.mount('#app');
