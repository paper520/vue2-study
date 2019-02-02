import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入页面
import App_menu from './App.menu.vue';
import tree_circle_clayjs from './pages/tree.circle.clayjs.vue';
import form_normal from './pages/form.normal.vue';

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
            path: '/tree.circle.clayjs',
            component: tree_circle_clayjs
        }, {
            path: '/form.normal',
            component: form_normal
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
