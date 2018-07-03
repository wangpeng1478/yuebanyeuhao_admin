
<style lang="less">
 .shared{
     .selectsNmae{
      .ivu-select-not-found{
        display:none
      }
   }
   code {
    display: inline-block;
    background: #f7f7f7;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    margin: 0 3px;
    padding: 1px 5px;
    border-radius: 3px;
    color: #666;
    border: 1px solid #eee;
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

   .table-border {
    border-top: 1px solid #ddd;
   }
   table {
    width: 100%;
    empty-cells: show;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
}
.thead {
    background: #f0f0f0;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}
.text-c {
    text-align: center;
}
.table .text-c th, .table .text-c td {
    text-align: center;
}
.table-border th, .table-border td {
    border-bottom: 1px solid #ddd;
}
.table th, .table td {
    padding: 8px;
    line-height: 20px;
    word-break: break-all;
}
.table th {
    font-weight: bold;
}

.lr_11 td, .fenge td {
    border-bottom: 1px solid #c1e7ff !important;
}
.table-border th, .table-border td {
    border-bottom: 1px solid #ddd;
}
.table td {
    text-align: left;
}
.table th, .table td {
    padding: 8px;
    line-height: 20px;
    word-break: break-all;
}
.lr_11 {
    border-left: 1px solid #c1e7ff !important;
    border-right: 1px solid #c1e7ff !important;
}
.l, .f-l {
    float: left!important;
    _display: inline;
}
.strong_ddd {
    font-size: 13px;
    color: #4b4b4b;
}
.span_ddd {
    color: #7b7b7b;
    margin-right: 10px;
}
.tr_bg {
    background: #e6f5ff;
}
.lr_11 {
    border-left: 1px solid #c1e7ff !important;
    border-right: 1px solid #c1e7ff !important;
 }
 .iosstar{
  font-size:20px;
  color:#05b705;
  margin:0 5px;
 }
 .paddse td{
    padding: 15px 0;
 }


   .pages{
     float: right;
     margin: 15px 5px 5px 0;
   }
   .shared .table-border th, .shared .table-border td {
    border-bottom: 1px solid #ddd !important;
   }
  .label-warning{
     background: #F44336;
     color: #fff;
     padding: 2px;
  }
 }
</style>

<template>
   <div class="shared cf">
    
    <pre>{{screens}}</pre>

     <Card class='sere'>
        <p slot="title">
           <Icon type="ios-paper"></Icon>
            共享办公
        </p>
        <Form :model="screens" :label-width="80">
          <Row>
          <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="品牌名称">
                   <Select v-model="screens.brands" filterable clearable>
                      <Option v-for="item in metross" :value="item.value" :key="item.value">{{ item.label }}</Option>
                   </Select>
               </FormItem>
            </Col>

            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="房源名称">
                    <Select v-model="screens.name" 
                    class="selectsNmae" 
                  filterable
                  clearable
                  remote
                  :remote-method="remoteMethod"
                  :placeholder="sesongs">
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
                <FormItem label="归属人">
                   <Select v-model="screens.ascription" filterable clearable>
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </FormItem>
            </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="跟进时间">
                 <DatePicker type="daterange" v-model="screens.timese" :options="options2" placement="bottom-end" style="width:100%" split-panels></DatePicker>
              </FormItem>
           </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="价格区间">
                 <div class="input-group">
                  <input v-model="screens.rentmin" type="text" maxlength="8">
                  <input v-model="screens.rentmax" type="text" maxlength="8">
                  <span>元</span>
                </div>
              </FormItem>
           </Col>
             <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="网点ID">
                  <Input v-model="screens.id"></Input>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="是否上架">
                   <RadioGroup v-model="screens.grade" type="button">
                        <Radio label="1">是</Radio>
                        <Radio label="2">否</Radio>
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
          <Button class="lesr" type="primary" @click="addLOUPan" shape="circle" icon="ios-plus-outline">添加品牌</Button>
            <div class="rigths">品牌：<b>{{totals}}</b>个</div>
            <div class="rigths">网点：<b>{{totals2}}</b>个</div>
            <div class="rigths">工位：<b>{{totals3}}</b>个</div>
         </div>
        </Card>

        <!-- tablese -->
        <Card class="cf" style="min-height: 500px;min-width:1100px;margin:15px 0 0 0">
      <!-- se -->
      <table class="table table-border crm_t" style="table-layout: fixed;">
        <thead class="thead">
          <tr class="text-c lr_1">
              <th>ID</th>
              <th>所在楼盘</th>
              <th>楼盘类型</th>
              <th>地址</th>
              <th>上架数量</th>
              <th>最新跟进</th>
              <th>工位</th>
              <th>归属人</th>
              <th>操作</th>
          </tr>
        </thead>

        <tbody v-for="(n, index) in datas" :key="n.id">
          <tr class="fenge">
            <td colspan="9"></td>
          </tr>
          <tr class="lr_11 tr_bg">
            <td colspan="8" style="padding-left:45px;">
               <div class="dspodasd">
                <strong class="strong_ddd">品牌名称：{{n.name}}</strong>
                <span class="span_ddd"> ID:{{n.id}} ({{n.outlets.length}})</span>
                <span v-if="n.imgyes" class="label-warning">图</span>
               </div>
            </td>
            <td class="text-c" style="text-align: center">
              <a href="javascript:;" @click.prevent="sharedaddst(n.id)">查看详情</a>
            </td>
          </tr>

          <tr class="lr_11 text-c paddse" v-for="(s, index) in n.outlets" :key="s.length">
            <td>{{s.oid}}</td>
            <td><p>{{s.oname}}</p><span v-if="s.imgyeso" class="label-warning">图</span></td>
            <td>{{s.type}}</td>
            <td>{{s.address}}</td>
            <td>{{s.numeral}}</td>
            <td><p :title="s.time" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{s.time}}</p></td>
            <td>
              <Poptip placement="left-start" trigger="hover" width="400" @on-popper-show="Poptipsr(s.oid,s.gnumeral)">
                  <Button size="small" type="error">{{s.gnumeral}}</Button>
                  <div class="api" slot="content">
                      <table>
                          <thead>
                              <tr style="background: #f7f7f7;
                                  white-space: nowrap;
                                  color: #5c6b77;
                                  font-weight: 600;">
                                  <th style="border: 1px solid #e9e9e9;text-align: left;">办公室类型</th>
                                  <th style="border: 1px solid #e9e9e9;text-align: left;">单价</th>
                                  <th style="border: 1px solid #e9e9e9;text-align: left;">状态</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(ss, index) in spinShowPoptipsrdata" :key="index">
                                  <th style="border: 1px solid #e9e9e9;text-align: left;font-weight: 100;">{{ss.type}}</th>
                                  <th style="border: 1px solid #e9e9e9;text-align: left;font-weight: 100;"><code>{{ss.nus}} </code>元/工位/月</th>
                                  <th style="border: 1px solid #e9e9e9;text-align: left;font-weight: 100;">
                                  <code :style="{background : ss.yes=='上架'?'#2d8cf0':'#f7f7f7',color:ss.yes=='上架'?'#fff':'#666'}">{{ss.yes}}</code>
                                  </th>
                              </tr>
                              <tr v-if="spinShowPoptipsrdata.length == 0">
                                <th style="border: 1px solid #e9e9e9;text-align: center;" colspan="3">没有工位</th>
                              </tr>
                          </tbody>
                      </table>
                      <Spin v-if="spinShowPoptipsr" fix>加载中...</Spin>
                  </div>
              </Poptip>

            </td>
            <td>{{s.attribution}}</td>
            <td>
              <Button size="small" type="ghost" @click="changegong(s.oid)">工位</Button>
              <Button size="small" type="error" @click="lookgong(s.oid,s.ofid,s.uniqidof)">跟进</Button>
            </td>
          </tr>

        </tbody>
      </table>
      <div>
        <div v-if="datas.length ==0" style="text-align:center;padding:10px">
           <Icon type="ios-information-outline" style="font-size:2em"></Icon>
           <h3>没有找到</h3>
        </div>
      </div>
        <div style="padding:0 0 200px 0">
          <Page class="cf pages" :current="current" :total="totals" :page-size="pageSize"  @on-change="changepage" show-total show-elevator></Page>
        </div>
      <Spin size="large" fix v-if="spinShow"></Spin>
      <!-- se -->
    </Card>

        <!-- tablese -->

   </div>
</template>

<!-- 价格 -->
<!-- 网点ID -->
<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'shared',
      data () {
          return {
             totals:0,
             totals2:0,
             totals3:0,
             pageSize:0,
             current:1,
             sesongs:'请搜索楼盘',
             screense:false,// true 有搜索条件 false 无搜索条件
             region:[],
             metros:[],
             metross:[],
             cityList:[],
             optionsName:[],
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
                 //搜索
             },
             datas:[],
             spinShow:true,
             spinShowPoptipsr:true,
             spinShowPoptipsrdata:[]
          }
        },
        mounted(){
            this.datie();
            this.quyu();
            this.ajaxName();//大楼名字
            this.adminname();//大楼名字
            this.datiename();//大楼名字
            

            if (Cookies.getJSON('screense33') ==0 || Cookies.getJSON('screense33') == undefined ) {
                this.buildingls(1);//表
                console.log('no')
          }else{
             let se = Cookies.getJSON('screense33')
             let page = Cookies.getJSON('page33')
              console.log('yes')
             this.sesongs = se.name
             this.screens.timese = se.timese
             this.screens.brands = se.brands
             this.screens.regions = se.regions
             this.screens.metro = se.metro
             this.screens.ascription = se.ascription
             this.screens.rentmin = se.rentmin
             this.screens.rentmax = se.rentmax
             this.screens.id = se.id
             this.screens.grade = se.grade

             if (page == undefined) {
               this.current = 1
               this.buildinglser(1)
               console.log(page)
             }else{
               this.current = Number(page)
               this.buildinglser(page); //类表
               console.log(page)
             }
             
             
          }

        },
        methods:{
           changegong(e){
            let query = { id: e};
              this.$router.push({
               name: 'shared_addg',
               query: query
              });
            },
          datiename(){
            let _this = this;
            axios({
                method:'post',
                url:'/api/sharename',
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              let data = res.data.message;
              let metros = [];
                for (var i in data) {
                    let nea = {
                       value: data[i],
                       label: data[i]
                      }
                  metros.push(nea)
               }
               _this.metross = metros
            })
            .catch(function (err) {
                _this.$Notice.error({title: '品牌名字错误'});
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
         adminname(){
          let _this = this;
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
          buildingls(e){
            let _this = this;
             _this.spinShow = true;
            axios({
                method:'post',
                url:'/api/sharelist?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              // 2w 3g
              _this.totals = res.data.message.totals; //列表数据
              _this.totals2 = res.data.message.totals2; //列表数据
              _this.totals3 = res.data.message.totals3; //列表数据
              _this.pageSize = res.data.message.pageSize; //每页显示
              _this.datas = res.data.message.data;
              _this.spinShow = false;
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
                url:'/api/sharelist?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                data:{
                  jo:_this.screens
                }
             })
            .then(function (res) {
              _this.totals = res.data.message.totals; //列表数据
              _this.totals2 = res.data.message.totals2; //列表数据
              _this.totals3 = res.data.message.totals3; //列表数据
              _this.pageSize = res.data.message.pageSize; //每页显示
              _this.datas = res.data.message.data;
              _this.spinShow = false;
            })
            .catch(function (err) {
                _this.$Notice.error({title: '类表错误'});
            })
          },
           buildinglser(e){
            let _this = this;
             _this.spinShow = true;
            axios({
                method:'post',
                url:'/api/sharelist?page='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
                data:{
                  jo:Cookies.getJSON('screense33')
                }
             })
            .then(function (res) {
              _this.totals = res.data.message.totals; //列表数据
              _this.totals2 = res.data.message.totals2; //列表数据
              _this.totals3 = res.data.message.totals3; //列表数据
              _this.pageSize = res.data.message.pageSize; //每页显示
              _this.datas = res.data.message.data;
              _this.spinShow = false;
            })
            .catch(function (err) {
                _this.$Notice.error({title: '类表错误'});
            })
          },
          screenss(){
              this.spinShow = true;
              this.screense = true; //有搜索条件
              this.buildinglse(1);
              Cookies.set('screense33', this.screens); //权限
              Cookies.set('page33', 1)
              this.current = 1
            },
          reson(){
              this.spinShow = true;
              this.screense = false; //wu搜索条件
              this.screens = {};
              this.buildingls(1)
              Cookies.set('screense33', 0);
              this.sesongs = '请搜索楼盘' 
              Cookies.set('page33', 1)
              this.current = 1
          },
          changepage(page) {
            var ele = document.getElementById('singlepagecon');
              ele.scrollTop = 0;
              //翻页
              Cookies.set('screense33', this.screens); //权限
              this.spinShow = true;
              Cookies.set('page33', page); //权限
              if(this.screense) {
                this.buildinglse(page)
              }else{
                this.buildingls(page); //无
              }
            },
         addLOUPan(){
           this.$router.push({
             name: 'shared_add'
            });
         },
         sharedaddst(e){
          let query = {id: e};
           this.$router.push({
             name: 'sharedadd_st',
             query:query
            });
         },
         lookgong(e,a,q){
           let query = {id: e,ofid:a,uniqidof:q};
           this.$router.push({
             name: 'shared_look',
             query:query
            });
         },
         Poptipsr(e,a){
          this.spinShowPoptipsr = true
          this.spinShowPoptipsrdata = []
           if (a == 0) {
            this.spinShowPoptipsr = false
           }else{
             let _this = this;
              axios({
                method:'post',
                url:'/api/sharelistact?sh2id='+e,
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
                _this.spinShowPoptipsrdata = res.data.message
                _this.spinShowPoptipsr = false
            })
            .catch(function (err) {
                _this.$Notice.error({title: '工位错误'});
            })

           }
         }

      }
};
</script>

