import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import menu from './App.vue';

const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: 'menu'
    },
    {
        path: '/menu',
        component: menu
    },
    {
        path: '/*',
        redirect: 'menu'
    }
    ]
});

export default router;
