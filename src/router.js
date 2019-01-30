import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入页面
import App_menu from './App.menu.vue';
import clayjs_canvas2d_cgxxzlsjt from './pages/clayjs/canvas2d/cgxxzlsjt/page.vue';

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
            // 采购信息总览数据图
            path: '/clayjs/canvas2d/cgxxzlsjt',
            component: clayjs_canvas2d_cgxxzlsjt
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
