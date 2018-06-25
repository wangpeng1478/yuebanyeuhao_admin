
<style lang="less">
 .housefollow{
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
    min-width:1200px;
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
 }
 @media (max-width: 992px){
  .mingCards{
    width:46% !important;
    margin:2% !important;
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
   <div class="housefollow cf">
   <pre>{{id}}</pre>
   <pre>{{Timeline}}</pre>
   <pre>{{followUp}}</pre>
   <pre>{{plus}} - {{reduce}}</pre>
     <Row v-if="!modal2r">
        <Col :xs="24" :sm="24" :md="8" :lg="6" style="padding:5px">
           <Card style="margin-bottom: 10px;max-height: 500px;overflow: auto;">
              <p slot="title">
                 <Icon type="person-stalker"></Icon>
                  联系方式
              </p>
             <a href="#" slot="extra" @click.prevent="clickMaid('')">
                <Icon type="plus-round"></Icon>
                添加联系人
             </a>
              <!-- 联系人 -->
              <div v-if="jaizailock">
          <Card v-for="(item, index) in manData" :key="item.length" class="mingCard mingCards">
            <Button class="editCard" type="error" size="small" @click="clickMaid(item.maid)">编辑</Button>
            <p><Icon type="person"></Icon> 姓名: {{item.name}}</p>
            <p><Icon type="ios-albums-outline"></Icon> 类别: {{item.moldx2}}</p>
            <p><Icon type="person-stalker"></Icon> 性别: {{item.gend}}</p>
           <div v-if='lookCard || toogless == index'>
            <div v-for="n in item.man2" :key="n.length">
              <p v-if="n.moldx == '公司名称'"><Icon type="ios-home-outline"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '手机'"><Icon type="iphone"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '固话'"><Icon type="ios-telephone"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '名片正'"><Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
              <p v-if="n.moldx == '名片反'"><Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
            </div>
          </div>
           <div v-else>
              <Button type="primary" size="small" @click="clickMaids(item.maid,index)">申请查看</Button>
            </div>
          </Card>

           <Modal
          v-model="clickCards">
          <img :src="clickCardsimg" style="width:500px;">
         </Modal>
      <Modal
        v-model="loocModel"
        title="填写理由">
        <Input v-model="loocModelvui" type="textarea" placeholder="填写理由..."></Input>
         <div slot="footer">
           <Button :loading="loadingLook"  @click="footerYes" type="primary">
                <span v-if="!loadingLook">发送</span>
                <span v-else>发送中...</span>
           </Button>
           <Button  @click="footerNo" type="text">取消</Button>
         </div>
      </Modal>
      </div>
      <div v-else>加载中...</div>
              <!-- 联系人 -->
          </Card>

          <Card style="margin-bottom: 10px;max-height: 500px;overflow: auto;">
               <p slot="title">
                  <Icon type="ios-settings-strong"></Icon>
                  业主更多房源
              </p>

            <Card class="mingCard mingCards" v-for="(n, index) in Morelistings" :key="n.length">
               <Button class="editCard" type="primary" size="small" @click="lookfang(n.id)">查看</Button>
               <p><Icon type="grid"></Icon>  楼盘名称: {{n.name}}</p>
               <p><Icon type="ios-home"></Icon>  门牌号: {{n.men}}</p>
            </Card>

          </Card>

          <Card style="margin-bottom: 10px;max-height: 500px;overflow: auto;">
              <p slot="title">
                 <Icon type="person-stalker"></Icon>
                  楼盘联系方式
              </p>
              <!-- 联系人 -->
              <div v-if="jaizailock">
          <Card v-for="(item, index) in louman" :key="item.length" class="mingCard mingCards">
            <!-- <Button class="editCard" type="error" size="small" @click="clickMaid(item.maid)">编辑</Button> -->
            <p><Icon type="person"></Icon> 姓名: {{item.name}}</p>
            <p><Icon type="ios-albums-outline"></Icon> 类别: {{item.moldx2}}</p>
            <p><Icon type="person-stalker"></Icon> 性别: {{item.gend}}</p>
           <div v-if='lookCard || toogless == index'>
            <div v-for="n in item.man2" :key="n.length">
              <p v-if="n.moldx == '公司名称'"><Icon type="ios-home-outline"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '手机'"><Icon type="iphone"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '固话'"><Icon type="ios-telephone"></Icon> {{n.moldx}}: {{n.subs}}</p>
              <p v-if="n.moldx == '名片正'"><Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
              <p v-if="n.moldx == '名片反'"><Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
            </div>
          </div>
           <div v-else>
              <Button type="primary" size="small" @click="clickMaids(item.maid,index)">申请查看</Button>
            </div>
          </Card>

           <Modal
          v-model="clickCards">
          <img :src="clickCardsimg" style="width:500px;">
         </Modal>
      <Modal
        v-model="loocModel"
        title="填写理由">
        <Input v-model="loocModelvui" type="textarea" placeholder="填写理由..."></Input>
         <div slot="footer">
           <Button :loading="loadingLook"  @click="footerYes" type="primary">
                <span v-if="!loadingLook">发送</span>
                <span v-else>发送中...</span>
           </Button>
           <Button  @click="footerNo" type="text">取消</Button>
         </div>
      </Modal>
      </div>
      <div v-else>加载中...</div>
              <!-- 联系人 -->
          </Card>

        </Col>
        <Col :xs="24" :sm="24" :md="16" :lg="18" style="padding:5px">
            <Card style="margin-bottom: 10px;">
               <p slot="title">
                  <Icon type="stats-bars"></Icon>
                  最新跟进:({{master}}){{uptime}}
              </p>
               <div class="ovhide">
               <table class="tables">
               <tbody>
                 <tr>
                  <th>楼盘名称</th>
                  <th>门牌号</th>
                  <th>面积</th>
                  <th>租售价格</th>
                  <th>付款方式</th>
                  <th>装修</th>
                  <th>业主类型</th>
                 </tr>
                 <tr>
                  <td>{{house.name}}</td>
                  <td>
                   <Poptip trigger="hover" title="单元号">
                      <div style="width: 80px;
                          overflow: hidden;
                          white-space: nowrap;
                          text-overflow: ellipsis;">
                        <span v-for="(n, index) in house.Addconditions" :key="n.length">{{n.room}} </span>
                      </div>
                     <div class="api" slot="content">
                       <p v-for="(n, index) in house.Addconditions" :key="n.length">{{n.room}}</p>
                    </div>
                   </Poptip>
                   
                  </td>
                  <td>{{house.area2}}m²</td>
                  <td>
                   <p>{{house.money3}}元/m²*天(租)</p>
                   <p v-if="house.Forsale2 !== null">{{house.Forsale2}}元(售)</p>
                  </td>
                  <td>押{{house.deposit}}付{{house.deposit2}}</td>
                  <td>{{house.fitment}}</td>
                  <td>
                  <p>{{identity1}}</p>
                  <p>{{identity2}}</p>
                  </td>
                 </tr>
               </tbody>
               </table>
              </div>
              <!-- shu -->
              <!-- shu -->
           </Card>
           <Card style="margin-bottom: 10px;">
             <p slot="title">
                  <Icon type="ios-keypad-outline"></Icon>
                  跟进记录
              </p>
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
           </Card>
             <Card style="margin-bottom: 10px;padding-bottom:100px;">
                <p slot="title">
                    <Icon type="ios-list-outline"></Icon>
                    房源跟进
                </p>
                 <Form ref="followUp" :model="followUp" :label-width="80" :rules="ruleInline">
                      <FormItem label="房源状态">
                           <RadioGroup v-model="followUp.status" type="button" @on-change="timeseraio">
                                <Radio label="待定"></Radio>
                                <Radio label="有效"></Radio>
                                <Radio label="已租"></Radio>
                                <Radio label="已售"></Radio>
                                <Radio label="无效"></Radio>
                                <Radio label="我租"></Radio>
                            </RadioGroup>
                      </FormItem>
                       <FormItem label="到期日期" v-if="timebuer">
                          <DatePicker v-model="followUp.time" type="date"></DatePicker>
                       </FormItem>
                       <FormItem label="是否上架">
                           <RadioGroup v-model="followUp.yesNo" type="button">
                                <Radio label="下架"></Radio>
                                <Radio label="上架"></Radio>
                            </RadioGroup>
                             <Tag type="dot" :color="imgyesNOs?'#F44336':'#999'" style="margin-left: 40px;">房源:{{imgyesNOs?'有图':'无图'}}</Tag>
                             <Tag type="dot" :color="imgyesNO?'#F44336':'#999'">楼盘:{{imgyesNO?'有图':'无图'}}</Tag>
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


    <Modal v-model="modal2r" width="400" :closable="false" :mask-closable="false">
        <p slot="header">
            <span>跟进提示</span>
        </p>
        <div>
            <Alert type="error" show-icon>
              您上次查看的房源:
              <span slot="desc">
                  {{popupdata.rema}}<br />
                  没有及时填写跟进，请先填写上次跟进
              </span>
           </Alert>
        </div>
        <div slot="footer" style="text-align:left">
            <Button type="error" @click="makeout(popupdata.roid)">点击填写</Button>
        </div>
    </Modal>

   </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'housefollow',
      data () {
          return {
             id:'',
             modal2r:false,
             timebuer:false,
             popupdata:{},
             roid:'',
             plus:'',
             reduce:'',
             manData:[],//l
             toogless:-1, //查看index
             indexMaid:-1, //记录查看index
             clickCards:false, //名片
             clickCardsimg:'', //名片
             loocModel:false,//理由
             loocModelvui:'', //理由
             loadingLook:false, //理由查看
             access:'',//权限
             lookCard:false,//查看联系人权限
             jaizailock:false,//查看联系人权限
            house:{},
            identity1:'',
            identity2:'',
            louman:[],
            Morelistings:[],
            Timeline:[],//时间轴
             followUp:{
              status:'待定',
              yesNo:'下架',
              con:''
             },
             ruleInline: {
                    con: [
                        { required: true, message: '跟进内容不能为空', trigger: 'blur' },
                        { type: 'string', max: 200, message: '跟进内容不能超过200字', trigger: 'blur' }
                    ]
                },
            uptime:'',
            master:'',
            imgyesNO:false, //大楼是否有图
            imgyesNOs:false, //房源是否有图
            handleSubloing:false, //加载
          }
        },
        mounted(){
            let _this = this;
            this.id = this.$route.query.deal_id; //id
            this.lookLian(); //权限
            this.nameC(this.id); //data
            this.recording(this.id); //data
        },
        methods:{
          timeseraio(valid){
             this.followUp.time = '';
             if (valid == '已租' || valid == '我租') {
               this.timebuer = true
             }else{
               this.timebuer = false
             }
          },
          recording(e){
             let _this = this;
              _this.jaizailock = false
              axios({
                  method:'post',
                  url:'/api/foup2?id='+e,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function(res){
                // console.log(res.data.message.popup.date)
                // console.log(res.data.message.popup.power)
                _this.modal2r = res.data.message.popup.power
                _this.popupdata = res.data.message.popup.date
                 _this.plus = res.data.message.plus
                 _this.reduce = res.data.message.reduce
                 _this.louman = res.data.message.louman
                 _this.followUp.status = res.data.message.progr
                 // res.data.message.progr
                 if (res.data.message.progr == '已租' || res.data.message.progr == '我租') {
                   _this.timebuer = true
                 }else{
                   _this.timebuer = false
                 }
                 _this.followUp.yesNo = res.data.message.hidex
                 _this.imgyesNO = res.data.message.imgyesNO
                 _this.uptime = res.data.message.uptime;
                 _this.master = res.data.message.master;
                 _this.Morelistings = res.data.message.Morelistings;
                 _this.jaizailock = true
                 _this.Timeline = res.data.message.hist
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
          nameC(e){
          //id编辑默认
          let _this = this;
           _this.jaizailock = false
          axios({
              method:'post',
              url:'/api/fangup1?id='+e,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
             // console.log(res)
             if (res.data.message.img.length == 0) {
              _this.imgyesNOs = false
             }else{
              _this.imgyesNOs = true
             }

             _this.identity1 = res.data.message.name.identity[0]
             _this.identity2 = res.data.message.name.identity[1]
             _this.house = res.data.message.name;
             _this.manData = res.data.message.man;
             _this.roid = res.data.message.name.roid
             _this.jaizailock = true
          })
          .catch(function (err) {
              _this.$Notice.error({title: '大楼参数错误'});
          })
        },
          lookLian(){
          let _this = this;
          axios({
                method: 'post',
                url: '/api/power',
                headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
            })
            .then(function(res) {
                Cookies.set('auth', res.data.power); //权限
                _this.access = res.data.power;
                _this.lookCard = res.data.power.lou06
            })
            .catch(function(err) {
                _this.$Notice.error({ title: '权限获取错误' });
            })
          },
            clickMaid(e){
            //联系人添加编辑
            // console.log(e)
            let query = { 
              deal_id: e,
              ofid: this.roid,
              eq:0
            };
            let querys = { 
              ofid: this.roid,
              eq:1
            };
            if (e == ''){
                this.$router.push({
                 name: 'hou_setas',
                 query: querys
                });
            }else{
                this.$router.push({
                 name: 'hou_setas',
                 query: query
                });
            }  
          },
          clickCard(e){
            // 名片查看
            this.clickCardsimg = e;
            this.clickCards = true;
          },
           clickMaids(e,a){
            //申请查看
            let _this = this;
            _this.indexMaid = a;
            _this.miids = e;
            axios({
              method:'post',
              url:'/api/manlook1',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                maid:e,
                roid:_this.id
              }
           })
            .then(function (res){
              // console.log(res.data)
              if (res.data.statusx == 202) {
                _this.loocModel = true
              }else if(res.data.statusx == 200){
                _this.toogless = a;
              }
            })
            .catch(function (err) {
              _this.$Notice.error({title: '查看失败'});
            })
          },

           footerYes(){
            //请填写理由理由
            let _this = this;
            if (_this.loocModelvui == '') {
              _this.$Message.info('请填写理由');
            }else{
              axios({
              method:'post',
              url:'/api/manlook2',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                maid:_this.id,  //id
                rema:_this.loocModelvui //理由
              }
           })
            .then(function (res){
              // console.log(res)
                _this.loocModelvui = '';
                _this.$Message.info('申请成功');
                _this.toogless = _this.indexMaid;
                _this.loocModel = false
            })
            .catch(function (err) {
              _this.$Notice.error({title: '理由失败'});
            })

            }
          },
           footerNo(){
            //请填写理由理由 取消
            let _this = this;
              _this.loocModelvui = ''
              _this.loocModel = false
          },
          handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                      let _this = this;
                      _this.handleSubloing = true;
                       axios({
                          method:'post',
                          url:'/api/foup1?id='+_this.id,
                          headers:{Authorization:'Bearer '+Cookies.set('keya')},
                          data:{
                            rema:_this.followUp
                          }
                       })
                      .then(function (res) {
                       if (res.data.statusx == 200) {
                          _this.nameC(_this.id); //data
                          _this.recording(_this.id); //data
                          _this.followUp.con = '';
                          _this.followUp.time = '';
                          _this.handleSubloing = false;
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
            lookfang(e){
              let query = { deal_id: e};
                  this.$router.push({
                   name: 'house_look',
                   query: query
                  });
            },
            tiaozs(e){
              if (e == 0) {
                if (this.reduce !== null) {
                  this.nameC(this.reduce); //data
                  this.recording(this.reduce); //data
                  this.id = this.reduce
                }
                 
              }else if (e == 1) {
                if (this.plus !== null) {
                  this.nameC(this.plus); //data
                  this.recording(this.plus); //data
                  this.id = this.plus
               }
              }
            },
            makeout(e){
               // console.log(e)
               this.nameC(e); //data
               this.recording(e); //data
               this.id = e
            }

        }
};



</script>

