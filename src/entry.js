import Vue from 'vue';
import router from './router';
import VeeValidate from 'vee-validate';

// 引入基础css
import '../node_modules/easycss-core/build/easycss.min.css';

Vue.use(VeeValidate);

//根对象
var vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启用路由
    router: router,

    // 启动vue
    render: createElement => createElement('router-view')
});
