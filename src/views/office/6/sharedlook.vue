
<style lang="less">
 .sharedlook{
  background:#fff;
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
      padding: 6px;
      font-size: 12px;
      font-weight: 800;
      color:#495060;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      line-height: 20px;
      word-break: break-all;
      text-align: center ;
      background-color: #f0f0f0;
       overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    td{
      padding: 7px;
      font-size: 13px;
      font-weight: 100;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      text-align: center;
      line-height: 20px;
      word-break: break-all;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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

 @media (max-width: 992px){
  .sharedlook .mingCard{
    width:48%;
    display:inline-block;
    margin:1%;
  }
}

</style>

<template>
   <div class="sharedlook cf">
    <pre>{{id}} {{ofid}}</pre>
    <pre>{{data3}}</pre>
    <!-- <pre>{{access}}</pre> -->
       <Row v-if="lce">
         <Col :xs="24" :sm="24" :md="8" :lg="6" style="padding:5px">

             <Card style="margin-bottom: 10px;max-height:600px;overflow:auto">
                   <p slot="title">
        <Icon type="navicon"></Icon>
       联系人
    </p>
     <a href="#" slot="extra" @click.prevent="clickMaid('')">
            <Icon type="plus-round"></Icon>
            添加联系人
         </a>
    <Card v-for="(item, index) in manData" :key="item.length" class="mingCard">
    <Button class="editCard" type="error" size="small" @click="clickMaid(item.maid)">编辑</Button>
        <p>
            <Icon type="person"></Icon> 姓名: {{item.name}}</p>
        <p>
            <Icon type="ios-albums-outline"></Icon> 类别: {{item.moldx2}}</p>
        <p>
            <Icon type="person-stalker"></Icon> 性别: {{item.gend}}</p>
        <div v-if='lookCard || toogless == index'>
            <div v-for="n in item.man2" :key="n.length">
                <p v-if="n.moldx == '公司名称'">
                    <Icon type="ios-home-outline"></Icon> {{n.moldx}}: {{n.subs}}</p>
                <p v-if="n.moldx == '手机'">
                    <Icon type="iphone"></Icon> {{n.moldx}}: {{n.subs}}</p>
                <p v-if="n.moldx == '固话'">
                    <Icon type="ios-telephone"></Icon> {{n.moldx}}: {{n.subs}}</p>
                <p v-if="n.moldx == '名片正'">
                    <Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
                <p v-if="n.moldx == '名片反'">
                    <Icon type="card"></Icon> {{n.moldx}}: <a href="#" @click.prevent='clickCard(n.subs)'>点击查看</a></p>
            </div>
        </div>
        <div v-else>
            <Button type="primary" size="small" @click="clickMaids(item.maid,index)">申请查看</Button>
        </div>
    </Card>
    <div>
        <Modal v-model="clickCards">
            <img :src="clickCardsimg" style="width:500px;">
        </Modal>
        <Modal v-model="loocModel" title="填写理由">
            <Input v-model="loocModelvui" type="textarea" placeholder="填写理由..."></Input>
            <div slot="footer">
                <Button :loading="loadingLook" @click="footerYes" type="primary">
                    <span v-if="!loadingLook">发送</span>
                    <span v-else>发送中...</span>
                </Button>
                <Button @click="footerNo" type="text">取消</Button>
            </div>
        </Modal>
    </div>
                </Card>


         </Col>
         <Col :xs="24" :sm="24" :md="16" :lg="18" style="padding:5px">

         <Card style="margin-bottom: 10px;">
               <p slot="title">
                  <Icon type="stats-bars"></Icon>
                  楼盘:({{lou1.master}}) {{lou1.updated_at}}
              </p>
               <div class="ovhide">
               <table class="tables" style="table-layout: fixed;">
               <tbody>
                 <tr>
                  <th title="共享办公楼盘">共享办公楼盘</th>
                  <th title="所在楼层">所在楼层</th>
                  <th title="所属品牌">所属品牌</th>
                  <th title="品牌总机">品牌总机</th>
                  <th title="所在区域">所在区域</th>
                  <th title="地址">地址</th>
                  <th title="楼盘类型">楼盘类型</th>
                 </tr>
                 <tr>
                  <td>{{lou1.fname}}</td>
                  <td>{{lou1.floorx}}层</td>
                  <td>{{lou1.pname}}</td>
                  <td>{{lou1.boarx}}</td>
                  <td>{{lou1.region}}</td>
                  <td>{{lou1.address}}</td>
                  <td>{{lou1.spec}}</td>
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
                      操作日志
                   </p>
                   <!-- time -->
                   <div v-if="Timeline.length == 0 " style="text-align:center">没有跟进</div>
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
                      工位
                   </p>
                    <Table height="200" :columns="columns2" :data="data3" no-data-text="没有工位" no-filtered-data-text="没有找到工位"></Table>
              </Card>
             <Card style="margin-bottom: 10px;">
                   <p slot="title">
                     <Icon type="ios-list-outline"></Icon>
                      跟进
                   </p>
                <Form ref="followUp" :model="followUp" :label-width="80" :rules="ruleInline">
                      <FormItem label="跟进类型">
                           <RadioGroup v-model="followUp.status" type="button">
                              <Radio label="有效">有效</Radio>
                              <Radio label="无效">无效</Radio>
                            </RadioGroup>
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
                 </Form>
             </Card>
         </Col>
       </Row>
       <Card v-else>加载中...</Card>
   </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
    name: 'sharedlook',
      data () {
          return {
              id:'',
              lce:false,
              ofid:'',
              uniqidof:'',
              sh3id:'',
              access:{},
              lou1:{},
              handleSubloing:false, //加载
              Timeline:[],//时间轴
              datas:{}, //编辑
              manData:[],
              followUp:{
                status:'有效', //私有跟进
                con:''
             },
              ruleInline: {
                    con: [
                        { required: true, message: '跟进内容不能为空', trigger: 'blur' },
                        { type: 'string', max: 200, message: '跟进内容不能超过200字', trigger: 'blur' }
                    ]
             },
            dataimg:'',//img
            houseadd:'',//data
            lookCard:false, //查看权限
            toogless:-1, //查看index
            indexMaid:-1, //记录查看index
            loocModel:false,
            loocModelvui:'', //理由
            loadingLook:false,
            miids:'', //记录查看ID
            clickCardsimg:'',
            clickses:false,
            clickCards:false,
            columns2: [
                    {
                        title: 'ID',
                        key: 'sh3id',
                        width: 80,
                    },
                    {
                        title: '工位类型',
                        key: 'typex'
                    },
                    {
                        title: '单价',
                        key: 'money1',
                        render: (h, params) => {
                           const row = params.row;
                            return h('div', [
                                h('code', {
                                }, row.money1),
                                 h('span', {
                                }, '元/工位/月' )
                            ]);
                         }
                    },
                    {
                        title: '付款方式',
                        key: 'deposit'
                    },
                    {
                        title: '最短租期',
                        key: 'miniterm',
                         render: (h, params) => {
                           const row = params.row;
                            return h('div', [
                                h('code', {
                                }, row.miniterm),
                                 h('span', {
                                }, '月' )
                            ]);
                         }
                    },
                    {
                        title: '注册',
                        key: 'register'
                    },
                    {
                        title: '图片',
                        key: 'imgx1',
                        render: (h, params) => {
                           const row = params.row;
                           const color = row.imgx1 == "有图"?"primary":"ghost";
                            return h('div', [
                                  h('Button', {
                                    props: {
                                        type: color,
                                        size: 'small'
                                    }
                                 }, row.imgx1)
                            ]);
                         }
                    },
                    {
                        title: '操作',
                        key: 'hidex',
                         render: (h, params) => {
                            const row = params.row;
                            const text = row.hidex == '上架' ? true : false;
                            const disableds = row.imgx1 !== "有图"? true : false;
                            return h('i-switch', {
                                props: {
                                    size: 'large',
                                    disabled:disableds,
                                    value: text
                                },
                                on: {
                                    'on-change': (value) => {
                                        this.sh3id = params.row.sh3id
                                        this.activating(value);
                                    }
                                }
                            }, [
                                h('span', {
                                    slot: 'open'
                                }, "上架"),
                                h('span', {
                                    slot: 'close'
                                }, "下架")
                            ]);
                        },

                    },
                    ],
            data3: []
          }
        },
        mounted(){
           this.id = this.$route.query.id; //id
           this.ofid = this.$route.query.ofid; //id
           this.uniqidof = this.$route.query.uniqidof; //id
           this.accesse();
           this.lsetdata(); //data
           this.recording(); //data
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
          lsetdata(){
            let _this = this;
            axios({
              method:'post',
              url:'/api/louup1?id='+_this.uniqidof,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
             })
              .then(function (res){
                _this.manData = res.data.message.man
              })
              .catch(function (err) {
                 _this.$Notice.error({title: '联系人失败'});
              })
          },
           recording(){
             let _this = this;
              _this.jaizailock = false
              _this.lce = false
              axios({
                  method:'post',
                  url:'/api/shgo1?sh2id='+_this.id,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function (res) {
                 // console.log(res.data.message.sh3)
                 _this.Timeline = res.data.message.hist
                 _this.lou1 = res.data.message.lou1
                 _this.data3 = res.data.message.sh3
                  _this.lce = true
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
          activating(e) {
            let _this = this;
            axios({
                    method: 'post',
                    url: '/api/shgo2act?sh3id=' + _this.sh3id,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                    data:{
                      hidex:e,
                      sh2id:_this.id
                    }
                })
                .then(function(res) {
                    if (e) {
                        _this.$Message.success('工位上架成功');
                    } else {
                        _this.$Message.success('工位下架成功');
                    }
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '激活错误' });
                })

        },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                      let _this = this;
                      _this.handleSubloing = true;

                       axios({
                          method:'post',
                          url:'/api/shgo2?sh2id='+_this.id,
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
                           _this.recording(); //data
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
            clickMaids(e,a){
            let _this = this;
            _this.indexMaid = a;
            _this.miids = e;
            // console.log(_this.indexMaid)
            axios({
              method:'post',
              url:'/api/manlook1?maid='+e,
              headers:{Authorization:'Bearer '+Cookies.set('keya')}
           })
            .then(function (res){
              // console.log(res)
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
            let _this = this;
            if (_this.loocModelvui == '') {
              _this.$Message.info('请填写理由');
            }else{
              axios({
              method:'post',
              url:'/api/manlook2',
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                maid:_this.miids,
                miids:_this.miids,  //id
                rema:_this.loocModelvui
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
           clickCard(e){
            this.clickCardsimg = e;
            this.clickCards = true;
          },
          footerNo(){
            let _this = this;
              _this.loocModelvui = ''
              _this.loocModel = false
          },
          clickMaid(e){
            //联系人添加编辑
            // console.log(e)
            let query = { 
              deal_id: e,
              ofid: this.ofid,
              eq:0
            };
            let querys = { 
              ofid: this.ofid,
              eq:1
            };
            if (e == ''){
                this.$router.push({
                 name: 'lou_contas',
                 query: querys
                });
            }else{
                this.$router.push({
                 name: 'lou_contas',
                 query: query
                });
            }  
          },
        }
}
</script>