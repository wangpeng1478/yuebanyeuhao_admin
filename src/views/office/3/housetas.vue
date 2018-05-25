
<style lang="less">
 .loucontas{
   
 }
</style>

<template>
   <div class="loucontas cf">
    <pre>{{datas}}</pre>
    <Card v-if="shohide">
     <Form :label-width="100">
      <contactse :typedata="typedata" :datas="datas" ref="getInput"></contactse>
     </Form>
       <Card style="margin-top:15px;text-align: center;">
       <Button @click="handleSubmit" type="success" size="large" long :loading="loading">
         <span v-if="!loading">修 改</span>
         <span v-else>修 改 中</span>
       </Button>
       </Card>
   </Card>

   <Card v-if="shohides">

     <Form :label-width="100">
       <contacts :typedata="typedata" ref="getInputs"></contacts>
     </Form>

      <Card style="margin-top:15px;text-align: center;">
       <Button @click="handleSubmits" type="success" size="large" long :loading="loadings">
         <span v-if="!loadings">提 交</span>
         <span v-else>提 交 中</span>
       </Button>
       </Card>

   </Card>
   </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import contactse from '../contacts/loucontacts.vue'
import contacts from '../contacts/contacts.vue'

export default {
    name: 'loucontas',
    components: {
        contactse,
        contacts
    },
      data () {
          return {
             typedata:'楼盘联系人',
             id:'',
             addID:0,
             ofid:'',
             eq:'', //判断编辑添加
             datas:[],
             datass:[],
             shohide:false,
             shohides:false,
             loading:false,
             loadings:false,
          }
        },
        mounted(){
          let _this = this;
          _this.id = _this.$route.query.deal_id;
          _this.ofid = _this.$route.query.ofid;
          _this.eq = _this.$route.query.eq;
          // console.log(_this.id)
          if (_this.eq == 0) {
             axios({
              method:'post',
              url:'/api/manup1?maid='+_this.id,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
           })
            .then(function (res) {
                // console.log(res)
                if (res.data.statusx == 200) {
                  _this.datas = res.data.message
                  _this.shohide = true
                  // console.log(res)
                }else{
                   _this.$Notice.error({title: res.data.message});
                }
            })
            .catch(function (err) {
                _this.$Notice.error({title: '编辑联系人错误'});
            })
          }else if(_this.eq == 1){
            _this.shohides = true;
          }
        },
        methods:{
           handleSubmit(){
            //修改
            let _this = this;

            _this.loading = true;
             _this.lainxirendata =_this.$refs.getInput.moldx;
             // console.log(_this.lainxirendata)
             axios({
              method:'post',
              url:'/api/manadju2?maid='+_this.id+'&roid='+_this.ofid,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                man:_this.lainxirendata
              }
           })
            .then(function (res){
               _this.loading = false;
               if(res.data.statusx == 200){
                  _this.$Notice.success({title: '修改成功'});
                  _this.id = res.data.message;
                  let query = { 
                      deal_id: res.data.message,
                      ofid: _this.ofid
                    };
                  _this.$router.push({
                    name: 'hou_setas',
                     query: query
                  });

               }else{
                _this.$Notice.error({title: res.data.message});
               }
            })
            .catch(function (err) {
                _this.loading = false;
                _this.$Notice.error({title: '编辑失败'});
            })
          },
          handleSubmits(){
            //添加
            let _this = this;
            _this.loadings = true;
            _this.lainxirendata =_this.$refs.getInputs.moldx;
             axios({
              method:'post',
              url:'/api/manadju2?maid='+_this.addID+'&roid='+_this.ofid,
              headers:{Authorization:'Bearer '+Cookies.set('keya')},
              data:{
                man:_this.lainxirendata
              }
           })
            .then(function (res){
               _this.loadings = false;
                  if(res.data.statusx == 200){
                  _this.$Notice.success({title: '新增成功'});
                  _this.addID = res.data.message;
                  let query = { 
                      deal_id: res.data.message,
                      ofid: _this.ofid
                    };
                  _this.$router.push({
                    name: 'hou_setas',
                     query: query
                  });
                  
               }else{
                _this.$Notice.error({title: res.data.message});
               }

            })
            .catch(function (err) {
                _this.loadings = false;
                _this.$Notice.error({title: '添加失败'});
            })
          },

        }
};
</script>

