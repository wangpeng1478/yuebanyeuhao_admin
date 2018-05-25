
<style lang="less">
 .directory{
     .selectsNmae{
      .ivu-select-not-found{
           display:none
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
 }
</style>

<template>
   <div class="directory cf">
   <pre>{{screens}}</pre>
   <pre>{{access}}</pre>
      <Card class='sere'>
        <p slot="title">
           <Icon type="ios-paper"></Icon>
            企业名录
        </p>
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
               <FormItem label="最近地铁">
                   <Select v-model="screens.metro" filterable clearable>
                      <Option v-for="item in metros" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
                </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="所在楼层">
                    <Input v-model="screens.layers">
                        <span slot="append">层</span>
                    </Input>
               </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="公司名称">
                    <Input v-model="screens.companyname">
                       
                    </Input>
               </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="公司规模">
                 <Select v-model="screens.scalex">
                      <Option value="20人以下">20人以下</Option>
                      <Option value="20-50人">20-50人</Option>
                      <Option value="50-100人">50-100人</Option>
                      <Option value="100-200人">100-200人</Option>
                      <Option value="200-500人">200-500人</Option>
                      <Option value="500-800人">500-800人</Option>
                      <Option value="800-1500人">800-1500人</Option>
                      <Option value="1500人以上">1500人以上</Option>
                  </Select>
               </FormItem>
            </Col>
            </Row>
            <Row>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="公司行业">
                 <Select v-model="screens.tradex">
                          <Option value="IT|通信|电子|互联网">IT|通信|电子|互联网</Option>
                          <Option value="金融业">金融业</Option>
                          <Option value="房地产|建筑">房地产|建筑</Option>
                          <Option value="贸易|批发|零售|租赁业">贸易|批发|零售|租赁业</Option>
                          <Option value="生产|加工|制造">生产|加工|制造</Option>
                          <Option value="交通|运输|物流|仓储">交通|运输|物流|仓储</Option>
                          <Option value="服务业">服务业</Option>
                          <Option value="文化|传媒|娱乐|体育">文化|传媒|娱乐|体育</Option>
                          <Option value="文体教育|工艺美术">文体教育|工艺美术</Option>
                          <Option value="能源|矿产|环保">能源|矿产|环保</Option>
                          <Option value="商业服务">商业服务</Option>
                          <Option value="政府|非盈利机构">政府|非盈利机构</Option>
                          <Option value="农|林|牧|渔">农|林|牧|渔</Option>
                          <Option value="机械设备|医疗器械">机械设备|医疗器械</Option>
                          <Option value="其他">其他</Option>
                  </Select>
               </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="录入时间">
                  <DatePicker type="daterange" v-model="screens.timese" :options="options2" style="width:100%" split-panels></DatePicker>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="8">
              <FormItem label="是否在租">
                   <RadioGroup v-model="screens.grade" type="button">
                        <Radio label="是">是</Radio>
                        <Radio label="否">否</Radio>
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
        <Card class='titims' style="margin:15px 0 0 0">
         <div class="cf">
          <Button class="lesr" type="primary" @click="addLOUPan" shape="circle" icon="ios-plus-outline">添加名录</Button>
            <div class="rigths">楼盘：<b>{{totals}}</b>套</div>
            <div class="rigths">企业名录：<b>{{totals1}}</b>条</div>
         </div>
        </Card>
         <Card style="margin:15px 0 0 0" v-if='datale.length !== 0'>
            <div class="cf">
               <div class="lstable cf">
                  <div class="tableUl">
                       <div class="ls" v-for="(item, index) in datale" :key="index">
                        <div class="li cf">
                          <div class="le" @click.prevent="showHide(index,item.ofid)">
                            <b>楼盘名称:{{item.name}}</b>
                          </div>
                          <div class="rig">
                            <a href="#" @click.prevent="showHide(index,item.ofid)">查看详情 </a>
                              <Tooltip content="打印" placement="top" v-if="access.ente03">
                                  <a href="#" @click.prevent="printer(item.ofid,item.name)"><Icon style="vertical-align: middle" size='20' color="#5c6b77" type="printer"></Icon></a>
                              </Tooltip>
                          </div>
                        </div>
                          <Table v-if="toogless == index" :loading="loadings" width="100%" :columns="HouseTable" :data="HouseTableData" highlight-row></Table>
                      </div>

                  </div>
                </div>
                 <Page class="cf pages" :total="totals" :page-size="pageSize"  @on-change="changepage" show-total show-elevator></Page>
            </div>
            <Spin size="large" fix v-if="spinShow"></Spin>
        </Card>
        <Card class="padd10" style="min-height: 500px;text-align:center" v-else>
           <Icon type="ios-information-outline" style="font-size:2em"></Icon>
           <h3>没有找到企业名录</h3>
           <Spin size="large" fix v-if="spinShow"></Spin>
        </Card>

   </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'directory',
      data () {
          return {
            totals: 0, //总页数
            pageSize: 0, //每页显示
            totals1:0,
            spinShow: true,
            screense:false,// true 有搜索条件 false 无搜索条件
            optionsName: [], //房源名称input
            region:[],
            metros: [], //地铁
            access:{},//权限
            loadingse:false,
            loadings:true,
            toogless:-1,//默认不展开
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
            screens:{
               name:'',//楼盘
               regions:[],//所在区域
               metro:'',//最近地铁
               layers:'',//所在楼层
               companyname:'',//公司名称
               scalex:'',//公司规模
               tradex:'',//公司规模
               timese:[],//租约到期
               grade:'',//是否在租
            },
            datale:[], //表
            HouseTable:[
              {
                type: 'index',
                width: 60,
                align: 'center'
              },
              {
                title: '单元号',
                align: 'center',
                sortable: true,
                width: 150,
                render: (h, params) => {
                 const row = params.row;
                  return h('div', [
                      h('span', {
                      }, row.floorx+"F - "),
                       h('span', {
                      }, row.hnumber )
                  ]);
               }
              },
              {
                title: '公司名称',
                key: 'gname',
                render: (h, params) => {
                    const row = params.row;
                    const baidu = 'https://www.baidu.com/s?&wd='+row.gname;
                    const qichacha = 'http://www.qichacha.com/search?key='+row.gname;
                    const tianyancha = 'https://www.tianyancha.com/search?key='+row.gname;
                    return h('Poptip', {
                        props: {
                            trigger: 'hover',
                            title: '点击查询企业',
                        }
                    }, [
                      h('div',{style:{cursor:'pointer'}}, row.gname),
                      h('a', {
                          slot: 'content',
                          attrs: {
                              target: '_blank',
                              href:baidu
                          },
                          style: {
                              margin: '5px',
                              display:'block',
                              borderBottom:'1px solid #eee',
                              paddingBottom:'5px'
                          }
                        }, row.gname+'(百度搜索)'),
                      h('a', {
                          slot: 'content',
                          attrs: {
                              target: '_blank',
                              href:qichacha
                          },
                          style: {
                              margin: '5px',
                              display:'block',
                              borderBottom:'1px solid #eee',
                              paddingBottom:'5px'
                          }
                        }, row.gname+'(企查查搜索)'),
                      h('a', {
                          slot: 'content',
                          attrs: {
                              target: '_blank',
                              href:tianyancha
                          },
                          style: {
                              margin: '5px',
                              display:'block',
                              borderBottom:'1px solid #eee',
                              paddingBottom:'5px'
                          }
                        }, row.gname+'(天眼查搜索)'),
                    ]);
                }
              },
              {
              title: '操作',
              key: 'action',
              width: 150,
              fixed: 'right',
              align: 'center',
              render: (h, params) => {
                  return h('div', [
                      h('Button', {
                          props: {
                              type: 'primary',
                              size: 'small'
                          },
                          style: {
                              margin: '5px'
                          },
                          on: {
                              click: () => {
                                   let query = { deal_id: params.row.qyid};
                                    this.$router.push({
                                     name: 'directory_look',
                                     query: query
                                    });
                              }
                          }
                      }, '查看'),
                       h('Button', {
                          props: {
                              type: 'error',
                              size: 'small'
                          },
                          style: {
                              margin: '5px'
                          },
                          on: {
                              click: () => {
                                   let query = { deal_id: params.row.qyid};
                                    this.$router.push({
                                     name: 'directoryadd_st',
                                     query: query
                                    });
                              }
                          }
                      }, '编辑')
                  ]);
              }
             }
            ],
            HouseTableData:[] 
          }
        },
        mounted(){
          this.accesse();
          this.ajaxName();
          this.quyu();
          this.datie();
          this.buildingls(1);
        },
        methods:{
          accesse(){
             let _this = this;
             axios({
                method: 'post',
                url: '/api/power',
                headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
              })
              .then(function(res) {
                   Cookies.set('auth', res.data.power); //权限
                  _this.access = res.data.power;
              })
              .catch(function(err) {
                  _this.$Notice.error({ title: '权限获取错误' });
              })
          },
         datie(){
            let _this = this;
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
         },
         quyu(){
           let _this = this;
            axios({
              method:'post',
              url:'/api/region',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
            .then(function (res) {
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
         addLOUPan(){
            this.$router.push({
             name: 'directory_add'
            });
         },
         buildingls(e){
            let _this = this;
             _this.spinShow = true;
            axios({
                method:'post',
                url:'/api/entelist?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              _this.spinShow = false;
              _this.datale = res.data.message.data;
              _this.pageSize = res.data.message.pageSize;
              _this.totals = res.data.message.totals;
              _this.totals1 = res.data.message.totals2
              _this.$Message.success('楼盘：'+_this.totals+' 套');
              _this.$Message.success('企业名录：'+_this.totals1+' 条');
            })
            .catch(function (err) {
                _this.$Notice.error({title: '类表错误'});
            })
          },
          buildinglse(e){
            let _this = this;
             _this.spinShow = true;
            axios({
                method:'post',
                url:'/api/entelist?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                data:{
                  jo:_this.screens
                }
             })
            .then(function (res) {
              _this.spinShow = false;
              _this.datale = res.data.message.data;
              _this.pageSize = res.data.message.pageSize;
              _this.totals = res.data.message.totals;
               _this.totals1 = res.data.message.totals2
              _this.$Message.success('楼盘：'+_this.totals+' 套');
              _this.$Message.success('企业名录：'+_this.totals1+' 条');
            })
            .catch(function (err) {
                _this.$Notice.error({title: '类表错误'});
            })
          },
         showHide(e,b){
            //展开 收缩
              var _this = this;
               _this.toogless = e;
               //名录
              _this.loadings = true;
                  axios({
                      method:'post',
                      url:'/api/entelistact?ofid='+b,
                      headers:{Authorization:'Bearer '+Cookies.set('keya')},
                       data:{
                         jo:_this.screens
                       }
                   })
                  .then(function (res) {
                   _this.loadings = false;
                   _this.HouseTableData = res.data.message
                  })
                  .catch(function (err) {
                      _this.$Notice.error({title: '名录错误'});
                  })

            },
           changepage(page) {
              //翻页
              var _this = this;
              _this.spinShow = true;
              _this.toogless = -1;//防止分页加载index
              if(_this.screense) {
                _this.buildinglse(page)
              }else{
                _this.buildingls(page); //无
              }
            },
            screenss(){
              let _this = this;
               _this.screense = true; //有搜索条件
               _this.loadings = true;
                _this.toogless = -1;//防止分页加载index
               //搜索
               _this.buildinglse(1);
            },
            reson(){
              //重置
              let _this = this;
              _this.screense = false; //无搜索条件
               _this.toogless = -1;//防止分页加载index
              _this.buildingls(1);
              _this.screens ={
                   name:'',//楼盘
                   regions:[],//所在区域
                   metro:'',//最近地铁
                   layers:'',//所在楼层
                   companyname:'',//公司名称
                   scalex:'',//公司规模
                   tradex:'',//公司规模
                   timese:[],//租约到期
                   grade:'',//是否在租
             }
            },
            printer(e,a){
             let query = { 
              deal_id: e,
              name:a
            };
                this.$router.push({
                 name: 'print_s',
                 query: query
                });
            }
        }
};
</script>

