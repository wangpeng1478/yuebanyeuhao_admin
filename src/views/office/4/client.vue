
<style lang="less">
 .client{
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
        margin-right: 10px;
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
   .ovhidese{
     overflow:auto;
     .tablese{
       min-width: 1300px;
     }
   }
   .Checkboxnava{
     padding: 5px;
     border: 1px solid #EEE;
     border-radius: 3px;
   }
   .Checkboxnavared{
    border: 1px solid #2d8cf0;
    color: #2d8cf0;
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
   .Selectt{
      max-width: 100px;
     .ivu-select-selection{
       border:none;
       background: #f0f0f0;
     }
     .ivu-select-placeholder{
      color:#495060;
      line-height: 25px !important;
     }
   }
   .dspodasd{
     display:inline-block;
     margin-left: 10px;
     vertical-align: top;
   }
 }


 // ********************************

.contents {
    position: relative;
    margin: 0 auto;
}

.contents {
    padding: 30px 0;
    width: 100%;
}

.contents .wrapper {
    position: relative;
    width: 890px;
    margin: 0 auto;
}

.contents .line-left {
    position: absolute;
    left: 0;
    top: 15px;
    width: 70px;
}

.contents .line-right {
    position: absolute;
    right: 0;
    top: 15px;
    width: 460px;
}

.contents .mains {
    background: url("http://47.98.155.165/image/vueAdmin/ico/line-bg.png") repeat-y 249px 0;
}

.contents .mains .title {
    position: absolute;
    line-height: 40px;
    padding-left: 67px;
    left: 230px;
    top: 0;
    color: #58a6fb;
    font-size: 24px;
    // background: url("http://47.98.155.165/image/vueAdmin/ico/clock.png") no-repeat left top;
}

.contents .mains .year {
    position: relative;
    z-index: 100;
    opacity:0.9;
}

.contents .mains .year h2 {
    height: 40px;
    width: 200px;
    padding-right: 30px;
    font-size: 24px;
    line-height: 40px;
    text-align: right;
}

.contents .mains .year h2 a {
    color: #58a6fb;
    &:hover{
      text-decoration:underline
    }
}

.contents .mains .year h2 i {
    display: block;
    position: relative;
    height: 0;
    width: 0;
    left: 190px;
    top: -20px;
    border-width: 6px;
    border-style: solid;
    border-color: #59a7fb transparent transparent transparent;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
    -webkit-transform-origin: 6px 3px;
    -moz-transform-origin: 6px 3px;
    -ms-transform-origin: 6px 3px;
    -o-transform-origin: 6px 3px;
    transform-origin: 6px 3px
}

.contents .mains .year .list {
    margin: 10px 0;
    position: relative;
    overflow: hidden;
    -webkit-transition: height 0.5s cubic-bezier(0.025, 0.025, 0.000, 1.115), opacity 0.5s;
    -moz-transition: height 0.5s cubic-bezier(0.025, 0.025, 0.000, 1.115), opacity 0.5s;
    -ms-transition: height 0.5s cubic-bezier(0.025, 0.025, 0.000, 1.115), opacity 0.5s;
    -o-transition: height 0.5s cubic-bezier(0.025, 0.025, 0.000, 1.115), opacity 0.5s;
    transition: height 0.5s cubic-bezier(0.025, 0.025, 0.000, 1.115), opacity 0.5s
}

.contents .mains .year .list ul {
    bottom: 0;
}

.contents .mains .year .list ul li {
    background: url("http://47.98.155.165/image/vueAdmin/ico/circle.png") no-repeat 235px 20px;
    padding: 15px 0;
    color: #4b4b4b;
    list-style-type: none;
}

.cls {
    zoom: 1;
}

.cls:after {
    contents: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.contents .mains .year .list ul li.highlight .date,
.contents .mains .year .list ul li.highlight .intro {
    color: #ec6a13;
}

.contents .mains .year .list ul li .date,
.contents .mains .year .list ul li .version {
    float: left;
    display: block;
    clear: left;
    width: 200px;
    line-height: 24px;
    text-align: right
}

.contents .mains .year .list ul li .date {
    font-size: 15px;
    line-height: 32px;
    color: #4b4b4b;
    margin-left: 10px;
}

.contents .mains .year .list ul li .intro,
.contents .mains .year .list ul li .more {
    float: left;
    display: block;
    width: 445px;
    margin-left: 85px;
    line-height: 24px;
    margin-top: 4px;
}

.contents .mains .year .list ul li .intro {
    font-size: 15px;
    line-height: 32px;
    color: #63d029;
}

.contents .wrapper .mains .year.close h2 i {
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg)
}

.contents .wrapper .mains .year.close .list {
    opacity: 0;
    height: 0!important;
}

.more smail {
    display: block;
    font-size: 14px;
    margin-bottom: 3px;
}

.contents ul {
    text-indent: 0 !important
}

</style>

<template>
   <div class="client cf">
    <pre>{{screens}}</pre>
       <Card class='sere'>
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
             客户列表
        </p>
       <Form :model="screens" :label-width="80">
         <Row>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="客户姓名">
                  <Input v-model="screens.name"></Input>
               </FormItem>
            </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="联系方式">
                  <Input v-model="screens.contact"></Input>
               </FormItem>
            </Col>
             <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="客户状态">
                   <Select v-model="screens.status">
                      <Option value="全部">全部</Option>
                      <Option value="有效">有效</Option>
                      <Option value="待确认">待确认</Option>
                      <Option value="已流失">已流失</Option>
                      <Option value="跳单">跳单</Option>
                      <Option value="我成交">我成交</Option>
                      <Option value="长期维护">长期维护</Option>
                  </Select>
               </FormItem>
            </Col>
              <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="客户公司">
                  <Input v-model="screens.gname"></Input>
               </FormItem>
              </Col>
               <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="客户行业">
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
              <FormItem label="跟进人">
                  <Cascader :data="followupdata" v-model="screens.followup"  change-on-select></Cascader>
              </FormItem>
          </Col>
          </Row>
          <Row>
         <Col :xs="24" :sm="12" :md="8" :lg="4">
               <FormItem label="需求面积">
                  <div class="input-group">
                    <input v-model="screens.minaji.min" type="text" maxlength="8">
                    <input v-model="screens.minaji.max" type="text" maxlength="8">
                    <span>m²</span>
                  </div>
               </FormItem>
              </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="需求价格">
              <div class="input-group">
                 <input v-model="screens.minar.min" type="text" maxlength="8">
                 <input v-model="screens.minar.max" type="text" maxlength="8">
                <span>元</span>
              </div>
              </FormItem>
          </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="录入时间">
                  <DatePicker type="daterange" v-model="screens.timese" :options="options2" style="width:100%" split-panels></DatePicker>
              </FormItem>
           </Col>
            <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="跟进时间">
                  <DatePicker type="daterange" v-model="screens.timese2" :options="options2" style="width:100%" split-panels></DatePicker>
              </FormItem>
           </Col>

            <Col :xs="24" :sm="12" :md="8" :lg="4" style="display: none;">
              <FormItem label="客户等级">
                    <RadioGroup v-model="screens.grade" type="button" size="small" style="width:153px;">
                        <Radio label="A">A级</Radio>
                        <Radio label="B">B级</Radio>
                        <Radio label="C">C级</Radio>
                    </RadioGroup>
              </FormItem>
          </Col>

          <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="原地址">
                   <Input v-model="screens.originalAddress"></Input>
              </FormItem>
          </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="ID">
                 <Input v-model="screens.id"></Input>
              </FormItem>
          </Col>
          </Row>
           <Row>
          <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="录入人">
                  <Cascader :data="followupdata" v-model="screens.luru"  change-on-select></Cascader>
              </FormItem>
          </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="客户介绍人">
                  <Input v-model="screens.jieshao"></Input>
              </FormItem>
          </Col>
           <Col :xs="24" :sm="12" :md="8" :lg="4">
              <FormItem label="来源">
                  <Cascader :data="Cascaderdata" v-model="screens.cascader"  change-on-select></Cascader>
              </FormItem>
          </Col>
        </Row>
        <Row>
           <Col :xs="24" :sm="24" :md="24" :lg="24" style="text-align:center">
             <Button @click="screenss" size="small" type="primary" icon="ios-search">查询</Button>
             <Button @click="reson" size="small"  type="ghost" icon="reply">重置</Button>
           </Col>
        </Row>
    </Form>
    </Card>
    <!-- nav -->
     <Card class='titims'>
        <div class="cf">
         <Button class="lesr" @click.prevent="addLOUPan" type="primary" shape="circle" icon="ios-plus-outline">添加客户</Button>
         <Select class="lesr" v-model="screens.sorting" style="width:200px;" @on-change="soose">
          <Option value="0">跟进时间排序<Icon type="arrow-down-c"></Icon></Option> <!-- 大小 -->
          <Option value="1">跟进时间排序<Icon type="arrow-up-c"></Icon></Option> 
          <Option value="2">录入时间排序<Icon type="arrow-down-c"></Icon></Option> <!-- 大小 -->
          <Option value="3">录入时间排序<Icon type="arrow-up-c"></Icon></Option>
        </Select>
         <Checkbox @on-change="soose" class="lesr Checkboxnava" :class='{Checkboxnavared:screens.single}' v-model="screens.single">我的合作客户</Checkbox>
         <div class="rigths">共有数据：<b>{{totals}}</b>条</div>
       </div>
    </Card>

    <Card class="cf" style="min-height: 500px;min-width:1100px;">
      <!-- se -->
      <table class="table table-border crm_t" style="table-layout: fixed;">
        <thead class="thead">
          <tr class="text-c lr_1">
            <th>客户信息</th>
            <!-- <th>客户等级</th> -->
            <th>需求面积</th>
            <th>价格区间</th>
            <th>意向信息</th>
            <th>
                  <Select v-model="screens.status" size="small" class="Selectt" placeholder="客户状态" @on-change="soose">
                      <Option value="全部">全部</Option>
                      <Option value="有效">有效</Option>
                      <Option value="待确认">待确认</Option>
                      <Option value="已流失">已流失</Option>
                      <Option value="跳单">跳单</Option>
                      <Option value="我成交">我成交</Option>
                      <Option value="长期维护">长期维护</Option>
                  </Select>
            </th>
            <th>跟进人</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody v-for="(n, index) in datas" :key="n.length">
          <tr class="fenge">
            <td colspan="7"></td>
          </tr>
          <tr class="lr_11 tr_bg">
            <td colspan="6">
              <div class="dspodasd"><strong class="strong_ddd">客户ID：{{n.id}}</strong></div>
              <div class="dspodasd"><span class="span_ddd">最新跟进：{{n.uptime1}}</span></div>
              <!-- <div class="dspodasd">
                 <Icon class="iosstar" type="ios-star" v-for="n in n.grade=='A'?3:n.grade=='B'?2:1" :key="n"></Icon>
              </div> -->
              <div class="dspodasd"><span class="span_ddd">录入时间：{{n.uptime2}}</span></div>
              <div class="dspodasd"><span class="span_ddd">录入人：{{n.luru}}</span></div>

              <div class="dspodasd"><span :title="n.cascader" class="span_ddd">来源：{{n.cascader}}</span></div>
              <div class="dspodasd"><span class="span_ddd">原地址：{{n.originalAddress}}</span></div>
            </td>
            <td class="text-c" style="text-align: center">
              <a @click.prevent="routerse1(n.id)" href="javascript:;">查看详情</a>
            </td>
          </tr>
          <tr class="lr_11 text-c paddse">
            <td>

            <Poptip placement="top" trigger="hover" :title="n.gname">
               <div style="cursor: pointer;">
                <p style="width:80%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;min-width: 100px;margin: 0 auto;">{{n.gname}}</p>
                <p v-for="e in n.name">{{e}}</p>
              </div>
                <div class="api" slot="content">
                  <p v-for="f in n.name">{{f}}</p>
                </div>
            </Poptip>
            </td>
            <!-- <td>{{n.grade}}级</td> -->
            <td>{{n.minaji}}m²</td>
            <td>{{n.minar}}/m²*天</td>
            <td>

             <p style="width:80%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;min-width: 100px;margin: 0 auto;" v-for="(s, index) in n.intention" :key="s.length">
                {{s.name}}
             </p>

            </td>
            <td>
            {{n.status}}
           <p>{{n.grade}}</p>
            </td>
            <td>{{n.followup}}</td>
            <td>
              <a @click.prevent="routerse2(n.id)" href="javascript:;">编辑</a>
              <a v-if="cust08" @click.prevent="accesseeq(n.followup,n.id)" href="javascript:;">分配客户</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
       <Modal
          v-model="modalaccesseeq"
          title="分配客户"
          width='670'
          :styles="{top: '10px'}">
          <!-- kehu -->
          <Transfer
            :data="data3"
            :target-keys="targetKeys3"
            :list-style="listStyle"
            :render-format="render3"
            :operations="['取消分配客户','分配客户']"
            :titles="['人员','客户合作人']"
            filterable
            @on-change="handleChange3">
        </Transfer>
        <Alert type="warning" show-icon closable style="margin: 10px 0 0 0;">选择人员后点击 “取消分配客户”或“分配客户”</Alert>
          <!-- kehu -->
              <div slot="footer">
                  <Button type="primary" @click="Modalok">确定</Button>
                  <Button type="dashed" @click="Modalno">取消</Button>
              </div>
       </Modal>

        <div v-if="datas.length ==0" style="text-align:center;padding:10px">
           <Icon type="ios-information-outline" style="font-size:2em"></Icon>
           <h3>没有找到客户</h3>
        </div>
      </div>
         <div style="padding:0 0 100px 0">
          <Page class="cf pages" :total="totals" :page-size="pageSize"  @on-change="changepage" show-total show-elevator></Page>
        </div>
      <Spin size="large" fix v-if="loadings"></Spin>
      <!-- se -->
    </Card>
    <!-- nav -->
   </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'client',
      data () {
          return {
            totals: 50, //总页数
            pageSize: 20, //每页显示
            loadings:true,
            screense:true,//条件
            cust08:false,//分配客户
            modalaccesseeq:false,//分配客户
            modalaccesseeqid:'',//分配客户id
            data3: [],
            targetKeys3: [],
            listStyle: {
                    width: '250px',
                    height: '300px'
                },
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
                followupdata: [{
                    value: '错误',
                    label: '错误'
                }],
                Cascaderdata: [
                {
                    value: '网络',
                    label: '网络',
                    children: [
                        {
                            value: '越办越好',
                            label: '越办越好'
                        },
                        {
                            value: '搜房',
                            label: '搜房'
                        },
                        {
                            value: '安居客',
                            label: '安居客'
                        },
                        {
                            value: '58同城',
                            label: '58同城'
                        }, 
                        {
                            value: '自定义',
                            label: '自定义'
                        },  
                    ]
                },
                {
                    value: '扫楼',
                    label: '扫楼',
                    children:[{
                      value: '扫楼',
                      label: '扫楼',
                    }]
                }, 
                {
                    value: '开发',
                    label: '开发',
                    children: [
                        {
                            value: '企业名录',
                            label: '企业名录'
                        },
                        {
                            value: '业主跟进',
                            label: '业主跟进'
                        },
                        {
                            value: '企查查/天眼查',
                            label: '企查查/天眼查'
                        },
                        {
                            value: '驻守',
                            label: '驻守'
                        },
                        {
                            value: '自定义',
                            label: '自定义'
                        },

                    ]
                }, 
                 {
                    value: '来访',
                    label: '来访',
                    children: [
                        {
                            value: '上门来访',
                            label: '上门来访'
                        },
                        {
                            value: '自定义',
                            label: '自定义'
                        },
                    ]
                }, 
                {
                    value: '介绍',
                    label: '介绍',
                    children: [
                        {
                            value: '朋友介绍显示',
                            label: '朋友介绍显示'
                        },
                        {
                            value: '朋友介绍隐藏',
                            label: '朋友介绍隐藏'
                        },
                    ]
                 }
                ],
              screens:{
                 name:'', //客户姓名
                 contact:'', //联系方式
                 status:'', //客户状态
                 gname:'', //客户公司
                 tradex:'', //客户行业
                 minaji:{
                  min:'',
                  max:''
                 }, //需求面积
                 minar:{
                  min:'',
                  max:''
                 }, //需求价格
                 grade:'',//客户等级
                 originalAddress:'',//原地址
                 timese:[], //时间
                 timese2:[], //时间
                 followup:[], //部门
                 id:'',
                 single: false, //我的合作
                 sorting:'0', //排序
                 luru:[], //录入
                 jieshao:'', //客户介绍人
                 cascader:[], //来源
              },
              datas:[
              // {
              //     id:12, //id
              //     uptime1:'2017-06-08 17:00:00', //最新跟进
              //     uptime2:'2017-06-08 17:00:00', //录入时间
              //     grade:'A', //客户等级
              //     originalAddress:'上海', //原地址
              //     cascader:'来源', //来源
              //     luru:'录入人', //录入人
              //     gname:'上海智哦熙信息技术有限公司', //客户公司
              //     name:["dasd",'asda'], //客户公司
              //     minaji:'1-5', //面积
              //     minar:'1-5', //面积
              //     intention:[{
              //       area:'浦东新区',
              //       subrange:'八佰伴',
              //       property:'江苏大厦',
              //       house:'14F-A1',
              //     }], //意向
              //     status:'状态', //客户状态
              //     followup:'跟进人', //跟进人
              // }
              ]
          }
        },
        mounted(){
           this.adminname(); //人员
           this.showHide(1); //table
           this.accesse(); //权限

           let _this = this;
               axios({
                method:'post',
                url:'/api/adminname',
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              let data = res.data.message;
              // _this.metrosda = data;
              let metros = [];
                for (var i in data) {
                    let nea = {
                       key: data[i],
                       label: data[i],
                       description: data[i],
                      }
                  metros.push(nea)
               }
               _this.data3 = metros;
            })
            .catch(function (err) {
                _this.$Notice.error({title: '人员错误'});
            })

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
                  _this.cust08 = res.data.power.cust08
              })
              .catch(function(err) {
                  _this.$Notice.error({ title: '权限获取错误' });
              })
         },
         accesseeq(e,b){
            let data = e.split(',')
            this.targetKeys3 = data
            this.modalaccesseeqid = b
            this.modalaccesseeq = true
         },
         Modalok(){
            let _this = this;
            _this.modalaccesseeq = false
         },
         Modalno(){
            let _this = this;
            _this.modalaccesseeq = false
         },
         addLOUPan(){
            this.$router.push({
               name: 'client_add'
            });
         },
         adminname(){
           let _this = this;
            axios({
                method:'post',
                url:'/api/adminname2',
                headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
            .then(function (res) {
              if (res.data.statusx == 200) {
               _this.followupdata = res.data.message
              }else{
                _this.$Notice.error({title: '人员错误'});
              }
            })
            .catch(function (err) {
                _this.$Notice.error({title: '人员错误'});
            })
         },
         showHide(e){
              var _this = this;
              _this.loadings = false;
              //房源默认没有条件
                 axios({
                  method:'post',
                  url:'/api/cluelist?page='+e,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function (res) {
                _this.loadings = false;
                // console.log(res.data.message.data)
                _this.datas = res.data.message.data; //列表数据
                _this.pageSize = res.data.message.pageSize; //每页显示
                _this.totals = res.data.message.totals; //总数
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '客户类表错误'});
              })
            },
            showHidese(e){
              var _this = this;
               _this.loadings = false;
              //   //房源有条件
                _this.loadings = true;
                 axios({
                  method:'post',
                  url:'/api/cluelist?page='+e,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
                   data:{
                    jo:_this.screens
                  }
               })
              .then(function (res) {
               _this.loadings = false;
                // console.log(res.data.message.data)
                _this.datas = res.data.message.data; //列表数据
                _this.pageSize = res.data.message.pageSize; //每页显示
                _this.totals = res.data.message.totals; //总数
              })
               .catch(function (err) {
                  _this.$Notice.error({title: '客户类表错误'});
               })
            },
         changepage(page) {
              //翻页
              var _this = this;
              _this.loadings = true;

              if(_this.screense){
                _this.showHidese(page);
              }else{
                _this.showHide(page);
              }
            },
            soose(){
              this.showHidese(1)
            },
            screenss(){
              let _this = this;
               _this.screense = true; //有搜索条件
               _this.loadings = true;
               //搜索
               _this.showHidese(1);
                // Cookies.set('screenss', true);
                // Cookies.set('screens', _this.screens);
            },
            reson(){
              //重置
              let _this = this;
              _this.screense = false; //无搜索条件
              _this.showHide(1);
              _this.screens ={
                name:'', //客户姓名
                 contact:'', //联系方式
                 status:'', //客户状态
                 gname:'', //客户公司
                 tradex:'', //客户行业
                 minaji:{
                  min:'',
                  max:''
                 }, //需求面积
                 minar:{
                  min:'',
                  max:''
                 }, //需求价格
                 grade:'',//客户等级
                 originalAddress:'',//原地址
                 timese:[], //时间
                 timese2:[], //时间
                 followup:[], //部门
                 id:'',
                 single: false, //我的合作
                 sorting:'0', //排序
                 luru:[], //录入
                 jieshao:'', //客户介绍人
                 cascader:[], //来源
              }
            },
            routerse1(e){
              let query = { deal_id: e};
                this.$router.push({
                 name: 'clientadd_look',
                 query: query
                });
            },
            routerse2(e){
              let query = { deal_id: e};
                this.$router.push({
                 name: 'clientadd_edit',
                 query: query
                });
            },
            handleChange3 (newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
                // console.log(newTargetKeys)
                let _this = this;
                    axios({
                      method:'post',
                      url:'/api/assign?id='+_this.modalaccesseeqid,
                      headers:{Authorization:'Bearer '+Cookies.set('keya')},
                      data:{jo:newTargetKeys}
                   })
                    .then(function (res){
                        if (res.data.statusx == 200){
                          _this.$Message.success('分配成功');
                           if(_this.screense){
                              _this.showHidese(1);
                            }else{
                              _this.showHide(1);
                            }
                            _this.modalaccesseeq = false
                        }else if(res.data.statusx == 202){
                          _this.$Notice.error({title: res.data.message});
                        }
                    })
                    .catch(function (err){
                        _this.$Notice.error({title: '分配失败'});
                    })

            },
            render3(item) {
                return item.label;
            }

        }
};
</script>

