import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入页面
import App_menu from './App.menu.vue';
import clayjs from './pages/clayjs.vue';
import elementui from './pages/ElementUI.vue';

// 配置路由
const router = new VueRouter({
    routes: [
        /**
         * 1.菜单页面
         * --------------------
         */
        {
            path: '/menu',
            component: App_menu
        },
        /**
         * 2.交易页面
         */
        {
            path: '/clayjs',
            component: clayjs
        }, {
            path: '/elementui',
            component: elementui
        },
        /**
         * 3.默认路由
         * --------------------
         */
        {
            path: '/*',
            redirect: 'menu'
        }]
});

export default router;
