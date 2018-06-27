<style lang="less">
.recommend {
    .binpu {
        background: transparent;
        border: none;
        color: #fff;
        width: 320px;
        margin-left: 5px;
    }
    .ivu-card-body {
        background: #f1f1f1;
    }
    .seCard {
        .ivu-card-body {
            background: #FFF;
        }
    }
    #pdfDom {
        width: 830px;
        margin: 0 auto;
    }
    .A4 {
        width: 830px;
        height: 1177.52px;
        background: #FFFFFF;
        position: relative;
        margin: 0 0 15px 0;
        overflow: hidden;
        &:before {
            content: "";
            width: 100%;
            height: 5px;
            background: red;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
    .A1 {
        img {
            width: 100%;
        }
    }
    .navtitle {
        position: relative;
        padding-top: 15px;
        margin-bottom: 15px;
        .red {
            background: #ec1f23;
            height: 50px;
            line-height: 50px;
            /* margin: 20px 0;*/
            text-align: right;
            color: #fff;
            font-size: 2em;
            padding-right: 15px;
        }
        img {
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(255, 255, 255);
            width: 275px;
            height: auto;
        }
    }


    .rigg {
        width: 320px;
        height: 100%;
        position: absolute;
        top: 80px;
        left: 0;
        .addimg {
            margin-bottom: 15px;
            overflow: hidden;
            position: relative;
            img {
                width: 100%;
                height: 221.7px;
            }
            p {
                width: 100%;
                height: 30px;
                position: absolute;
                left: 0;
                bottom: 0;
                background: rgb(247, 150, 70);
                margin: 0;
                line-height: 30px;
                color: rgb(51, 51, 51);
                text-align: center;
                font-size: 12px;
            }
            .wrapper {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                a.btn {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    width: 100px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background: rgba(0, 0, 0, 0.5);
                    color: #fff;
                    display: none;
                    font-size: 12px;
                    &:hover {
                        opacity: 0.8;
                        color: #fff;
                    }
                }
                &:hover .btn {
                    display: block
                }
            }
        }
    }


    .riewi {
        width: 505px;
        height: 100%;
        position: absolute;
        top: 80px;
        padding-left: 12px;
        right: 0;
    }
    .table {
        border-collapse: collapse;
        width: 100%;
    }
    .table>tbody>tr>td,
    .table>tbody>tr>th,
    .table>tfoot>tr>td,
    .table>tfoot>tr>th,
    .table>thead>tr>td,
    .table>thead>tr>th {
        padding: 4px;
        height: 45px;
        vertical-align: middle;
        border-top: 1px solid rgb(247, 150, 70);
        text-align: center;
    }
    .table-bordered>tbody>tr>td,
    .table-bordered>tbody>tr>th,
    .table-bordered>tfoot>tr>td,
    .table-bordered>tfoot>tr>th,
    .table-bordered>thead>tr>td,
    .table-bordered>thead>tr>th {
        border: 1px solid rgb(247, 150, 70);
    }
    tr:nth-child(odd) {
        background: rgba(255, 222, 208, 0.28)
    }
    tr:nth-child(even) {
        background: rgba(249, 154, 113, 0.33)
    }
    .hide1 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }



    .layer_notice {
        .text-e {
            display: block;
            list-style-type: none;
            text-align: center;
            width: 100%;
            font-size: 16px;
            line-height: 1.8;
            color: #000;
            padding: 0;
            position: absolute;
            top: 20%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            li {
                text-align: center;
            }
        }
    }

    .navtitles {
        position: relative;
        height: 60px;
        margin: 20px 0;
        .red {
            height: 50px;
            line-height: 50px;
            /* margin: 20px 0;*/
            text-align: right;
            color: #fff;
            font-size: 2em;
            padding-right: 15px;
        }
        .m1 {
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(255, 255, 255);
            width: 200px;
            height: auto;
        }
        .m2 {
            position: absolute;
            top: 0;
            left: 200px;
            background: rgb(255, 255, 255);
            width: 200px;
            height: auto;
        }
    }


    .A4LL {
        .jies {
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
            background-color: rgba(244, 67, 54, 0.4);
            height: 62%;
            ul {
                list-style-type: none;
                color: #fff;
                line-height: 1.5;
                width: 100%;
                padding: 0;
                margin-top: 200px;
                font-size: 18px;
                li {
                    padding-left: 50%;
                }
                .t {
                    font-size: 1.5em;
                    font-weight: 700;
                    padding: 10px 10px 10px 55px;
                }
            }
        }
        .pingx {
            position: absolute;
            top: 20px;
            right: 0;
            &:before {
                border-color: transparent #F44336 #F44336 transparent;
                border-style: none solid solid;
                border-width: 0 45px 45px;
                content: "";
                display: block;
                height: 0;
                left: -10px;
                width: 380px;
                -webkit-transform: rotateX(180deg);
                transform: rotateX(180deg);
            }
        }
        .pingxx {
            position: absolute;
            bottom: 20px;
            left: 0;
            &:before {
                border-color: transparent transparent #F44336 #F44336;
                border-style: none solid solid;
                border-width: 0 45px 45px;
                content: "Thank you!";
                display: block;
                height: 0;
                left: -10px;
                width: 300px;
                text-align: center;
                color: #fff;
                line-height: 45px;
                text-transform: uppercase;
                font-size: 18px;
                padding-right: 45px;
            }
        }
    }

    .connt2 {
        position: absolute;
        top: 30%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 100%;
        background: #F44336;
        z-index: 88;
        .wi55 {
            width: 50%;
            margin: 0;
            color: #fff;
            text-align: center;
        }
        .tetx {
            float: left;
            h2 {
                margin: 0;
                margin-top: 25px;
            }
            p {
                text-indent: 2em;
                font-size: 12px;
                line-height: 28px;
                text-align: left;
                margin: 15px 30px 30px 30px;
                letter-spacing: 0;
            }
        }
        .img {
            float: right;
            height: 327px;
            background: transparent url(http://www.yuebanyuehao.com/image/vueAdmin/AB2.png) center center no-repeat;
        }
    }
    th {
        .inputse {
            text-align: center;
            background: transparent;
            border: none;
            display: block;
            width: 100%;
            height: 100%;
            font-weight: 800;
            color: #495060;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    td {
        .inputse {
            text-align: center;
            background: transparent;
            border: none;
            display: block;
            width: 100%;
            height: 100%;
            font-weight: 800;
            color: #495060;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 100
        }
    }
}

.imfuese {
    max-height: 500px;
    overflow: auto;
    li {
        list-style-type: none;
        width: 197px;
        display: inline-block;
        margin: 10px;
        img {
            width: 100%;
            height: auto;
        }
    }
    .redd {
        outline: 3px solid #83c0fd;
        outline-offset: 1px;
    }
}

.Uploadsee {
    width: 100%;
    .ivu-upload-select {
        width: 100%;
    }
}
 .embedpdf{
        width:100%;
        height:1000px;
    }
</style>
<template>
    <div class="recommend cf">
        <pre>{{data}}</pre>
        <pre>{{datas}}</pre>
        <pre>{{pdfsrc}}</pre>
        <Card style="min-width: 885px" v-if="lodddddd">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                生成pdf
            </p>
            <Card class="seCard" style="text-align:center;margin-bottom: 15px;">
                <Button type="primary" :loading="loading1" @click="downloadse(1)" icon="android-expand">分享到微信</Button>
                <Button type="primary" :loading="loading2" @click="downloadse(2)" icon="arrow-down-c">预览PDF</Button>
                <Button type="primary" :loading="loading3" @click="downloadse(3)" icon="printer">打印下载PDF</Button>
            </Card>
            <Alert show-icon closable>请仔细核对报告中展示的信息，如信息不全或错误直接点击页面进行修改</Alert>
            <div id="pdfDom">
                <div class="A4 A1">
                    <img src="http://www.yuebanyuehao.com/image/vueAdmin/asf.jpg">
                </div>
                <!-- AB  -->
                <div class="A4 AB" v-for="(n,index) in datas.add" :key="n.length">
                    <div class="navtitle">
                        <img src="http://www.yuebanyuehao.com/image/vueAdmin/logo.svg" alt="德御logo">
                        <div class="red">{{n.lnaem}}</div>
                    </div>
                    <!-- eq -->
                    <div class="rigg">
                        <div class="addimg">
                            <img :src="n.srcimg1">
                            <div class="wrapper">
                                <a href="#" class="btn" @click.prevent="showimg(n.id,index,1)">更换图片</a>
                            </div>
                        </div>
                        <div class="addimg">
                            <img :src="n.srcimg2">
                            <div class="wrapper">
                                <a href="#" class="btn" @click.prevent="showimg(n.id,index,2)">更换图片</a>
                            </div>
                        </div>
                        <div class="addimg">
                            <img :src="n.srcimg3">
                            <div class="wrapper">
                                <a href="#" class="btn" @click.prevent="showimg(n.id,index,3)">更换图片</a>
                            </div>
                        </div>
                        <div class="addimg">
                            <img style="height:308px" :src="n.src">
                            <!--  <img style="height:308px" src="https://restapi.amap.com/v3/staticmap?key=31e75a14b4666b3a920c6e9ea089f1b5&s=rsx&platform=WXJS&appname=31e75a14b4666b3a920c6e9ea089f1b5&sdkversion=1.2.0&logversion=2.0&location=121.473657,31.230378&zoom=15&size=308*308&scale=1">  -->
                            <p>
                                <span class="MAP1">地铁:{{n.subway}}</span>
                                <span class="MAP2">酒店:{{n.hotel}}</span>
                                <span class="MAP3">银行:{{n.bank}}</span>
                            </p>
                        </div>
                    </div>
                    <!-- eq -->
                    <!-- eq2 -->
                    <div class="riewi">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <th class="t22" colspan="2">
                                        <input maxlength="80" class="inputse" type="text" value="楼宇资料">
                                    </th>
                                </tr>
                                <tr>
                                    <th style="width: 160px;">
                                        <input maxlength="80" class="inputse" type="text" value="项目地址">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.address">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="开盘日期">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.time">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="开发商">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.developer">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="物业管理公司">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.property">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="建筑楼层">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.floor">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="总建筑面积">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.area1">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="标准层面积">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.area2">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="得房率">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.rate">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="电梯品牌">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.elevatorbrand">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="电梯数量">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.elevatornuw">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="交付标准">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.standard">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="空调时间">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.conditioningtime">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="停车位">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.space">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="物业管理费">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.propertyfee">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="周边配套">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.periphery">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="公共交通">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.unobstructed">
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <input maxlength="80" class="inputse" type="text" value="知名企业">
                                    </th>
                                    <td class='hide1'>
                                        <input maxlength="80" class="inputse" type="text" v-model="n.famous">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered" style="table-layout: fixed;margin-top: -1px;">
                            <tbody>
                                <tr>
                                    <th class="t22" colspan="6">推荐面积</th>
                                </tr>
                                <tr>
                                    <td>单元</td>
                                    <td>面积</td>
                                    <td>租金报价
                                        <br>(m²/天)</td>
                                    <td>预估成交价
                                        <br>(m²/天)</td>
                                    <td>预估月租金</td>
                                    <td>交房标准及朝向</td>
                                </tr>
                                <tr v-for="s in n.source" :key="s.length">
                                    <td>
                                        <input maxlength="80" class="inputse" type="text" v-model="s.unit">
                                    </td>
                                    <td>
                                        <input maxlength="80" class="inputse" type="text" v-model="s.acreage">
                                    </td>
                                    <td>
                                        <input maxlength="80" class="inputse" type="text" v-model="s.hire">
                                    </td>
                                    <td>
                                        <input maxlength="80" class="inputse" type="text" v-model="s.estimate">
                                    </td>
                                    <td>
                                        <input maxlength="80" class="inputse" type="text" v-model="s.estimaterent">
                                    </td>
                                    <td>
                                        <input maxlength="80" class="inputse" type="text" v-model="s.orientations">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- eq2 -->
                </div>
                <!-- AB  -->
                <div class="A4 A4LL layer_notice">
                    <div class="navtitles">
                        <img class="m1" src="http://www.yuebanyuehao.com/image/vueAdmin/logo.svg" alt="德御logo">
                        <img class="m2" src="http://www.yuebanyuehao.com/image/vueAdmin/logoy.png" alt="悦办越好">
                    </div>
                    <div class="connt2">
                        <div class="wi55 tetx">
                            <h2>御商业地产</h2>
                            <p>悦办越好(yuebanyuehao.com)是一家专注于为企业提供办公选址及配套服务的互联网平台,隶属于上海德御房地产经纪事务所,悦办越好以"为企业提供最有价值的选址服务"为原则,让企 业办公选址省心、省力、省时间,悦办越好杜绝任何虚假和无效房源信息,通过线上选房、智能匹配、实地看房、正规签约的标准流程，为企业提供最专业的 选址服务。悦办越好始终站在企业与业主的角度思考和处理问题,以追求企业与业主双赢为准则,客观公正维护我们的职业形象,力求做好完美桥梁。</p>
                        </div>
                        <div class="wi55 img">
                            <!-- <img src="img/AB2.png" alt=""> --></div>
                    </div>
                    <div class="jies">
                        <ul>
                            <li contenteditable="true">客户经理:
                                <input v-model="datas.name" type="text" class="binpu">
                            </li>
                            <li contenteditable="true">手机:
                                <input v-model="datas.phone" type="text" class="binpu">
                            </li>
                            <li contenteditable="true">Email:
                                <input v-model="datas.emial" type="text" class="binpu">
                            </li>
                            <!-- <li contenteditable="true">Emial: </li> -->
                            <li>────────────────────────</li>
                            <li>地址：上海市崂山路526号江苏大厦1层</li>
                            <li>电话：021-68771866</li>
                            <li>地址：上海市南京东路800号新一百大厦15C室</li>
                            <li>电话：021-60526661</li>
                            <li>http:&nbsp; &nbsp;www.yuebanyuehao.com</li>
                        </ul>
                    </div>
                    <div class="pingx"></div>
                    <div class="pingxx"></div>
                </div>
                <!-- alertimg -->
                <Modal v-model="modal2" width="692">
                    <p slot="header">
                        <Icon type="ios-cloud-upload"></Icon>
                        <span>房源照片/本地上传</span>
                    </p>
                    <div>
                        <Tabs type="card">
                            <TabPane label="房源照片">
                                <ul class="imfuese">
                                    <li v-if="img.length == 0">
                                        <h3>没有照片</h3>
                                    </li>
                                    <li v-else v-for="(s, index) in img" :key="s.length" @click="selectSort(index,s.url1)" :class="{'redd':index == indexs}">
                                        <img :src="s.url1">
                                    </li>
                                </ul>
                            </TabPane>
                            <TabPane label="本地上传">
                                <Upload class="Uploadsee" :headers="keys" :format="['jpg','jpeg','png','gif']" :action='actionUrl' :on-success='onSuccess'>
                                    <div class="ivu-upload-drag" style="padding:20px">
                                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                        <p>点击或拖动文件上传</p>
                                    </div>
                                </Upload>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div slot="footer">
                        <Button type="success" long @click="modal2 = false">确认</Button>
                    </div>
                </Modal>
                <!-- alertimg -->


                 <Modal v-model="WXsou" width="360">
                    <p slot="header" style="text-align:center">
                        <Icon type="qr-scanner"></Icon>
                        <span>分享到手机</span>
                    </p>
                    <div style="text-align:center">
                        <!-- <img :src="WXsouimg"> -->
                        <canvas id="qrccode-canvas"></canvas>
                    </div>
                    <div slot="footer" style="text-align:center">
                        打开微信或浏览器，点击底部的“发现”，使用“扫一扫”即可
                    </div>
                </Modal>

                <Modal v-model="WXsoupdf" width="950" :styles="{top: '5px'}">
                    <p slot="header">
                        <span>选址推荐书</span>
                    </p>
                    <div style="text-align:center">
                        <Alert>点击 <b><Icon type="arrow-down-c"></Icon></b> <a :href="pdfsrc" target="_blank">下载pdf</a></Alert>
                        <iframe class="embedpdf" :src="pdfsrc"></iframe>
                    </div>
                </Modal>

            </div>
        </Card>
        <Card v-else>加载中</Card>
    </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie';
import qrcode from 'qrcode'
var QRCode = require('qrcode')
var canvas = ''
export default {
    name: 'recommend',
    data() {
        return {
            actionUrl: '/api/imgup',
            keys: {},
            data: [], //id
            modal2: false,
            WXsou: false,
            WXsouimg: 'http://pan.baidu.com/share/qrcode?w=250&h=250&url=http://www.jq22.com/demo/pdfjs-141101174753/',
            loading1: false,
            loading2: false,
            loading3: false,
            lodddddd: false,
            WXsoupdf: false,
            pdfsrc:'',
            indexs: -1,
            louindex: 0,
            imgindex: 1,
            img: [],
            datas: {
              //   name:'客户经理',
              //   phone:'手机',
              //   emial:'emial',
              //   add:[
              //     {
              //      id:100,
              //      lnaem:'写字楼名称',
              //      src:'https://restapi.amap.com/v3/staticmap?key=31e75a14b4666b3a920c6e9ea089f1b5&s=rsx&platform=WXJS&appname=31e75a14b4666b3a920c6e9ea089f1b5&sdkversion=1.2.0&logversion=2.0&location=121.473657,31.230378&zoom=15&size=308*308&scale=1', //img
              //      srcimg1:'http://www.yuebanyuehao.com/image/vueAdmin/A4L_a3.jpg',
              //      srcimg2:'http://www.yuebanyuehao.com/image/vueAdmin/A4L_a3.jpg',
              //      srcimg3:'http://www.yuebanyuehao.com/image/vueAdmin/A4L_a3.jpg',
              //      img:[
              //        {
              //          url:'http://www.yuebanyuehao.com/servicing_shop/public/uploadsx/imgzx/loupan59f8faf338474/5a0119d6eda6d.jpg'
              //        },{
              //          url:'http://www.yuebanyuehao.com/servicing_shop/public/uploadsx/imgzx/loupan59f8faf338474/5a0119d6eda6d.jpg'
              //        },{
              //          url:'http://www.yuebanyuehao.com/servicing_shop/public/uploadsx/imgzx/loupan59f8faf338474/5a0119d6eda6d.jpg'
              //        },
              //        {
              //          url:'http://www.yuebanyuehao.com/servicing_shop/public/uploadsx/imgzx/loupan59f8faf338474/5a0119d6639a1.jpg'
              //        }
              //       ],
              //      location:[121.448481,31.202627],
              //      subway:'0', //地铁
              //      hotel:'0', //酒店
              //      bank:'0', //银行
              //      address:'项目地址',
              //      time:'开盘日期',
              //      developer:'开发商',
              //      property:'物业管理公司',
              //      floor:'建筑楼层',
              //      area1:'总建筑面积',
              //      area2:'标准层面积',
              //      rate:'得房率',
              //      elevatorbrand:'电梯品牌',
              //      elevatornuw:'电梯数量',
              //      standard:'交付标准',
              //      conditioningtime:'空调时间',
              //      space:'定车位',
              //      propertyfee:'物业管理费',
              //      periphery:'周边配套',
              //      unobstructed:'公共交通',
              //      famous:'知名企业',
              //      source:[
              //      {
              //        unit:"单元",
              //        acreage:"面积",
              //        hire:"租金报价",
              //        estimate:"预估成交价",
              //        estimaterent:"预估月租金",
              //        orientations:"交房标准及朝向",
              //      },
              //      {
              //        unit:"",
              //        acreage:"",
              //        hire:"",
              //        estimate:"",
              //        estimaterent:"",
              //        orientations:"",
              //      },
              //      {
              //        unit:"",
              //        acreage:"",
              //        hire:"",
              //        estimate:"",
              //        estimaterent:"",
              //        orientations:"",
              //      }
              //      ]
              //     },{
              //      id:100,
              //      lnaem:'写字楼名称',
              //      src:'https://restapi.amap.com/v3/staticmap?key=31e75a14b4666b3a920c6e9ea089f1b5&s=rsx&platform=WXJS&appname=31e75a14b4666b3a920c6e9ea089f1b5&sdkversion=1.2.0&logversion=2.0&location=121.473657,31.230378&zoom=15&size=308*308&scale=1', //img
              //      srcimg1:'http://www.yuebanyuehao.com/image/vueAdmin/A4L_a3.jpg',
              //      srcimg2:'http://www.yuebanyuehao.com/image/vueAdmin/A4L_a3.jpg',
              //      srcimg3:'http://www.yuebanyuehao.com/image/vueAdmin/A4L_a3.jpg',
              //      img:[
              //        {
              //          url:'http://www.yuebanyuehao.com/servicing_shop/public/uploadsx/imgzx/loupan59f8faf338474/5a0119d6eda6d.jpg'
              //        }
              //       ],
              //      location:[121.448481,31.202627],
              //      subway:'0', //地铁
              //      hotel:'0', //酒店
              //      bank:'0', //银行
              //      address:'项目地址',
              //      time:'开盘日期',
              //      developer:'开发商',
              //      property:'物业管理公司',
              //      floor:'建筑楼层',
              //      area1:'总建筑面积',
              //      area2:'标准层面积',
              //      rate:'得房率',
              //      elevatorbrand:'电梯品牌',
              //      elevatornuw:'电梯数量',
              //      standard:'交付标准',
              //      conditioningtime:'空调时间',
              //      space:'定车位',
              //      propertyfee:'物业管理费',
              //      periphery:'周边配套',
              //      unobstructed:'公共交通',
              //      famous:'知名企业',
              //      source:[
              //      {
              //        unit:"单元",
              //        acreage:"面积",
              //        hire:"租金报价",
              //        estimate:"预估成交价",
              //        estimaterent:"预估月租金",
              //        orientations:"交房标准及朝向",
              //      },
              //      {
              //        unit:"",
              //        acreage:"",
              //        hire:"",
              //        estimate:"",
              //        estimaterent:"",
              //        orientations:"",
              //      },
              //      {
              //        unit:"",
              //        acreage:"",
              //        hire:"",
              //        estimate:"",
              //        estimaterent:"",
              //        orientations:"",
              //      }
              //      ]
              //   },
              // ]
            }
        }
    },
    mounted() {
        this.keys = {
            Authorization: 'Bearer ' + Cookies.set('keya')
        };
        this.data = this.$route.query.data;
        this.datthuoqu();
    },
    methods: {
        datthuoqu() {
            let _this = this;
            axios({
                    method: 'post',
                    url: '/api/traps',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    data: {
                        jo: _this.data
                    }
                })
                .then(function(res) {
                    _this.datas = res.data.message
                    _this.fordata();
                    _this.lodddddd = true;
                    // console.log(res.data.message)
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '失败' });
                })
        },
        metro1(e, a) {
            this.$http.get('http://restapi.amap.com/v3/place/around?key=c90d470e523340097ef7bf9020708814&location=' + e[0] + ',' + e[1] + '&keywords=地铁&radius=500')
                .then(response => {
                    var r = response.data.pois.length
                    if (r == 20) {
                        this.datas.add[a].subway = r + '个以上'
                    } else {
                        this.datas.add[a].subway = r + '个'
                    }

                }, response => {
                    _this.$Notice.error({ title: '地铁获取错误' });
                })
        },
        metro2(e, a) {
            this.$http.get('http://restapi.amap.com/v3/place/around?key=c90d470e523340097ef7bf9020708814&location=' + e[0] + ',' + e[1] + '&keywords=酒店&radius=400')
                .then(response => {
                    var r = response.data.pois.length
                    if (r == 20) {
                        this.datas.add[a].hotel = r + '个以上'
                    } else {
                        this.datas.add[a].hotel = r + '个'
                    }
                }, response => {
                    _this.$Notice.error({ title: '地铁获取错误' });
                })
        },
        metro3(e, a) {
            this.$http.get('http://restapi.amap.com/v3/place/around?key=c90d470e523340097ef7bf9020708814&location=' + e[0] + ',' + e[1] + '&keywords=银行&radius=400')
                .then(response => {
                    var r = response.data.pois.length
                    if (r == 20) {
                        this.datas.add[a].bank = r + '个以上'
                    } else {
                        this.datas.add[a].bank = r + '个'
                    }
                }, response => {
                    _this.$Notice.error({ title: '地铁获取错误' });
                })
        },
        fordata(){
            let data = this.datas.add
            for (var i = 0; i < data.length; i++) {
                this.metro1(data[i].location, i)
                this.metro2(data[i].location, i)
                this.metro3(data[i].location, i)
                // console.log(data[i].location)
                this.datas.add[i].src = 'https://restapi.amap.com/v3/staticmap?key=31e75a14b4666b3a920c6e9ea089f1b5&s=rsx&platform=WXJS&appname=31e75a14b4666b3a920c6e9ea089f1b5&sdkversion=1.2.0&logversion=2.0&location=' + data[i].location[0] + ',' + data[i].location[1] + '&zoom=15&size=308*308&scale=1'
                // console.log(this.datas.add[i].src)
            }
        },
        showimg(a, b, c) {
            // img
            this.img = []
            this.louindex = b //lou
            this.imgindex = c //img
            this.indexs = -1
            this.img = this.datas.add[this.louindex].img
            this.modal2 = true
        },
        onSuccess(response, file, fileList) {
            let img = 'http://47.98.155.165' + response.message
            if (this.imgindex == 1) {
                this.datas.add[this.louindex].srcimg1 = img
                this.modal2 = false
            }
            if (this.imgindex == 2) {
                this.datas.add[this.louindex].srcimg2 = img
                this.modal2 = false
            }
            if (this.imgindex == 3) {
                this.datas.add[this.louindex].srcimg3 = img
                this.modal2 = false
            }
        },
        selectSort(e, a) {
            this.indexs = e;
            if (this.imgindex == 1) {
                this.datas.add[this.louindex].srcimg1 = a
            }
            if (this.imgindex == 2) {
                this.datas.add[this.louindex].srcimg2 = a
            }
            if (this.imgindex == 3) {
                this.datas.add[this.louindex].srcimg3 = a
            }
        },
        aclick(url){
            let a = document.createElement('a');
            a.href = url;
            a.download = '选址推荐书_' + new Date().toLocaleString();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        },
        pdf1(e){
             let _this = this;
               axios({
                    method: 'post',
                    url: '/api/siteup2',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    data: {
                        jo: _this.datas
                    }
                })
                .then(function(res) {
                    _this.$Notice.destroy()
                   if (e==1) {
                     _this.WXsoupdf = true;
                     _this.pdfsrc = res.data.message[0]
                     // console.log(res.data.message[0])
                    _this.loading2 = false
                   }else if(e ==2){
                     _this.WXsoupdf = true;
                     _this.pdfsrc = res.data.message[1]
                    _this.loading3 = false
                   }else if(e ==3){
                    _this.WXsou = true;
                    let url = 'http://www.yuebanyuehao.com/admin/pdf/web/viewer.html?file='+res.data.message[2]
                     console.log(url)
                    _this.qrcode(url)
                    _this.loading1 = false
                   }
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '失败' });
                })
        },
        qrcode (url) {
          QRCode.toCanvas(document.getElementById('qrccode-canvas'), url, (error) => {
            if (error) {
              console.log(error)
            } else {
              console.log('ok')
            }
          })
       },  
        downloadse(e) {
            let _this = this;
            _this.$Notice.warning({
                title: '生成中 请勿操作计算机',
                desc: '可能需要等待30秒到1分钟',
                duration: 20
            });

            if (e == 1) {
                _this.loading1 = true
                 _this.pdf1(3)
                 // WXsou: false,
                 // WXsouimg: 'http://pan.baidu.com/share/qrcode?w=250&h=250&url=http://www.jq22.com/demo/pdfjs-141101174753/',
                // http://pan.baidu.com/share/qrcode?w=200&h=200&url=http://www.jq22.com/demo/pdfjs-141101174753/
            }
            if (e == 2) {
                _this.loading2 = true
                _this.pdf1(1)
            }
            if (e == 3) {
                _this.loading3 = true
                _this.pdf1(2)
            }

            // http://pan.baidu.com/share/qrcode?w=200&h=200&url=http://www.jq22.com/demo/pdfjs-141101174753/
        },
    }
};
</script>