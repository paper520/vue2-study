import Vue from 'vue';
import router from './router';
import VeeValidate from 'vee-validate';
import zh_CN from './assets/locale/zh_CN';
import VueI18n from 'vue-i18n';

// 引入基础css
import '../node_modules/easycss-core/build/easycss.min.css';

Vue.use(VueI18n);

var i18n = new VueI18n({
    locale: 'zh_CN',
});

Vue.use(VeeValidate, {
    /**
     * 配置提示文字为中文
     * ========================
     */
    i18n,
    i18nRootKey: 'validation',
    dictionary: {
        zh_CN
    }
});

//根对象
var vm = new Vue({

    //挂载点
    el: document.getElementById('root'),

    // 启用路由
    router: router,

    // 启动vue
    render: createElement => createElement('router-view')
});
