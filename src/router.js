import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入页面
import App_menu from './App.menu.vue';

// 配置路由
const router = new VueRouter({
    routes: [
        /**
         * 菜单页面
         * --------------------
         */
        {
            path: '/menu',
            component: App_menu
        },
        /**
         * --------------------
         * 默认路由
         */
        {
            path: '/*',
            redirect: 'menu'
        }]
});

export default router;
