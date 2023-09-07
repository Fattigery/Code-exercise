import { createApp } from 'vue';

// 导入App.vue导出的组件对象
import App from './/App.vue';

// 导入组件导出的组件对象
import Product1 from './components/Product1.vue';
import Product2 from './components/Product2.vue';

// 将App组件对象传入createApp函数中，作为根组件，并挂载到#app元素中
const app = createApp(App);

// 注册全局组件
app.component('product1', Product1);
app.component('product2', Product2);

app.mount('#app');
