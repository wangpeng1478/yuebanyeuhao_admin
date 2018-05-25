
<style lang="less">
 .directorylook{
  .apis{
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
      table {
    font-family: Consolas,Menlo,Courier,monospace;
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
    width: 100%;
    margin-bottom: 24px;
    th{
      border: 1px solid #e9e9e9;
    padding: 8px 16px;
    text-align: left;
        background: #f7f7f7;
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 600;
        width: 30%;
    }
    td{
      border: 1px solid #e9e9e9;
    padding: 8px 16px;
    text-align: left;
    }
}
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
  .directorylook .mingCard{
    width:48%;
    display:inline-block;
    margin:1%;
  }
}

</style>

<template>
   <div class="directorylook cf">
    <pre>{{id}}</pre>
    <pre>{{datas}}</pre>
       <Row>
         <Col :xs="24" :sm="24" :md="8" :lg="6" style="padding:5px">
             <Card style="margin-bottom: 10px;max-height:600px;overflow:auto">
                    <p slot="title">
                        <Icon type="person"></Icon>
                        信息
                    </p>
                    <!-- tba -->
                   <div class="apis">
                     <table>
                       <tbody>
                       <tr>
                           <th>手机号</th>
                           <td><code>{{consts.phone}}</code></td>
                         </tr>
                         <tr>
                           <th>来源</th>
                           <td>{{consts.quarry}}</td>
                         </tr>
                         <tr>
                           <th>预约时间</th>
                           <td>{{consts.time}}</td>
                         </tr>
                         <tr>
                           <th>楼盘</th>
                           <td>{{consts.lou}}</td>
                         </tr>
                          <tr>
                           <th>房源</th>
                           <td>{{consts.fang}}</td>
                         </tr>
                         <tr>
                           <th>最新跟进</th>
                           <td>{{consts.minute}}</td>
                         </tr>
                          <tr>
                           <th>跟进人</th>
                           <td>{{consts.minuter}}</td>
                         </tr>
                         <tr>
                           <th>状态</th>
                           <td>{{consts.estate}}</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                    <!-- tba -->
                         
                </Card>


         </Col>
         <Col :xs="24" :sm="24" :md="16" :lg="18" style="padding:5px">
             <Card style="margin-bottom: 10px;">
                   <p slot="title">
                      <Icon type="ios-keypad-outline"></Icon>
                      操作日志
                   </p>
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
                      跟进
                   </p>
                <Form ref="followUp" :model="followUp" :label-width="80" :rules="ruleInline">
                      <FormItem label="跟进类型">
                           <RadioGroup v-model="followUp.status" type="button">
                              <Radio label="跟进中">跟进中</Radio>
                              <Radio label="已结束">已结束</Radio>
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
   </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
    name: 'directorylook',
      data () {
          return {
              id:'',
              handleSubloing:false, //加载
              Timeline:[],//时间轴
              datas:{}, //编辑
              manData:[],
               plus:'',
              reduce:'',
              followUp:{
                status:'跟进中', //私有跟进
                con:''
             },
             consts:{
                phone:'phone',
                quarry:"来源",
                time:"预约时间",
                lou:"楼盘",
                fang:"房源",
                minute:"最新跟进",
                minuter:"跟进人",
                estate:"状态",
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
           // this.recording(this.id); //data
        },
        methods:{
           recording(e){
             let _this = this;
              axios({
                  method:'post',
                  url:'/api/entego1?qyid='+e,
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function (res) {
                 // _this.Timeline = res.data.message.hist
                 // _this.consts = 
                 // setTimeout(function() {
                 //   $(".mains .year .list").each(function(e, target) {
                 //    var $target = $(target),
                 //    $ul = $target.find("ul");
                 //    // console.log($ul.outerHeight())
                 //     $target.height($ul.outerHeight()), $ul.css("position", "absolute");
                 //    });
                 //    $(".mains .year>h2>a").click(function(e) {
                 //      e.preventDefault();
                 //      $(this).parents(".year").toggleClass("close");
                 //    });
                 // })
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
                          url:'/api/entego2?qyid='+_this.id,
                          headers:{Authorization:'Bearer '+Cookies.set('keya')},
                          data:{
                            jo:_this.followUp
                          }
                       })
                      .then(function (res) {
                         
                      })
                      .catch(function (err) {
                         _this.handleSubloing = false;
                         _this.$Notice.error({title: '跟进错误'});
                      })

                    }
                })
            }
        }
}
</script>

