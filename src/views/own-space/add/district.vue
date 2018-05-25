
<style lang="less">
 .district{
   .addloussdas{
      ul{
        list-style-type: none;
        li{
          margin:10px 5px;
        }
      }
   }
 }
</style>

<template>
   <div class="district cf">
   <pre>{{district}}</pre>
   <pre>{{userTables}}</pre>

      <Card style="margin-bottom: 15px;">
        <p slot="title">
            <Icon type="android-wifi"></Icon>
            添加区域
        </p>
         <Form ref="formInline" :model="district" :rules="ruleInline" inline>
            <FormItem prop="name">
                <Input type="text" v-model="district.name" placeholder="区域">
                    <Icon type="gear-b" slot="prepend"></Icon>
                </Input>
            </FormItem>
          <Button type="primary" :loading="loadings" @click="addips('formInline')">添加区域</Button>
       </Form>

      </Card>

      <Card>
       <p slot="title">
            <Icon type="android-wifi"></Icon>
            区域列表
        </p>
          <Table height="800" :columns="columns" :data="userTables" :loading="loading1" border></Table>
      </Card>

      <Modal v-model="modal2" width="360">
        <p slot="header" style="text-align:center">
            <span>添加商圈</span>
        </p>
        <div>
            <Form ref="formInlines" :model="districtlou" :rules="ruleInlinelou">
            <FormItem prop="name">
                <Input type="text" v-model="districtlou.name" placeholder="商圈">
                    <Icon type="gear-b" slot="prepend"></Icon>
                </Input>
            </FormItem>
       </Form>
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long :loading="loading2" @click="addlouss('formInlines')">添加商圈</Button>
        </div>
    </Modal>


   </div>
</template>
<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'district',
      data () {
          return {
             columns:[
                {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                  title: '区域',
                  width: 150,
                  key: 'value'
                },
                {
                  title: '商圈',
                  render: (h, params) => {
                      return h('div',{
                           class:"addloussdas"
                      }, [
                         h('ul', params.row.children.map(item => {
                                return h('li',[
                                  h('Tag', item.value)
                                ])
                            }))
                      ]);
                  }
                },
                 {
                        title: '添加商圈',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.addshangaun(params.row.value)
                                        }
                                    }
                                }, '添加商圈')
                            ]);
                        }
                    }
             ],
             userTables:[],
             loading1:true,
             modal2:false,
             loading2:false,
             loadings:false,
             names:'',
             district:{
               name:''
             },
              ruleInline: {
                  name: [
                    { required: true, message: '区域不能为空', trigger: 'blur' }
                  ]
            },
            districtlou:{
               name:''
             },
            ruleInlinelou: {
                  ip: [
                    { required: true, message: '商圈不能为空', trigger: 'blur' }
                  ]
            },
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
                    url: '/api/region',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res){
                    let data =[];
                     for (var i = 0; i < res.data.region.length; i++) {
                         let a = {
                            value: res.data.region[i].value,
                            label: res.data.region[i].value,
                            children: res.data.region[i].children
                        }
                       data.push(a)
                     }
                     _this.userTables = data
                    _this.loading1 = false 
                    // console.log(res)
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '错误' });
                })
           },
           addips(name){
            this.$refs[name].validate((valid) => {
                    if (valid) {
                        let _this = this;
                           _this.loadings = true
                           axios({
                                method: 'post',
                                url: '/api/regionadd',
                                headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                                data:{
                                  name:_this.district.name
                                }
                            })
                            .then(function(res){
                                _this.$Message.success('添加成功！');
                                _this.dataiP();
                                _this.loadings = false
                                _this.district = {
                                      name:''
                                  }
                            })
                            .catch(function(err){
                                _this.$Notice.error({ title: '添加失败' });
                            })
                    }
                })
           },
           addshangaun(e){
             // console.log(e)
             this.names = e
             this.modal2 = true
           },
           addlouss(name){
            // console.log(this.districtlou.name)
            // console.log(this.names)
              this.$refs[name].validate((valid) => {
                    if (valid) {
                          let _this = this;
                           _this.loading2 = true
                           axios({
                                method: 'post',
                                url: '/api/subrangeadd',
                                headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                                data:{
                                  name2:_this.districtlou.name,
                                  name:_this.names
                                }
                            })
                            .then(function(res){
                                _this.$Message.success('添加成功！');
                                _this.dataiP();
                                _this.loading2 = false
                                _this.modal2 = false
                                _this.districtlou = {
                                      name:''
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

