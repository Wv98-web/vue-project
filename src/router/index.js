import { createRouter, createWebHashHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import GsapSection from '../components/GsapSection.vue';
import Home from '../views/HomeView.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/helloworld', component: HelloWorld },
    { path: '/gsap', component: GsapSection },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
