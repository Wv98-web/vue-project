import { createRouter, createWebHashHistory } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import GsapSection from './components/GsapSection.vue';
import Home from './pages/HomePage.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/helloworld', component: HelloWorld },
    { path: '/gsapsection', component: GsapSection },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
