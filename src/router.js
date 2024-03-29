import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入页面
import App_menu from './App.menu.vue';
import clayjs from './html/clayjs.vue';
import veevalidate from './html/vee-validate.vue';
import datepicker from './html/v-datepicker.vue';
import numberChinese from './html/numberChinese.vue';
import original from './html/original.vue';
import axios from './html/axios.vue';

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
            path: '/veevalidate',
            component: veevalidate
        }, {
            path: '/datepicker',
            component: datepicker
        }, {
            path: '/numberChinese',
            component: numberChinese
        }, {
            path: '/original',
            component: original
        }, {
            path: '/axios',
            component: axios
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
