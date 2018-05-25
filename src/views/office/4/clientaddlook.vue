
<style lang="less">
 .clientaddlook{
  .mingCard{
     width: 100%;
     display: inline-block;
     vertical-align: top;
     margin: 5px;
     p{margin-bottom:5px;}
     .ivu-icon{
      font-size: 15px;
      width: 15px;
     }
     .editCard{
      position:absolute;
      top:3px;
      right:3px;
     }
   }
   .ovhide{
     overflow:auto;
     margin-bottom:15px;
   }
   .tables{
    width:100%;
    margin:0 auto;
    empty-cells: show;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 4px;
    border: 1px solid #ddd;
    border-collapse: separate;
    border-left: 0;
    th{
      padding: 10px;
      font-size: 15px;
      font-weight: 100;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      line-height: 20px;
      word-break: break-all;
      text-align: center ;
      background-color: #f0f0f0;
    }
    td{
      padding: 10px;
      font-size: 15px;
      font-weight: 100;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      text-align: center;
      line-height: 20px;
      word-break: break-all;
    }
  }
  .genjinse{
    width:100%;
  }
  .Lead{
    ul{
      li{
        list-style: none;
        display:inline-block;
        box-sizing:border-box;
        width:49%;
        margin-bottom:10px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        span{
          display:inline-block;
          width:60px;
          text-align:right;
        }
      }
       p{
         span{
          display:inline-block;
          width:60px;
          text-align:right;
        }
        display:block;
        width:100%;
        margin-bottom:10px;
        word-wrap: break-word; 
        word-break: normal; 
      }
    }
  }
  .contactse{
     width:45%;
     display:inline-block;
     margin-bottom:10px;
     vertical-align:top;
     margin:1%;
     .lip{
       overflow:hidden;
       display:block;
       width:100%;
       margin-bottom:10px;
       word-wrap: break-word; 
       word-break: normal; 
     }
  }
  .hr{
    display: block;
    border-top: 1px dashed #7c7f84;
    margin: 10px 0;
  }
 }



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


 @media (max-width: 1200px){
  .clientaddlook .Lead ul li{
    width:100%;
  }
  .clientaddlook .contactse{
    width:100%;
  }
}
 @media (max-width: 992px){
  .clientaddlook .Lead ul li{
      width: 49%;
  }
  .clientaddlook .contactse{
      width: 45%;
  }
}

</style>

