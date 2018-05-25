<style lang="less">
.houselook{
  .spanLeft{
        float:left;
        font-weight: 100;
        cursor: pointer;
        &:hover{
          opacity: 0.7;
        }
      }
  .wa80{
    width:80%;
    margin: 0 auto;
    min-width: 800px;
  }
  .tables{
    width: 100%;
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
      width: 100px;
      text-align: center ;
      background-color: #f0f0f0;
    }
    td{
      padding: 10px;
      font-size: 15px;
      font-weight: 100;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      text-align: left;
      line-height: 20px;
      word-break: break-all;
    }
  }
  .mingCard{
    width:250px;
    display:inline-block;
    margin:5px;
    vertical-align:top;
    p{margin-bottom: 5px;}
  }
  .imglok{
    width:250px;
    display:inline-block;
    margin:5px;
    vertical-align:top;
    .ivu-card-head{
      padding:5px 10px;
    }
    .ivu-card-extra{
      top: 7px;
    }
    img{
      width:100%;
      height:auto;
    }
  }
  .yiyouCard{
       width: 210px;
       margin: 5px;
       background: #f5f8ff;
       display: inline-block;
       vertical-align: top;
       .ivu-card-head{
        padding:5px;
       }
       &:hover .extras{
        // display:block;
       }
      .ivu-tag{
        position:absolute;
        top:3px;
        right:0;
      }
      .extras{
        position:absolute;
        top:0px;
        right:8px;
        display:none;
      }
      .ivu-card-body{
        padding:5px;
        .p1,.p2{
        background: #fff;
        padding: 0 5px;
        margin: 5px 0;
        height: 28px;
        line-height:28px;
        font-size: 12px;
        border: 1px solid #e7edfd;
       }
       .p2{
        height:50px;
        overflow: auto;
        padding:5px;
        word-wrap:break-word;
        line-height: 1.3;
       }
      }
      
   }
}
</style>
<template>
<div class="houselook">
<pre>{{id}}{{houseadd}}</pre>
  <div class="cf">
      <Card>
        <p slot="title" style="text-align:center">
            <span @click='historys' class='spanLeft'> <Icon type="ios-arrow-left"></Icon> 返回</span>
              {{houseadd.name}}
        </p>
        <a href="#" slot="extra" @click.prevent="Edit(id)">
            <Icon type="edit"></Icon>
            编辑
        </a>
   <div class="wa80">
          <Card style='margin-bottom:15px;'>
          <p slot="title">
              <Icon type="navicon"></Icon>
               {{houseadd.name}}基本信息
          </p>
          <a href="#" slot="extra" @click.prevent="Edit(id)">
              <Icon type="edit"></Icon>
              编辑
          </a>
          <table class="tables">
            <tbody>
              <tr>
                <th>写字楼名称</th>
                <td colspan="5">{{houseadd.name}}</td>
              </tr>
              <tr>
                <th>门牌号</th>
                <td colspan="5">
                <Card class="yiyouCard" v-for="(n,index) in houseadd.Addconditions" :key='index'>
                   <p slot="title" style="font-weight: 100;color:#2c6df1">
                    {{n.room}}
                   </p>
                   <Input v-model="n.area" readonly size="small" placeholder="面积"><span slot="append">m²</span></Input>
                   <Input v-model="n.note" readonly size="small" type="textarea" placeholder="备注" style="margin-top:5px;"></Input>
                  </Card>
                </td>
              </tr>

              <tr>
                <th>总面积</th>
                <td>{{houseadd.area2}}m²</td>
                <th>使用率</th>
                <td>{{houseadd.availability}}%</td>
                <th>装修情况</th>
                <td>{{houseadd.fitment}}</td>
              </tr>

              <tr>
                <th>业主报价</th>
                <td>{{houseadd.money1}}元/m²·天</td>
                <th>预估成交价</th>
                <td>{{houseadd.money3}}元/m²·天</td>
                <th>按整套租金</th>
                <td>{{houseadd.money2}}元/月</td>
              </tr>

              <tr>
                <th>物业费用</th>
                <td>{{houseadd.property}}元/m²(单价) {{houseadd.propertyz}}元/月(总价)</td>
                <th>付款方式</th>
                <td>押{{houseadd.deposit}}付{{houseadd.deposit2}} </td>
                <th>免租期</th>
                <td>
                  <span v-if="houseadd.favourable !==''">{{houseadd.favourable}}天</span>
                  <span v-else>面议</span>
                </td>
              </tr>
              <tr>
                <th>最短租期</th>
                <td>
                <span v-if="houseadd.miniterm !== ''">{{houseadd.miniterm}}天</span>
                <span v-else>面议</span>               
                </td>
                 <th>是否可分割</th> 
                 <td>
                    <span v-if="!houseadd.availability2">不可分割</span>
                    <span v-else>可分割</span>
                 </td>
                 <th>是否可注册</th>
                 <td>
                   <span v-if="!houseadd.register">不可注册</span>
                   <span v-else>可注册</span>
                 </td>
              </tr>
              <tr>
                <th>出售价格</th>
                <td>
                  <span v-if="!houseadd.Forsale">不可出售</span>
                  <span v-else>
                    <span>{{houseadd.Forsale1}}元/m²</span>
                    <span>{{houseadd.Forsale2}}元</span>
                  </span>
                </td>
                 <th>房源类型</th>
                <td colspan="3">
                 {{houseadd.identity}}
                </td>
              </tr>
              <tr>
                <th>备注</th>
                <td>{{houseadd.introduce}}</td>
              </tr>
            </tbody>
          </table>
        </Card>
        <!-- ////////////// -->
        <Card style='margin-bottom:15px;'>
    <p slot="title">
        <Icon type="navicon"></Icon>
        {{houseadd.name}}联系人
    </p>
    <a href="#" slot="extra" @click.prevent="Edit(id)">
        <Icon type="edit"></Icon>
        编辑
    </a>
    <Card v-for="(item, index) in manData" :key="item.length" class="mingCard">
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
        <!-- ////////////// -->
        <Card style='margin-bottom:15px;'>
          <p slot="title">
              <Icon type="navicon"></Icon>
              {{houseadd.name}}图片
          </p>
          <a href="#" slot="extra" @click.prevent="Edit(id)">
              <Icon type="edit"></Icon>
              编辑
          </a>

           <Card v-for="(item, index) in dataimg" :key="item.length" class="imglok">
              <p slot="title">{{index}}:{{item.type}}</p>
              <a href="#" slot="extra" @click.prevent="clickCard(item.url)">
              <Icon type="eye" size='20' color='#495060'></Icon>
              </a>
              <img :src="item.url" :alt="item.type">
           </Card>
        </Card>

      </div>
      </Card>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie';
export default {
    name: 'houselook',
    data() {
        return {
          id:'',
          access:'',//权限
          manData:'',//联系人
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
        }
    },
    mounted() {
       let _this = this;
      _this.id = _this.$route.query.deal_id;
      _this.accesse();//权限
      _this.buildinglooksF();//data
    },
    methods: {
       historys(){
         this.$router.go(-1);
       },
       Edit(e){
       let query = { deal_id: e};
        this.$router.push({
         name: 'houseadd_edit',
         query: query
        });
      },
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
              _this.lookCard = res.data.power.lou06
          })
          .catch(function(err) {
              _this.$Notice.error({ title: '权限获取错误' });
          })
      },
      buildinglooksF(){
         let _this = this;
          axios({
              method:'post',
              url:'/api/fangup1?id='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
             // console.log(res)
             _this.houseadd = res.data.message.name
             _this.dataimg = res.data.message.img
             _this.manData = res.data.message.man
          })
          .catch(function (err) {
              _this.$Notice.error({title: '大楼参数错误'});
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
    }
};
</script>