<style lang="less" scoped>
   .inndew{
   	  width:340px;
   	  display: inline-block;
   }
   .inndewt{
   	  width:653px;
   }
</style>

<template>
  <div style="padding-bottom: 200px">
  <pre>{{formInline}}</pre>
  	<Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="right" :label-width="100">
        <FormItem class="inndew" prop="city" label="收信人">
             <Select v-model="formInline.city" multiple clearable filterable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>

        <FormItem class="inndew" prop="date" label="定时发送">

         <DatePicker type="date" placeholder="请选择" v-model="formInline.date"></DatePicker>


        </FormItem>

         <FormItem class="inndewt" label="内容" prop="desc">

            <Input v-model="formInline.desc" type="textarea"  placeholder="请填写内容...."></Input>

        </FormItem>

        <FormItem>
             <Button type="primary" @click="handleSubmit('formInline')" :loading="loading">提交</Button>
             <Button type="ghost" @click="handleReset('formInline')" style="margin-left: 8px">清空</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie';

export default {
	name: 'Forms',
        data () {
            return {
                formInline: {
                    city: [], //收信人
                    date: '', //定时发送
                    desc: '', //内容
                },
                cityList: [],
                loading:false,
                ruleInline: {
                    city: [
                        { required: true, type: 'array', message: '填写收信人', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '填写时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '填写内容', trigger: 'change' }
                    ]
                }
            }
        },
        mounted(){
          this.adminname()
        },
        methods: {
            adminname() {
              let _this = this;
              axios({
                      method: 'post',
                      url: '/api/adminname',
                      headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                  })
                  .then(function(res) {
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
                  .catch(function(err) {
                      _this.$Notice.error({ title: '人员错误' });
                  })
          },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                     if (valid) {
                       let _this = this;
                     _this.loading = true,
                      axios({
                              method: 'post',
                              url: '/api/warnget',
                              headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                              data:{
                                jo:_this.formInline
                              }
                          })
                          .then(function(res) {
                               _this.$Message.success('添加成功');
                               _this.loading = false
                               // _this.$emit('refreshList');
                               _this.$refs[name].resetFields();
                               _this.formInline.city = []
                               console.log(res)
                          })
                          .catch(function(err) {
                              _this.$Notice.error({ title: '人员错误' });
                          })
                     }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
                this.formInline.city = []
            }
        }
    }
</script>
