
<style lang="less">
 .district{
   .formInlines{
      .ivu-form-item{
        width:200px;
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
            添加地铁
        </p>
         <Form ref="formInline" :model="district" :rules="ruleInline" inline class='formInlines'>
            <FormItem prop="name">
                <Input type="text" v-model="district.name" placeholder="地铁站">
                    <Icon type="gear-b" slot="prepend"></Icon>
                </Input>
            </FormItem>
             <FormItem prop="name2">
              <Select v-model="district.name2" placeholder='地铁线' multiple>
                  <Option v-for="n in 16" :value="n" :key="n">{{n}} 号线</Option>
                  <Option value="磁悬浮">磁悬浮</Option>
              </Select>
            </FormItem>
          <Button type="primary" :loading="loadings" @click="addips('formInline')">添加地铁线路</Button>
       </Form>

      </Card>

      <Card>
       <p slot="title">
            <Icon type="android-wifi"></Icon>
             地铁列表
       </p>
          <Table height="800" :columns="columns" :data="userTables" :loading="loading1" border></Table>
      </Card>




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
                  title: '地铁站线',
                  width: 250,
                  key: 'metro'
                },
                {
                  title: '地铁站站',
                  key: 'station'
                },
             ],
             userTables:[],
             loading1:true,
             modal2:false,
             loading2:false,
             loadings:false,
             names:'',
             district:{
               name:'',
               name2:[],
             },
              ruleInline: {
                  name: [
                    { required: true, message: '地铁站不能为空', trigger: 'blur' }
                  ],
                  name2: [
                    { required: true, message: '地铁线不能为空', type: 'array', min: 1, trigger: 'change' }
                  ],
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
                    url: '/api/metro2',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res){
                  // console.log(res.data.region)
                     _this.userTables = res.data.region
                    _this.loading1 = false 
                    // // console.log(res)
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
                                url: '/api/metroadd',
                                headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                                data:{
                                  name:_this.district.name,
                                  name2:_this.district.name2,
                                }
                            })
                            .then(function(res){
                                _this.$Message.success('添加成功！');
                                _this.dataiP();
                                _this.loadings = false
                                _this.$refs[name].resetFields();
                                _this.district = {
                                      name:'',
                                      name2:[],
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

