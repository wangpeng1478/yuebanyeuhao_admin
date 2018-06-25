
<style lang="less">
 .addip{
   .formInlines{
      .ivu-form-item{
        width:250px;
        display: inline-block;
        margin: 5px 0;
      }
      .ivu-btn{
        margin:5px 0 0 5px;
      }
   }
   .formInlines2{
      .ivu-form-item{
        min-width:400px;
        max-width:80px;
        // display: inline-block;
        // margin: 5px 0;
      }
      .ivu-btn{
        margin:5px 0 0 5px;
      }
   }
 }
</style>

<template>
   <div class="addip cf">
   <pre>{{addip}}</pre>
   <pre>{{addip1}}</pre>

      <Card style="margin-bottom: 15px;">
        <p slot="title">
            <Icon type="android-wifi"></Icon>
            添加IP
        </p>
         <Form ref="formInline" :model="addip" :rules="ruleInline" :label-width="80" class="formInlines">
            <FormItem label="IP" prop="ip">
                <Input type="text" v-model="addip.ip" placeholder="--- --- -- ---">
                    <Icon type="connection-bars" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem label="备注">
                <Input type="text" v-model="addip.rema" placeholder=""></Input>
            </FormItem>
          <Button type="primary" :loading="loadings" @click="addips('formInline')">添加IP</Button>
       </Form>
      </Card>
      <Card style="margin-bottom: 15px;">
        <p slot="title">
            <Icon type="android-wifi"></Icon>
            添加IP
        </p>
         <Form ref="formInline1" :model="addip1" :label-width="80" class="formInlines2">
            <FormItem label="人员">
               <Select v-model="addip1.name" multiple >
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
            </FormItem>
            <FormItem><Button type="primary" :loading="loadings2" @click="addips2('formInline1')">添加或删除不限制IP人员</Button></FormItem>
          
       </Form>

      </Card>

      <Card>
       <p slot="title">
            <Icon type="android-wifi"></Icon>
            IP列表
        </p>
          <Table height="600" :columns="columns" :data="userTables" :loading="loading1"></Table>
      </Card>

   </div>
</template>
<script>

import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'addip',
      data () {
          return {
            cityList: [],
             columns:[
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                  title: '添加时间',
                  key: 'time',
                  sortable: true
                },
                {
                  title: 'IP地址',
                  key: 'tcpip',
                },
                {
                  title: '备注',
                  key: 'rema',
                },
                {
                  title: '操作',
                  render: (h, params) => {
                            return h('div', [
                                
                                h('Poptip', {
                                    props: {
                                        title: '确定删除 '+params.row.tcpip+' ?',
                                        confirm: true
                                    },
                                    on: {
                                        'on-ok': () => {
                                            this.removeip(params.row.tcpip)
                                        }
                                    }
                                }, [
                                  h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    }
                                   }, '删除'),
                                ]),
                            ]);
                        }
                },
             ],
             userTables:[],
             loading1:true,
             loadings2:false,
             loadings:false,
             addip:{
              ip:'',
              rema:''
             },
             addip1:{
               name:[],
             },
              ruleInline: {
                  ip: [
                    { required: true, message: 'ip不能为空', trigger: 'blur' }
                  ]
                },
          }
        },
        mounted(){
           this.dataiP()
         let _this =this;
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
        this.yir()
        },
        methods:{
          yir(){
            let _this =this;
              axios({
                  method:'post',
                  url:'/api/ipexe1',
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
               })
              .then(function (res) {
                console.log(res.data.message)
                _this.addip1.name = res.data.message
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '人员错误'});
              })
          },
           dataiP(){
            let _this = this;
            _this.loading1 = true 
               axios({
                    method: 'post',
                    url: '/api/ipact',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res){
                    _this.userTables = res.data.message
                    _this.loading1 = false 
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: 'IP列表错误' });
                })
           },
           removeip(e){
             let _this = this;
               axios({
                    method: 'post',
                    url: '/api/ipdel?ip='+e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res){
                    _this.$Message.success('删除成功！');
                    _this.dataiP();
                })
                .catch(function(err){
                    _this.$Notice.error({ title: '错误失败' });
                })
           },
           addips(name){
            this.$refs[name].validate((valid) => {
                    if (valid) {
                        let _this = this;
                          _this.loadings = true
                           axios({
                                method: 'post',
                                url: '/api/ipadd',
                                headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                                data:{
                                  data:_this.addip
                                }
                            })
                            .then(function(res){
                                _this.$Message.success('添加成功！');
                                _this.dataiP();
                                _this.loadings = false
                                _this.addip = {
                                      ip:'',
                                      rema:''
                                  }
                            })
                            .catch(function(err){
                                _this.$Notice.error({ title: '添加失败' });
                            })
                    }
                })
           },
           addips2(name){
             let _this = this
             _this.loadings2 = true
              axios({
                  method:'post',
                  url:'/api/ipexe2',
                  headers:{Authorization:'Bearer '+Cookies.set('keya')},
                  data:{
                    jo:_this.addip1.name
                  }
               })
              .then(function (res) {
                console.log(res)
                _this.$Message.success('成功！');
                _this.loadings2 = false
              })
              .catch(function (err) {
                  _this.$Notice.error({title: '人员错误'});
              })
           },

        }
};
</script>

