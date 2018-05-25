<style lang="less">
 .house{
  .sere{
    .ivu-form-item{
      // margin-bottom: 8px;
    }
  }
  .selectsNmae{
    .ivu-select-not-found{
      display:none
    }
   }
  .input-group {
    position: relative;
    display: table;
    border-collapse: separate;
    input{
        box-sizing: border-box;
        border: solid 1px #ddd;
        font-size: 12px;
        height: 31px;
        line-height: 1.42857;
        padding: 4px;
        border-right: none;
        text-align: center;
        width:35%;
        color: #495060;
    }
    input:focus{
      border-color: #57a3f3;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    }
    input:first-child{
      border-radius: 3px 0 0 3px;
    }
    span{
      display: inline-block;
      width: 30%;
      height: 31px;
      line-height: 31px;
      text-align: center;
      background-color: #eee;
      border: 1px solid #ccc;
      font-size: 12px;
      vertical-align: top;
      border-radius: 0 3px 3px 0;
    }
  }
  .ivu-card{
    margin-bottom:15px;
  }
  .padd10{
    .ivu-card-body{
      padding:7px;
    }
  }
  .titims{
    .ivu-card-body{
      padding:7px;
      .lesr{
        float: left;
      }
      .rigths{
        float:right;
        line-height: 33px;
        padding-right: 10px;
      }
    }
  }
  .lstable{
    .tableUl{
      .ls{margin-bottom:10px;}
      .li{
        background:#e6f5ff;
        padding: 10px;
        border:1px solid #c1e7ff;
        .le{
          float:left;
          cursor: pointer;
          &:hover{
            opacity: 0.7;
          }
        }
        .rig{
          float:right;
          a{
            margin: 0 10px;
          }
        }
      }
    }
  }
  .pages{
     float: right;
     margin: 15px 5px 5px 0;
   }
   // .ovhidese{
   //   overflow:auto;
   //   .tablese{
   //     min-width: 1300px;
   //   }
   // }
 }
</style>

<template>
   <div class="house cf">
    <pre>{{screens}}</pre>
    <Card class='sere'>
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            房源列表
        </p>
        <a href="#" slot="extra" @click.prevent="toogles=!toogles">  
            <div v-if="toogles">
              <Icon type="ios-arrow-down"></Icon> 展开
            </div>
            <div v-else>
             <Icon type="ios-arrow-up"></Icon> 收回
            </div>
        </a>
    <Form :model="screens" :label-width="80">
        <Row>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="房源名称">
                    <Select v-model="screens.name" 
                    class="selectsNmae" 
                  filterable
                  clearable
                  remote
                  :remote-method="remoteMethod"
                  placeholder = '请搜索楼盘'
                  :loading="loadingse">
                      <Option v-for="(option, index) in optionsName" :value="option.value" :key="index">{{option.label}}</Option>
                  </Select>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="所在区域">
                  <Cascader :data="region" v-model="screens.regions" change-on-select></Cascader>
               </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
                <FormItem label="归属人">
                   <Select v-model="screens.ascription" filterable clearable>
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
                <FormItem label="跟进类型">
                   <Select v-model="screens.FollowUp">
                      <Option v-for="item in gentype" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="最近地铁">
                   <Select v-model="screens.metro" filterable clearable>
                      <Option v-for="item in metros" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
                </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="装修情况">
                   <Select v-model="screens.Renovation" clearable>
                      <Option v-for="item in zhuangxtype" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
                </FormItem>
            </Col>
        </Row>
        <Row v-show="!toogles">
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="租金区间">

              <div class="input-group">
                <input v-model="screens.rent.min" type="text" maxlength="8">
                <input v-model="screens.rent.max" type="text" maxlength="8">
                <span>元</span>
              </div>

              </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="面积区间">

              <div class="input-group">
                <input v-model="screens.minaji.min" type="text" maxlength="8">
                <input v-model="screens.minaji.max" type="text" maxlength="8">
                <span>m²</span>
              </div>

              </FormItem>
          </Col>
          <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="总售价">
              <div class="input-group">
                <input v-model="screens.zongshojia.min" type="text" maxlength="8">
                <input v-model="screens.zongshojia.max" type="text" maxlength="8">
                <span>元</span>
              </div>
              </FormItem>
          </Col>
       
            <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="业主类型">
                  <Cascader :data="identitydata" v-model="screens.identity" change-on-select></Cascader>
              </FormItem>
           </Col>
                
            <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="录入时间">
                 <DatePicker type="daterange" v-model="screens.times" :options="options2" placement="bottom-end" style="width:100%" split-panels></DatePicker>
              </FormItem>
           </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="跟进时间">
                 <DatePicker type="daterange" v-model="screens.timese" :options="options2" placement="bottom-end" style="width:100%" split-panels></DatePicker>
              </FormItem>
           </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="ID">
                 <Input v-model="screens.id"></Input>
              </FormItem>
            </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="是否上架">
                  <RadioGroup v-model="screens.yesNO" type="button" size="small">
                      <Radio label="上架"></Radio>
                      <Radio label="下架"></Radio>
                  </RadioGroup>
              </FormItem>
           </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="是否有图">
                  <RadioGroup v-model="screens.yesNOimg" type="button" size="small">
                      <Radio label="有图"></Radio>
                      <Radio label="无图"></Radio>
                  </RadioGroup>
              </FormItem>
           </Col>
        </Row>
        <Row>
           <Col :xs="24" :sm="24" :md="24" :lg="24" style="text-align:center">
             <Button size="small" @click='screenss' type="primary" icon="ios-search">查询</Button>
             <Button size="small" @click='reson' type="ghost" icon="reply">重置</Button>
           </Col>
        </Row>
    </Form>
    </Card>


       <!-- <Card class='titims'>
      <div class="cf">
      <Button class="lesr" type="primary" @click.prevent="addLOUPan" shape="circle" icon="ios-plus-outline">添加房源</Button>
       <div class="rigths">房源数量：<b>{{totals}} </b>套</div>
     </div>
    </Card> -->

    <Card class="padd10">
    <div class="cf">
     <div class="ovhidese">
      <Table class='tablese' :loading="loadings" width="100%" :columns="HouseTable" :data="HouseTableData" border highlight-row @on-sort-change="order"></Table>
        <div>
          <Page class="cf pages" :total="totals" :page-size="pageSize"  @on-change="changepage" show-total show-elevator></Page>
        </div>
      </div>
 <Modal
        v-model="removes"
        title="确定删除？"
        @on-ok="removesok(removesnus)">
        <Alert type="warning" show-icon>A warning prompt</Alert>
    </Modal>
      </div>
    </Card>
   </div>
</template>

<script>

import $ from 'jquery';
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'house',
      data () {
	        return {
            totals: 50, //总页数
            pageSize: 20, //每页显示
            spinShow: true,
             removes: false,
            removesnus: '',
            screense:false,// true 有搜索条件 false 无搜索条件
             options2: {
                    shortcuts: [
                        {
                            text: '一周',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
            identitydata:[{
                    value: '小业主房源',
                    label: '小业主房源',
                    children: [
                        {
                            value: '二房东',
                            label: '二房东'
                        },
                        {
                            value: '转租客',
                            label: '转租客'
                        }
                    ]
                },{
                    value: '大业主房源',
                    label: '大业主房源',
                    children: [
                        {
                            value: '开发商',
                            label: '开发商'
                        },
                        {
                            value: '开发商代理',
                            label: '开发商代理'
                        },
                        {
                            value: '物业',
                            label: '物业'
                        }
                    ]
                }],//房源类型
	          screens:{
               name:'',//房源名称
               regions:[],//所在区域
               ascription:'',//归属人
               FollowUp:'', //跟进类型
               metro:'', //最近地铁
               Renovation:'', //装修情况
               rent:{
                min:'',
                max:'',
               }, //租金区间
               minaji:{
                min:'',
                max:'',
               }, //面积区间
               zongshojia:{
                min:'',
                max:'',
               }, //总售价
               yesNO:'', //上架
               id:'',//ID
               yesNOimg:'',//图片
               identity:[],//业主类型
               times:[],//时间
               timese:[],
               key:'',
               order:'normal' //asc z desc f
             },
             loadingName: false,
             optionsName: [], //房源名称input
             loadingse:false,
              region: [], //商圈地区
              cityList: [],
              metros: [], //地铁
              gentype: [{
                        value: '新增',
                        label: '新增'
                    },
                    {
                        value: '有效',
                        label: '有效'
                    },
                    {
                        value: '待定',
                        label: '待定'
                    },
                    {
                        value: '已租',
                        label: '已租'
                    },
                    {
                        value: '已售',
                        label: '已售'
                    },
                    {
                        value: '无效',
                        label: '无效'
                    },
                     {
                        value: '我租',
                        label: '我租'
                    },
                    ], //跟进类型
              zhuangxtype:[{
                        value: '标准交付',
                        label: '标准交付'
                    },
                    {
                        value: '豪华装修',
                        label: '豪华装修'
                    },
                     {
                        value: '精装修',
                        label: '精装修'
                    },
                    {
                        value: '中等装修',
                        label: '中等装修'
                    },
                    {
                        value: '简装修',
                        label: '简装修'
                    },
                    {
                        value: '毛坯',
                        label: '毛坯'
                    },
                    ],//装修情况
              toogles:true,
              toogless:-1,//默认不展开
              loadings:true,
              HouseTable: [
                    {
                        title: 'ID',
                        align: 'center',
                        width: 70,
                        key: 'id'
                    },
                    {
                        title: '楼盘名称',
                        align: 'center',
                        key: 'name',
                        render: (h, params) => {
                           const row = params.row;
                           const text = row.imgyesNO ? '图' : '无';
                           const display = row.imgyesNO ? 'inline-block' : 'none';
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    content: row.region+'-'+row.subrange,
                                }
                            }, [
                                h('a', {
                                    props: {
                                        href: 'javascript:;'
                                    },
                                    style: {
                                        margin: '3px 0',
                                        display:"block",

                                    },
                                    on: {
                                        click: () => {
                                          let query = { deal_id: params.row.id};
                                            this.$router.push({
                                             name: 'house_look',
                                             query: query
                                            });
                                        }
                                    }
                                }, row.name),
                                h('span', {
                                    style: {
                                        margin: '2px 0',
                                        display: display,
                                        border:"1px solid #FF5722",
                                        color:"#FF5722",
                                        width: "20px",
                                    },
                                }, text)
                            ]);
                        }
                    },
                    {
                        title: '门牌号',
                        align: 'center',
                        sortable: 'custom',
                        key: 'men',
                        render: (h, params) => {
                            const row = params.row;
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: '门牌号',
                                    content: row.men,
                                },
                                style:{
                                  verticalAlign: '-10px'
                                }
                            }, [
                              h('div', {
                                style: {
                                  width:'60px',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  textAlign:'center'
                                }
                              }, row.men)
                            ]);
                        }
                    },
                    {
                        title: '面积',
                        align: 'center',
                        sortable: 'custom',
                        key: 'mian',
                        render: (h, params) =>{
                          const dis = params.row.mian == null? '0' : params.row.mian;
                          return h('div', [
                                h('div', {}, params.row.mian+'m²'),
                            ]);
                        }
                    },
                    {
                        title: '租售价格',
                        align: 'center',
                        sortable: 'custom',
                        key: 'price',
                        render: (h, params) =>{
                          const display = params.row.price[0] == null? 'none' : 'block';
                          const displays = params.row.price[1] == null || params.row.price[1] == 0? 'none' : 'block';

                          return h('div', [
                                 h('div', {
                                    style: {
                                        margin: '2px 0',
                                        display:display
                                    }
                                 }, params.row.price[0]+'元/m²*天(租)'),
                                 h('div', {
                                    style: {
                                        margin: '2px 0',
                                        display:displays
                                    }
                                 }, params.row.price[1]+'元(售)'),
                            ]);
                        }
                    },
                    {
                        title: '跟进时间',
                        sortable: 'custom',
                        align: 'center',
                        key: 'zuitime',
                        render: (h, params) => {
                            const row = params.row;
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: "录入时间",
                                    content: row.entry,
                                }
                            }, row.zuitime)
                        }
                    },
                    {
                        title: '状态',
                        align: 'center',
                        key: 'zhuangt',
                        render: (h, params) => {
                          const row = params.row;
                          const text = row.shelfyesNO ? '上架' : '下架';
                          const type = row.shelfyesNO ? 'primary' : 'ghost';
                          const types = row.followup=='无效'||row.followup=='已售'||row.followup=='已租'||row.followup=='我租' ? 'ghost' : 'primary';
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: type,
                                        size: 'small'
                                    },
                                    style: {
                                        margin: '2px',
                                        zoom:0.5
                                    }
                                }, text),
                                h('Button', {
                                    props: {
                                        type: types,
                                        size: 'small'
                                    },
                                    style: {
                                        margin: '2px',
                                        zoom:0.5
                                    }
                                }, row.followup)
                            ]);
                        }
                    },
                    {
                        title: '归属人',
                        width: 100,
                        key: 'ren'
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 150,
                        fixed: 'right',
                        key: 'mian',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        icon: 'ios-trash-outline',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.removesnus = params.row.id
                                            this.removes = true
                                        }
                                    }
                                }, '删除'),
                            ]);
                        }
                    },
                ],
                HouseTableData: []

	        }
        },
        mounted(){
        var _this = this;
         this.ajaxName();//大楼名字
         axios({
              method:'post',
              url:'/api/region',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
             // console.log(res.data.region)
             let data =[];
             for (var i = 0; i < res.data.region.length; i++) {
                 let a = {
                    value: res.data.region[i].value,
                    label: res.data.region[i].value,
                    children: res.data.region[i].children
                }
               data.push(a)
             }
             // console.log(data)
             _this.region = data
          })
          .catch(function (err) {
              _this.$Notice.error({title: '区域错误'});
          })

           axios({
              method:'post',
              url:'/api/metro',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.metro;
            _this.metrosda = data;
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: i,
                     label: i
                    }
                metros.push(nea)
             }
             // console.log(metros)
             _this.metros = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '地铁错误'});
          })
           

          axios({
              method:'post',
              url:'/api/adminname',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            let data = res.data.message;
            _this.metrosda = data;
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: data[i],
                     label: data[i]
                    }
                metros.push(nea)
             }
             _this.cityList = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '人员错误'});
          })
         //默认数据 1
        

        this.showHide(1);

        },
        methods:{
          removesok(e){
            console.log(e)
          },
         ajaxName(e){
          let _this = this;
           _this.loading1 = true;
          axios({
              method:'post',
              url:'/api/louname?name=',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            _this.loading1 = false;
            let data = res.data.message;
            // console.log(data);
            _this.metrosda = data;
            let metros = [];
              for (var i in data) {
                  let nea = {
                     value: data[i],
                     label: data[i]
                    }
                metros.push(nea)
             }
             _this.optionsName = metros;
          })
          .catch(function (err) {
              _this.$Notice.error({title: '大楼名字错误'});
          })
         },
          remoteMethod(query){
           let _this = this;
             if(query !== ''){
              _this.loading1 = true;
              // console.log(query)
               axios({
                method:'post',
                url:'/api/louname?name='+query,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                 })
                .then(function (res) {
                  _this.loading1 = false;
                  if(res.data.message.length !== 0){
                   let data = res.data.message;
                    // console.log(data);
                    _this.metrosda = data;
                    let metros = [];
                      for (var i in data) {
                          let nea = {
                             value: data[i],
                             label: data[i]
                            }
                        metros.push(nea)
                     }
                     _this.optionsName = metros;
                  }else{
                    _this.$Message.warning('没有找到'+query+', 请添加楼盘');
                  }
                  

                })
                .catch(function (err) {
                  _this.$Notice.error({title: '大楼名字错误'});
                })
             }else{
              _this.ajaxName();//大楼名字
             }
         },

            showHide(e){
              var _this = this;
              //房源默认没有条件
              _this.loadings = true;
               axios({
                method:'post',
                url:'/api/fangadmin2?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              _this.loadings = false;
              // console.log(res)
              
              _this.HouseTableData = res.data.message.data; //列表数据
              _this.pageSize = res.data.message.pageSize; //每页显示
              _this.totals = res.data.message.totals; //总数
              _this.$Message.success('房源数量：'+_this.totals+' 套');
            })
            .catch(function (err) {
                _this.$Notice.error({title: '房源类表错误'});
            })
            },

            showHidese(e){
              var _this = this;
              //房源有条件
              _this.loadings = true;
               axios({
                method:'post',
                url:'/api/fangadmin2?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                 data:{
                  jo:_this.screens
                }
             })
            .then(function (res) {
              _this.loadings = false;
              // console.log(res.data.message)
              _this.HouseTableData = res.data.message.data; //列表数据
              _this.pageSize = res.data.message.pageSize; //每页显示
              _this.totals = res.data.message.totals; //总数
              _this.$Message.success('房源数量：'+_this.totals+' 套');
            })
             .catch(function (err) {
                _this.$Notice.error({title: '房源类表错误'});
             })
            },
            order(e){
              //排序
              var _this = this;
              _this.screense = true; //有搜索条件
              let key = e.key;
              let order = e.order;
              _this.screens.key = key;
              _this.screens.order = order;
              _this.showHidese(1);
            },

            changepage(page) {
              //翻页
              var _this = this;
              _this.loadings = true;
              if(_this.screense) {
                // console.log('%c有条件','color:red')
                _this.showHidese(page);
              }else{
                // console.log('%c无条件','color:blue')
                _this.showHide(page);
              }
            },
            addLOUPan(){
               this.$router.push({
                 name: 'houseadd'
                });
            },
            Edit(e){
              let query = { deal_id: e};
              this.$router.push({
                 name: 'buildingadd_edit',
                 query: query
                });
            },
            screenss(){
              let _this = this;
               _this.screense = true; //有搜索条件
               _this.loadings = true;
               //搜索
               _this.showHidese(1);
               // console.log('%c搜索','color:red')
                Cookies.set('screenss', true);
                Cookies.set('screens', _this.screens);
            },
            reson(){
              //重置
              let _this = this;
              Cookies.set('screenss', false);
               Cookies.remove('screens');
              _this.screense = false; //无搜索条件
              _this.showHide(1);
              _this.screens ={
               name:'',//房源名称
               regions:[],//所在区域
               ascription:'',//归属人
               FollowUp:'', //跟进类型
               metro:'', //最近地铁
               Renovation:'', //装修情况
               rent:{
                min:'',
                max:'',
               }, //租金区间
               minaji:{
                min:'',
                max:'',
               }, //面积区间
               zongshojia:{
                min:'',
                max:'',
               }, //总售价
               yesNO:'', //上架
               id:'',//ID
               yesNOimg:'',//图片
               identity:[],//业主类型
               times:[],//时间
               timese:[],
               key:'',
               order:'normal'
             }
            },

        }
};
</script>
