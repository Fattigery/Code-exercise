import { createApp } from 'vue';
import App from './App.vue';

import pinia from './stores/index.js';

const app = createApp(App);

// 3.将pinia作为插件进行安装
app.use(pinia);

app.mount('#app');
