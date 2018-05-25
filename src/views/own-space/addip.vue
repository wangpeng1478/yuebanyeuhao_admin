
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
 }
</style>

<template>
   <div class="addip cf">
   <pre>{{addip}}</pre>

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
             loadings:false,
             addip:{
              ip:'',
              rema:''
             },
              ruleInline: {
                  ip: [
                    { required: true, message: 'ip不能为空', trigger: 'blur' }
                  ]
                }
          }
        },
        mounted(){
           this.dataiP()
        },
        methods:{
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
           }

        }
};
</script>

