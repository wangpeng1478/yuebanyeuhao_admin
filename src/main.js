import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import {appRouter} from './router/router';
import store from './store';
import App from './app.vue';
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import util from './libs/util';
import Cookies from 'js-cookie';
import VueAMap from 'vue-amap';

import axios from 'axios' // 处理http请求

import $ from 'jquery';

// 引入vue-amap




// 引入mockjs
require('./mock')

Vue.prototype.$http = axios


Vue.use(VueI18n);
Vue.use(iView); 


import api from './api/api.js'
Vue.use(api)

// import htmlToPdf from './api/htmlToPdf.js'  
// Vue.use(htmlToPdf) 

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
   key: 'b59b5eaf14be8d004d8d0c337907e0d0',
   plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
   v: '1.4.4'
})



new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {
        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
        // iview-admin 检查更新
        util.checkUpdate(this);
        // 添加响应拦截器
        let _this = this;
        
        axios.interceptors.response.use(function (response) {
           // console.log(response)
           //204 //ip
           //205 //过期
            if (response.data.statusx == 204) {
                alert('IP没有访问权限')
                 _this.$store.commit('logout', this);
                      _this.$store.commit('clearOpenedSubmenu');
                      _this.$router.push({
                          name: 'login'
                      })
            }else if(response.data.statusx == 205){
                     alert('登录过期')
                      _this.$store.commit('logout', this);
                      _this.$store.commit('clearOpenedSubmenu');
                      _this.$router.push({
                          name: 'login'
                      })
                    // _this.$router.push({
                    //    name: 'login'
                    // });
            }
           return response;
           
          }, function (error) {
            // console.log(error)
             console.log("%c 错误" ,'color:red;');
             _this.$router.push({
                    name: 'error-500'
                });
            return Promise.reject(error);
          });
    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }
});
