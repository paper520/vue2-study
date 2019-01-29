import Vue from 'vue';
import router from './router';

import '../node_modules/easycss-core/build/easycss.min.css';

//根对象
var vm = new Vue({
    //挂载点
    el: document.getElementById('root'),
    router: router,
    
    // 启动vue
    render: createElement => createElement('router-view')
});
