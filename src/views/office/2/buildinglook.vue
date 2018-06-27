<style lang="less">
.buildinglook{
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
}
</style>
<template>
<div class="buildinglook">
 <pre>{{loupnAdd}}</pre>
 <pre>{{manData}}</pre>
 <pre>{{dataimg}}</pre>
  <div class="cf">
      <Card>
        <p slot="title" style="text-align:center">
             <span @click='historys' class='spanLeft'> <Icon type="ios-arrow-left"></Icon> 返回</span>
              {{loupnAdd.name}}
        </p>
        <a href="#" slot="extra" @click.prevent="Edit(id)">
            <Icon type="edit"></Icon>
            编辑
        </a>
   <div class="wa80">
          <Card style='margin-bottom:15px;'>
          <p slot="title">
              <Icon type="navicon"></Icon>
              {{loupnAdd.name}}基本信息
          </p>
          <a href="#" slot="extra" @click.prevent="Edit(id)">
              <Icon type="edit"></Icon>
              编辑
          </a>
          <table class="tables">
            <tbody>
              <tr>
                <th>写字楼名称</th>
                <td colspan="3" >{{loupnAdd.name}}</td>
              </tr>

               <tr>
                <th>附属楼宇</th>
                <td colspan="3" >
                <Tag type="dot" color="#bbbec4" v-for="(n,index) in loupnAdd.addnamd" :key="index">
                   {{n.name}}
                </Tag>

                </td>
              </tr>

              <tr>
                <th>详细地址</th>
                <td colspan="3" >上海市{{loupnAdd.region}}{{loupnAdd.street}}街道{{loupnAdd.address}}</td>
              </tr>
               <tr>
                <th>最近地铁</th>
                <td colspan="3" >{{loupnAdd.name}}离{{loupnAdd.station}}站{{loupnAdd.metro}}号线{{loupnAdd.dist}}米</td>
              </tr>

               <tr>
                <th>办公类型</th>
                <td colspan="3" >{{loupnAdd.genre}} {{loupnAdd.genre2}}</td>
               </tr>

               <tr>
                <th>楼盘简介</th>
                <td colspan="3" >{{loupnAdd.introduce}}</td>
               </tr>
            </tbody>
          </table>
        </Card>
        <!-- ////////////// -->
        <Card style='margin-bottom:15px;'>
          <p slot="title">
              <Icon type="navicon"></Icon>
              {{loupnAdd.name}}详细信息
          </p>
          <a href="#" slot="extra" @click.prevent="Edit(id)">
              <Icon type="edit"></Icon>
              编辑
          </a>
           <table class="tables">
            <tbody>

             <tr>
                <th>开发商</th>
                <td colspan="3">{{loupnAdd.developer}}</td>
              </tr>

              <tr>
                <th>建筑面积</th>
                <td>{{loupnAdd.builtup}}/m²</td>
                <th>标准层高</th>
                <td>{{loupnAdd.storeyheight}}m</td>
              </tr>
              <tr>
                <th>总层数</th>
                <td>{{loupnAdd.storey2}}m</td>
                <th>得房率</th>
                <td>{{loupnAdd.roomrate}}%</td>
              </tr>
              <tr>
                <th>电梯品牌</th>
                <td>{{loupnAdd.elevator2}}</td>
                <th>电梯个数</th>
                <td>{{loupnAdd.elevator1}}个</td>
              </tr>
              <tr>
                <th>物业公司</th>
                <td>{{loupnAdd.property}}</td>
                <th>物业费用</th>
                <td>{{loupnAdd.property2}}</td>
              </tr>
              <tr>
                <th>入住企业</th>
                <td>{{loupnAdd.enter}}</td>
              </tr>

            </tbody>
          </table>
        </Card>
        <!-- ////////////// -->
        <Card style='margin-bottom:15px;'>
    <p slot="title">
        <Icon type="navicon"></Icon>
        {{loupnAdd.name}}联系人
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
            <Button type="primary" size="small" @click="clickMaids(item.maid,index)">点击查看</Button>
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
              {{loupnAdd.name}}图片
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
    name: 'buildinglook',
    data() {
        return {
          id:'',
          access:'',//权限
          manData:'',//联系人
          dataimg:'',//img
          loupnAdd:'',//data
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
         window.history.go(-1)
       },
       Edit(e){
        let query = { deal_id: e};
        this.$router.push({
           name: 'buildingadd_edit',
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
              url:'/api/louup1?id='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
          .then(function (res) {
            _this.ofid = res.data.message.name.ofid;
              if (res.data.statusx == 200){
                let img = [];
                for (var i = 0; i < res.data.message.img.length; i++) {
                   var a = {
                     eq:res.data.message.img[i].eq,
                     url:res.data.message.img[i].url,
                     type:res.data.message.img[i].type,
                   }
                   img.push(a)
                }
                 _this.dataimg = img;
                 _this.manData = res.data.message.man; //联系人
                 _this.loupnAdd = res.data.message.name; //datas
                 // _this.dataIMG = true;

              }else if(res.data.statusx == 202){
                _this.$Notice.error({title: res.data.message});
              }
          })
          .catch(function (err) {
              _this.$Notice.error({title: '编辑错误'});
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