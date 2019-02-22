import Vue from 'vue';
import router from './router';
import VeeValidate from 'vee-validate';

// 引入基础css
import '../node_modules/easycss-core/build/easycss.min.css';

const config = {
    // errorBagName: 'errors',// 代表自定义errors
    delay: 0,// 代表输入多少ms之后进行校验
    locale: 'zh_CN',
    messages: null,// 代表自定义校验信息
    strict: true // 代表没有设置规则的表单不进行校验
};
Vue.use(VeeValidate, config);

//根对象
var vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启用路由
    router: router,

    // 启动vue
    render: createElement => createElement('router-view')
});
