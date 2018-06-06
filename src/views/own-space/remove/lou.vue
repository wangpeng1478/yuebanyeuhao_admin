<style lang="less">
   .lou{
    .pages{
     float: right;
     margin: 15px 5px 5px 0;
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
   }
</style>

<template>
   <div class="lou cf">
    <pre>{{screens}}</pre>
    <Card class='sere'>
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            删除楼盘
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
               <FormItem label="楼盘名称">
                    <Select 
                    v-model="screens.name" 
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
        </Row>
        <Row>
           <Col :xs="24" :sm="24" :md="24" :lg="24" style="text-align:center">
             <Button size="small" @click='screenss' type="primary" icon="ios-search">查询</Button>
             <Button size="small" @click='reson' type="ghost" icon="reply">重置</Button>
           </Col>
        </Row>
    </Form>
    </Card>
    <div style="position:relative">
    <Card class="padd10" style="min-height: 500px;">
    <div class="cf">
       <Table :loading="spinShow" width="100%" :columns="HouseTable" :data="officeDta"></Table>
       <Page class="cf pages" :total="totals" :page-size="pageSize" @on-change="changepage" show-total show-elevator></Page>
        <Modal
        v-model="removes"
        title="警告"
        @on-ok="removesok(removesnus)">
        <Alert type="warning" show-icon>确定删除？</Alert>
    </Modal>
    </div>
    </Card>
    </div>
   </div>
</template>

<script>

import $ from 'jquery';
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'lou',
      data () {
	        return {
            totals: 50, //总页数
            pageSize: 20, //每页显示
            spinShow: true,
            removes: false,
            removesnus: '',
            screense:false,// true 有搜索条件 false 无搜索条件
	          screens:{
               name:'',//楼盘名称
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
               yesNO:'',
               id:''
             },
             loadingName: false,
             optionsName: [], //楼盘名称input
             loadingse: false,
             region: [{
                    value: '黄浦',
                    label: '黄浦',
                    children: [{
                        value: '八佰伴',
                        label: '八佰伴',
                    }]
                },{
                    value: '普陀',
                    label: '普陀',
                    children: [{
                        value: '中山公园',
                        label: '中山公园',
                    }]
                }], //商圈地区
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
              officeDta:[],
              HouseTable: [
                    {
                        title: 'ID',
                        align: 'center',
                        width: 100,
                        key: 'id'
                    },
                    {
                        title: '楼盘名字',
                        key: 'name'
                    },
                    {
                        title: '地址',
                        render: (h, params) => {
                            return h('div', params.row.diyu+params.row.ditie+params.row.station);
                        }
                    },
                    {
                        title: '操作',
                        width: 150,
                        fixed: 'right',
                        align: 'center',
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
                                }, '删除')
                            ]);
                        }
                    },

                ],
                HouseTableData: [], //房源

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
          
          this.buildingls(1); //类表
        },
        methods:{
          removesok(e){
            let _this = this;
            axios({
                method:'post',
                url:'/api/officedel?id='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              _this.buildingls(1); //类表
              _this.$Message.success('删除成功');
            })
            .catch(function (err) {
                _this.$Notice.error({title: '类表错误'});
            })
          },
          buildingls(e){
            let _this = this;
             _this.spinShow = true;
            axios({
                method:'post',
                url:'/api/louadmin?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              _this.spinShow = false;
              // console.log(res.data.message.data)
              _this.officeDta = res.data.message.data;
              _this.pageSize = res.data.message.pageSize;
              _this.totals = res.data.message.totals;
              _this.$Message.success('楼盘数量：'+_this.totals+' 套');
            })
            .catch(function (err) {
                _this.$Notice.error({title: '类表错误'});
            })
          },
          buildinglse(e){
            let _this = this;
            console.log(_this.screens)
             _this.spinShow = true;
            axios({
                method:'post',
                url:'/api/louadmin?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                data:{
                  jo:_this.screens
                }
             })
            .then(function (res) {
              _this.spinShow = false;
              _this.officeDta = res.data.message.data;
              _this.pageSize = res.data.message.pageSize;
              _this.totals = res.data.message.totals;
              _this.$Message.success('楼盘数量：'+_this.totals+' 套');
            })
            .catch(function (err) {
                _this.$Notice.error({title: '类表错误'});
            })
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
            
            changepage(page) {
              //翻页
              var _this = this;
              _this.spinShow = true;
              _this.toogless = -1;//防止分页加载index

              if(_this.screense) {
                console.log('%c有条件','color:red')
                _this.buildinglse(page)
              }else{
                console.log('%c无条件','color:blue')
                _this.buildingls(page); //类表
              }
            },
            addLOUPan(){
               this.$router.push({
                 name: 'buildingsadd'
                });
            },
            Edit(e){
              let query = { deal_id: e};
              this.$router.push({
                 name: 'buildingadd_edit',
                 query: query
                });
            },
            buildinglooks(e){
              let query = { deal_id: e};
              this.$router.push({
                 name: 'building_look',
                 query: query
                });
            },
            screenss(){
              let _this = this;
              // console.log(this.screens)
              _this.toogless = -1;//防止分页加载index
              _this.screense = true; //有搜索条件
              _this.spinShow = true; //table looing
              //搜索
              axios({
               method: 'post',
               url: '/api/louadmin',
               headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
               data:{
                 jo:_this.screens
               }
               })
               .then(function(res) {
                _this.spinShow = false;
                 // console.log(res)
                 _this.officeDta = res.data.message.data;
                 _this.pageSize = res.data.message.pageSize;
                 _this.totals = res.data.message.totals;
                 _this.$Message.success('楼盘数量：'+_this.totals+' 套');

               })
               .catch(function(err) {
                   _this.$Notice.error({ title: '搜索错误' });
               })

            },
            reson(){
              //重置
              let _this = this;
              _this.buildingls(1); //类表
              _this.screense = false; //无搜索条件
              _this.toogless = -1;//防止分页加载index
              // _this.spinShow = true; //table looing
              this.screens = {
               name:'',//楼盘名称
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
               yesNO:'',
               id:''
             }

            }

        }
};
</script>