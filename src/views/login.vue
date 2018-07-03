<style lang="less">
.login {
    .ivu-input-group-prepend {
        width: 32px;
    }
    width: 100%;
    height: 100%;
    // background-image: url('http://yuebanyuehao.oss-cn-beijing.aliyuncs.com/index/banner1.jpg');
    background: #ebebeb;
    background-size: cover;
    background-position: center;
    position: relative;
    .topbg{
        background: #159957;
        background: -webkit-linear-gradient(to right, #159957, #155799);
        background: linear-gradient(to right, #159957, #155799);
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:50vh;
        text-align:center;
        h2{
          font-size:4.5em;
          color:#fff;
          line-height: 30vh;
          letter-spacing: 10px;
        }
    }
    .footers{
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        text-align:center;
        padding: 15px 0;
        font-size: 12px;
        color: #999;
        line-height: 22px;
        .container-fluid {
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
          a{
            color: #999;
          }
          .pipe {
            margin: 0 5px;
            color: #CCC;
            font-size: 10px!important;
        }
       }
    }
    &-con {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        &-header {
            font-size: 16px;
            font-weight: 300;
            text-align: center;
            padding: 30px 0;
        }
        .form-con {
            padding: 10px 0 0;
        }
        .login-tip {
            font-size: 10px;
            text-align: center;
            color: #c3c3c3;
        }
    }
    .rememberPassword {
        margin-bottom: 10px;
        margin-top: -10px;
    }
    .demo-spin-icon-load {
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .demo-spin-col {
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
    #canvascontainer {
        position: absolute;
        top: 0px;
    }
    .verificatis {
        img {
            height: 32px;
            position: absolute;
            top: 1px;
            right: 0;
            z-index: 99;
            cursor: pointer;
            border: 1px solid #dddee1;
            border-radius: 0 4px 4px 0;
            &:hover {
                opacity: 0.7;
            }
        }
    }
}

.h2mp {
    color: #ed3f14;
    font-size: 17px;
    vertical-align: middle;
}

.modalss {

    h3 {
        margin: 10px 0;
        font-size: 17px;
    }
    ul {
        padding: 3px 20px;
        font-size: 15px;
        .ivu-icon {
            vertical-align: middle;
            margin: 0 2px;
        }
        li {
            line-height: 2;
        }
    }
}
</style>
<template>
    <div class="login" @keydown.enter="handleSubmit">
       <div class="topbg">
           <h2>欢迎使用悦办越好管理系统</h2>
       </div>
        <div id="canvascontainer" ref='can'></div>
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名" autofocus>
                            <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                            <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="verification" v-if="rules.verification[0].required" class="verificatis">
                            <Input v-model="form.verification" placeholder="验证码">
                            <span slot="prepend">
                                    <Icon :size="16" type="key"></Icon>
                                </span>
                            </Input>
                            <img :src="img" @click="Verification">
                        </FormItem>
                        <FormItem class="rememberPassword">
                            <Checkbox v-model="rememberPassword">记住密码</Checkbox>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long :loading="spinShow">
                                <span v-if="!spinShow">登录</span>
                                <span v-else>登录中...</span>
                            </Button>
                        </FormItem>
                        <div class="login-tip">
                            <span>{{lives.province}}</span>
                            <span>{{lives.weather}}</span>
                            <span>{{lives.temperature}}℃</span>
                        </div>
                    </Form>
                    <Modal v-model="modals" :mask-closable="false" width="650">
                        <p slot="header" class="h2mp" style="color:red">
                            <span><Icon size="20" type="android-alert"></Icon> 系统检测到你的浏览器版本过低 在浏览本系统系时可会出现一些问题 ！</span>
                        </p>
                        <div class="modalss">
                            <h3>解决方案如下！</h3>
                            <ul>
                                <li style="color:red;">悦办越好管理系统 不支持IE浏览器、edge浏览器</li>
                                <li>使用<b>谷歌浏览器</b>
                                    <Icon type="social-chrome" size="20"></Icon> <a href="https://www.google.cn/chrome" target="_blank">点击下载</a></li>
                                <li>如果您使用的是360浏览器 请点击地址栏的内核切换按钮 切换到<b>极速模式</b>
                                <img src="https://dn-shimo-image.qbox.me/xKtn8BC5EWYXPM7P.png" alt="">
                                <img src="http://stdl.qq.com/stdl/temp/faq/upload/qhgn1.png" alt="">
                                </li>
                                <li>如遇到其他问题请联系上级或开发人员。</li>
                            </ul>
                        </div>
                    </Modal>

                <Modal
                    v-model="modals2"
                    width="800"
                    title="使用帮助">
                     <div class="modalss">
                            <ul>
                                <li>登录用户名为自己的<b>中文名称</b> </li>
                                <li style="color:red;">悦办越好管理系统 不支持IE浏览器</li>
                                <li>悦办越好管理系统推荐使用<b>谷歌浏览器</b>
                                    <Icon type="social-chrome" size="20"></Icon> <a href="https://www.google.cn/chrome" target="_blank">点击下载</a></li>
                                <li>如果您使用的是360浏览器、qq浏览器、uc浏览器、搜狗浏览器 请点击地址栏的内核切换按钮 切换到<b>极速模式</b>
                                  <img src="https://dn-shimo-image.qbox.me/xKtn8BC5EWYXPM7P.png" alt="">
                                  <img src="http://stdl.qq.com/stdl/temp/faq/upload/qhgn1.png" alt="">
                                </li>
                                <li>登录系统时出现提示登录用户名或密码不对的问题 请联系上级或开发人员</li>
                                <li>如遇到其他问题请联系上级或开发人员。</li>
                                <li>你还可以将网站地址添加桌面为快捷方式 <a href="javascript:;" @click="deodasda">下载<Icon type="code-download"></Icon></a></li>
                            </ul>
                    </div>
                </Modal>
                <Modal v-model="modals3" title="手机二维码访问" width="300">
                    <div style="text-align: center;">
                        <canvas id="qrccode-canvas-deng"></canvas>
                        <a style="display: block" :href="h5url" target="_blank">直接访问</a>
                    </div>
                     <div slot="footer" style="text-align: center;color: #F44336;">
                        <!-- <p><Icon type="alert-circled"></Icon> 目前属于开发阶段 部分功能未完善</p> -->
                    </div>
                </Modal>
                </div>
            </Card>
        </div>
        <!-- <div id="canvascontainer" ref='can'></div> -->
        <footer class="footers">
            <div class="container-fluid">
                <nav>
                    <a href="javascript:;" @click="deodasda">快捷方式</a>
                    <span class="pipe">|</span>
                    <a href="javascript:;" @click="modals2 = true">使用帮助</a>
                    <span class="pipe">|</span>
                    <a href="http://www.yuebanyuehao.com/" target="_blank">悦办越好</a>
                    <span class="pipe">|</span>
                    <a href="javascript:;" @click="deodasdar">手机访问</a>
                </nav>
                <p>Copyright © 2013-2018 All Rights Reserved</p>
                <p>上海德御房地产经纪事务所</p>
                <p>企业选址专业服务商</p>
            </div>
            
        </footer>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
// import api from '../api/api';
import localStorages from '../localStorage/localStorage';
// import $ from 'jquery';
import axios from 'axios'
import qrcode from 'qrcode'
var QRCode = require('qrcode')
var canvas = ''
export default {
    data() {
        return {
            time: new Date().toLocaleString(),
            form: {
                userName: '',
                password: '',
                verification: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                verification: [
                    { required: false, message: '验证码不能为空', trigger: 'blur' }
                ],
            },
            region: [],
            lives: [],
            rememberPassword: true,
            spinShow: false,
            img: '',
            captcha_key: '',
            h5url: 'http://www.yuebanyuehao.com/admin/h5/index.html',
            modals: false,
            modals2: false,
            modals3: false,
        };
    },
    beforeCreate() {
        // console.log('login页面 加载完成1')  
        // this.$Message.destroy()//关闭
    },
    created() {
        //页面加载完毕
        // console.log('login页面 加载完成2') 

    },
    mounted: function() {
        //全局
        // console.log(this.$api())
        // console.log(this.$el.className)
        console.log('%c'+IEVersion() , "color:red")
        let _this = this;
        if (IEVersion() !== 0) {
            this.modals = true;
        }
        //密码add
        if (localStorages.getStorage('forms') !== null) {
            this.form = localStorages.getStorage('forms')
        }
        this.form.verification = ''; //默认验证码
        this.Verification(); //默认验证码
        this.tianqi(); //默认验证码
        // this.qrcode(); //默认验证码
        // console.log(Cookies.set('keys'))
    },
    methods: {
        handleSubmit() {
            let _this = this;
            this.$refs.loginForm.validate((valid) => {
                // console.log(valid)
                if (valid) {
                    _this.spinShow = true;
                    const msg = this.$Message.loading({
                        content: '登陆中...',
                        duration: 0
                    });
                    this.$http.post('/api/adminlogin', {
                        username: this.form.userName,
                        password: this.form.password,
                        captcha_key: this.captcha_key,
                        captcha_code: this.form.verification
                    }).then(response => {
                        // _this.$Message.destroy(msg) //关闭
                        // console.log(response)
                        // return false;
                        if (response.data.statusx == 202) {
                             _this.$Message.destroy()//关闭
                            _this.$Message.error(response.data.message)
                            _this.Verification()
                            _this.spinShow = false;
                        } else if (response.data.statusx == 200) {
                            // 成功
                            // console.log(response.data.access_token)
                            Cookies.set('keya', response.data.access_token); //存储

                               axios({
                                    method: 'post',
                                    url: '/api/power',
                                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                                })
                                .then(function(res) {
                                    // console.log(res.data.power)
                                    Cookies.set('auth', res.data.power); //权限
                                })
                                .catch(function(err) {
                                    _this.$Notice.error({ title: '权限获取错误' });
                                    _this.Verification()
                                })

                            // return false;
                            // console.log(response)
                            Cookies.set('user', this.form.userName);
                            Cookies.set('password', this.form.password);
                            Cookies.set('Authorization', response.data.access_token); //key
                            // 头像
                            _this.$store.commit('setAvator', 'http://www.yuebanyuehao.com/servicing_shop/extend/images/deyu_logo_200x200.jpg');
                            //权限
                            // if (this.form.userName === 'admin') {
                            //     Cookies.set('access', 0);
                            // } else {
                            //     Cookies.set('access', 1);
                            // }
                            //加载中
                            // this.spinShow = !this.spinShow;

                            this.$router.push({
                                name: 'home_index'
                            });
                            this.$Message.config(msg)
                            //记住密码
                            if (this.rememberPassword) {
                                localStorages.setStorage('forms', this.form);
                            } else {
                                localStorages.setStorage('forms', {
                                    userName: this.form.userName,
                                    password: ''
                                });
                            }
                        } else {
                            this.$Notice.error({ title: '状态码未知错误' });
                            _this.Verification()
                            _this.spinShow = false;
                        }
                    }, response => {
                        this.$Notice.error({ title: '登录错误' });
                        _this.$Message.destroy()
                        _this.Verification()
                        _this.spinShow = false;
                    })
                }
            });
        },
        Verification() {
            let _this = this;
                  axios.post('/api/admincode')
                .then(function(response) {
                     // console.log(response)
                    if (response.data.statusx == 202) {
                        _this.rules.verification[0].required = false;
                        // console.log("不需要验证码时返回")
                    } else if (response.data.statusx == 200) {
                        _this.rules.verification[0].required = true;
                        // console.log("需要验证码时返回")
                    }
                    _this.img = response.data.captcha_image_content;
                    _this.captcha_key = response.data.captcha_key;
                })
                .catch(function(error) {
                    _this.$Notice.error({title: '验证码错误或key获取错误'});
                    console.log(error)
                });

        },
        deodasda(){
            var eleTextarea = '[InternetShortcut]\nURL=http://www.yuebanyuehao.com/admin/index.html'
            // 下载文件方法
            var funDownload = function (content, filename) {
                var eleLink = document.createElement('a');
                eleLink.download = filename;
                eleLink.style.display = 'none';
                // 字符内容转变成blob地址
                var blob = new Blob([content]);
                eleLink.href = URL.createObjectURL(blob);
                // 触发点击
                document.body.appendChild(eleLink);
                eleLink.click();
                // 然后移除
                document.body.removeChild(eleLink);
            };
            funDownload(eleTextarea, '悦办越好管理系统.url');
        },
        tianqi(){ 
            var _this = this;
             axios({
                  method:'get',
                  url:'http://restapi.amap.com/v3/weather/weatherInfo?key=c90d470e523340097ef7bf9020708814&city=310000'
               })
              .then(function (res) {
                if (res.data.status == 1) {
                    // console.log(res.data.lives)
                    _this.lives = res.data.lives[0]
                }
              })
              .catch(function (err) {
                  // _this.$Notice.error({title: '区域错误'});
              })
        },
        deodasdar(){
            this.qrcode();
            this.modals3 =true
        },
        qrcode () {
          let url = this.h5url
          QRCode.toCanvas(document.getElementById('qrccode-canvas-deng'), url, (error) => {
            if (error) {
              console.log(error)
            } else {
              // console.log('ok')
            }
          })
       }  
    }
};





function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6; //IE版本<=7
        }
    } else if (isEdge) {
        return 'edge'; //edge
    } else if (isIE11) {
        return 11; //IE11  
    } else {
        return 0; //不是ie浏览器
    }
}
</script>
<!-- ***
 **** 值   值类型 值说明
 **** 0  Number   不是ie浏览器
 **** 6   Number  ie版本<=6
 **** 7   Number  ie7
 **** 8   Number  ie8
 **** 9   Number  ie9
 **** 10  Number  ie10
 **** 11  Number  ie11
 **** 'edge'  String  ie的edge浏览器
-->