<template>
   <div class="clientaddlook cf">
    <pre>{{id}}</pre>
    <pre>{{datas}}</pre>
    <pre>{{plus}}</pre>
    <pre>{{reduce}}</pre>
       <Row>
         <Col :xs="24" :sm="24" :md="8" :lg="8" style="padding:5px">
              <Card style="margin-bottom: 10px;">
               <p slot="title">
                 <Icon type="person-stalker"></Icon>
                  客户档案
               </p>
                <a href="#" slot="extra" @click.prevent="Edit">
                 <Icon type="edit"></Icon>
                  编辑
               </a>
                <div class="Lead cf">
                  <ul>
                    <li><span>线索ID:</span>{{id}}</li>
                    <li><span>线索状态:{{progr}}</span></li>
                    <li><span>更新时间:{{uptime}}</span></li>
                    <li><span>归属人:{{master}}</span></li>
                    <li><span>跟进记录:{{count}}条</span></li>
                    <li><span>需求价格:</span>{{datas.minmo}}-{{datas.maxmo}}元/m²*天</li>
                    <li v-if="datas.gname !==''"><span>客户公司:</span>{{datas.gname}}</li>
                    <li><span>需求面积:</span>{{datas.minar}}-{{datas.maxar}}m²</li>
                    <li v-if="datas.scalex !==''"><span>公司规模:</span>{{datas.scalex}}</li>
                    <li v-if="datas.posx !==''"><span>工位数:</span>{{datas.posx}}个</li>
                    <li v-if="datas.tradex !==''"><span>所在行业:</span>{{datas.tradex}}</li>
                    <li v-if="datas.timey !==''"><span>用房时间:</span>{{datas.timey}}</li>
                    <li><span>客户等级:{{datas.grade}}级</span></li>
                    <li v-if="datas.OriginalAddress !=='请选择'"><span>原地址:</span>{{datas.OriginalAddress}}{{datas.OriginalAddress1}}{{datas.OriginalAddress2}}{{datas.OriginalAddress3}}{{datas.OriginalAddress4}}</li>
                    <li><span>用房原因:</span>{{datas.reasx}}</li>
                    <li v-if="datas.budgetx !==''"><span>总预算:</span>{{datas.budgetx}}元</li>
                    <p v-if="datas.remarksx !==''" class="li"><span>备注:</span>{{datas.remarksx}}</p>
                  </ul>
               <div class="hr"></div>
                  <Card v-for="(item, index) in datas.contact" :key="item.length" class="contactse">
                    <p class="lip">客户姓名:{{item.name}}({{item.sex}})</p>
                    <p class="lip">客户手机:{{item.phonenumber.name}}</p>
                    <p class="lip">客户座机:{{item.tel.name}}-{{item.tel.names}}</p>
                    <p class="lip">客户邮箱:{{item.mail.name}}</p>
                    <p class="lip">客户身份:{{item.Identity}}</p>
                  </Card>
                </div>
           </Card>

         </Col>
         <Col :xs="24" :sm="24" :md="16" :lg="16" style="padding:5px">
             <Card style="margin-bottom: 10px;">
                   <p slot="title">
                      <Icon type="ios-keypad-outline"></Icon>
                      操作日志
                   </p>
              <a href="#" slot="extra" @click.prevent="Edit">
                 <Icon type="edit"></Icon>
                  编辑
               </a>
                   <!-- time -->
            <div class="genjinse">
                <div class="contents">
                    <div class="wrapper">
                        <div class="mains">
                            <div class="year" v-for="(item, index) in Timeline" :key="item.length" :class="{ close: index!==0 }">
                                <h2><a href="javascript:;">{{item.month}}<i></i></a></h2>
                                <div class="list cinnhende">
                                    <ul class="uls">
                                        <li class="cls cf" v-for="(s, index) in item.content" :key="s.length">
                                            <p class="date">{{s.time}}</p>
                                            <div class="more">
                                                <p style="word-wrap:break-word">跟进类型：{{s.type}}</p>
                                                <p style="word-wrap:break-word">跟进内容：{{s.con}}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            <!-- time -->
             </Card>
             <Card style="margin-bottom: 10px;">
                   <p slot="title">
                     <Icon type="ios-list-outline"></Icon>
                      客户跟进
                   </p>
                <Form ref="followUp" :model="followUp" :label-width="80" :rules="ruleInline">
                      <FormItem label="客户状态">
                           <RadioGroup v-model="followUp.status" type="button">
                              <Radio label="有效">有效</Radio>
                              <Radio label="待确认">待确认</Radio>
                              <Radio label="已流失">已流失</Radio>
                              <Radio label="跳单">跳单</Radio>
                              <Radio label="我成交">我成交</Radio>
                              <Radio label="长期维护">长期维护</Radio>
                            </RadioGroup>
                      </FormItem>
                      <FormItem label="提醒">
                        <Alert show-icon style="max-width:500px;" v-if="followUp.status=='有效'">
                           有效(正在操作,需求明确),系统跳窗提醒,跟进时间为48
                           小时一次,若无跟进24小时后再次跳窗提醒,若当日24点前还是
                           无跟进将自动转为公客
                        </Alert>
                        <Alert show-icon style="max-width:500px;" v-if="followUp.status=='待确认'">
                           待确认(有需求,但不明确)一周跳窗提醒一次,若无跟进24
                           小时后再次跳窗提醒,若当日24点前还是无跟进将自动转为公客。
                        </Alert>
                         <Alert show-icon style="max-width:500px;" v-if="followUp.status=='已流失'">
                           已流失,六个月提醒一次,若无跟进24小时后再次跳窗提醒,
                           若当日24点前还是无跟进将自动转为公客。
                        </Alert>
                          <Alert show-icon style="max-width:500px;" v-if="followUp.status=='跳单'">
                          跳单:自动转为公客
                        </Alert>
                         <Alert show-icon style="max-width:500px;" v-if="followUp.status=='我成交'">
                          我成交,三个月一次跳窗提醒跟进。
                        </Alert>
                        <!--  <Alert show-icon style="max-width:500px;" v-if="followUp.status=='长期维护'">
                           长期维护
                        </Alert> -->
                      </FormItem>
                       <FormItem label="客户等级" v-if="followUp.status=='长期维护'">
                          <RadioGroup v-model="followUp.grade" type="button">
                              <Radio label="A">A级</Radio>
                              <Radio label="B">B级</Radio>
                              <Radio label="C">C级</Radio>
                          </RadioGroup>
                          <Alert style="margin:12px 0px 0 0" v-if="followUp.grade =='A' ">A:半年内有需求的客户,一个月提醒一次,若无跟进24小时后
                                  再次跳窗提醒,若当日24点前还是无跟进将自动转为公客。</Alert>
                          <Alert style="margin:12px 0px 0 0" v-if="followUp.grade =='B' ">B:一年内有需求的客户,三个月提醒一次,若无跟进24小时后
                                  再次跳窗提醒,若当日24点前还是无跟进将自动转为公客</Alert>
                          <Alert style="margin:12px 0px 0 0" v-if="followUp.grade =='C' ">C:二年内有需求的客户,六个月提醒一次,若无跟进24小时后
                                  再次跳窗提醒,若当日24点前还是无跟进将自动转为公客。</Alert>
                       </FormItem>
             
                       <FormItem label="跟进内容" prop="con">
                           <Input style="max-width:500px;" v-model="followUp.con" type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
                      </FormItem>
                       <FormItem>
                          <Button type="primary" @click="handleSubmit('followUp')" icon="ios-paperplane" :loading="handleSubloing">
                            <span v-if="!handleSubloing">提交</span>
                            <span v-else>提交中</span>
                          </Button>
                      </FormItem>
                       <FormItem>
                           <ButtonGroup shape="circle">
                              <Button @click="tiaozs(0)" type="ghost" icon="arrow-up-c">上个跟进</Button>
                              <Button @click="tiaozs(1)" type="ghost" icon="arrow-down-c">下个跟进</Button>
                          </ButtonGroup>
                      </FormItem>
                 </Form>
             </Card>
         </Col>
       </Row>
   </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
    name: 'floorss',
      data () {
          return {
              id:'',
              plus:'',
              reduce:'',
              handleSubloing:false, //加载
              Timeline:[],//时间轴
              datas:{}, //编辑
              followUp:{
                status:'有效',
                grade:'A',
                con:''
             },
              ruleInline: {
                    con: [
                        { required: true, message: '跟进内容不能为空', trigger: 'blur' },
                        { type: 'string', max: 200, message: '跟进内容不能超过200字', trigger: 'blur' }
                    ]
             },
             count:'',
             progr:'',
             master:'',
             uptime:'',
          }
        },
        mounted(){
           this.id = this.$route.query.deal_id; //id
           this.recording(this.id); //data
           this.recordings(this.id); //data
        },
        methods:{
           recordings(e){
             let _this = this;
              axios({
                  method:'post',
                  url:'/api/clueup1?id='+e,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function (res) {
                 // console.log(res.data.message)
                 _this.datas = res.data.message
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '编辑错误'});
              })
           },
           recording(e){
             let _this = this;
              _this.jaizailock = false
              axios({
                  method:'post',
                  url:'/api/cluego1?id='+e,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function (res) {
                 // console.log(res)
                 _this.plus = res.data.message.plus
                 _this.reduce = res.data.message.reduce
                 _this.Timeline = res.data.message.hist
                 _this.count = res.data.message.count
                 _this.progr = res.data.message.progr
                 _this.followUp.status = res.data.message.progr
                 _this.followUp.grade = res.data.message.gradex
                 _this.uptime = res.data.message.uptime
                 _this.master = res.data.message.master
                 setTimeout(function() {
                   $(".mains .year .list").each(function(e, target) {
                    var $target = $(target),
                    $ul = $target.find("ul");
                    // console.log($ul.outerHeight())
                     $target.height($ul.outerHeight()), $ul.css("position", "absolute");
                    });
                    $(".mains .year>h2>a").click(function(e) {
                      e.preventDefault();
                      $(this).parents(".year").toggleClass("close");
                    });
                 })
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '跟进错误'});
              })
          },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                      let _this = this;
                      _this.handleSubloing = true;

                       axios({
                          method:'post',
                          url:'/api/cluego2?id='+_this.id,
                          headers:{Authorization:'Bearer '+Cookies.set('keya')},
                          data:{
                            jo:_this.followUp
                          }
                       })
                      .then(function (res) {
                       if (res.data.statusx == 200) {
                         
                          _this.followUp.con = '';
                          _this.handleSubloing = false;
                          _this.$Message.success('跟进成功');
                          _this.recording(_this.id); //data
                         // _this.
                       }else{
                         _this.handleSubloing = false;
                        _this.$Notice.error({title: res.data.message});
                       } 
                      })
                      .catch(function (err) {
                         _this.handleSubloing = false;
                         _this.$Notice.error({title: '跟进错误'});
                      })

                    }
                })
            },
            Edit(){
              let query = { deal_id: this.id};
                this.$router.push({
                 name: 'clientadd_edit',
                 query: query
                });
            },
             tiaozs(e){
              if (e == 0) {
                if (this.reduce !== null) {
                   this.recording(this.reduce); //data
                   this.recordings(this.reduce); //data
                   this.id = this.reduce
                }
                 
              }else if (e == 1) {
                if (this.plus !== null) {
                   this.recording(this.plus); //data
                   this.recordings(this.plus); //data
                   this.id = this.plus
               }
              }
            }

        }
}
</script>

