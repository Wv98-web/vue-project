import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ComponentA from './components/ComponentA.vue';

createApp(App)
    .use(router)
    .component('ComponentA', ComponentA)
    .mount('#app');
