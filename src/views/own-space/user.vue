
<style lang="less">
 .useradmin{
    .titims{
      margin-bottom:15px;
    .ivu-card-body{
      padding:7px;
      .lesr{
        float: left;
        margin-right: 10px;
      }
      .rigths{
        float:right;
        line-height: 33px;
        padding-right: 10px;
      }
    }
  }
 }
 .Cardqunx{
   margin-bottom:10px;
   .ivu-checkbox-wrapper{
    margin-right:15px;
   }
    .ivu-card-head{
      padding:6px 15px;
    }
    .ivu-card-body {
      padding: 8px 15px;
    }
  }

  .Modal1{
    li{
      list-style-type: none;
       margin-bottom:8px;
       padding-left: 80px;
       font-size: 14px;
      span{
        display: inline-block;
        width:80px;
        text-align: right;
        margin-right:5px;
        font-weight: 500
      }
    }
  }
  .footer12{
    text-align: center;
    .Select12{
    width:200px;
    .ivu-select-item{
      text-align:left
    }
  }

  }
   
</style>

<template>
   <div class="useradmin cf">
   <pre>{{data.power}}</pre>
   <pre>{{Modal1data4}}</pre>
      <Card class='sere'>
        <p slot="title">
            <Icon type="person"></Icon>
            用户列表
        </p>
        
   <Card class='titims'>
    <div class="cf">
    <!-- <pre>
      {{auth}} user01
    </pre> -->
      <Button v-if="auth.user01" class="lesr" @click="Modal3 = true" type="primary" shape="circle" icon="ios-plus-outline">添加用户</Button>
      <Button v-if="auth.user02" class="lesr" @click="Modal4srrr" type="primary" shape="circle" icon="ios-plus-outline">添加角色</Button>
       <div class="rigths"><b>40</b>个用户</div>
     </div>
    </Card>

      <Card>
          <Table height="600" :columns="columns" :data="userTables" :loading="loading1" border></Table>
      </Card>
    
    <!-- 转移 -->
   
        <Modal v-model="Modal1" :closable='false' :mask-closable='false' :width="500">
            <h3 slot="header" style="color:#2D8CF0">转移房源{{id}}</h3>
              <ul class="Modal1">
                <li><span>用户名:</span>{{Modal1data.name}}</li>
                <li><span>英文名:</span>{{Modal1data.ename}}</li>
                <li><span>是否激活:</span>{{Modal1data.act}}</li>
                <li><span>客户:</span>{{Modal1data.clue}}</li>
                <li><span>房源:</span>{{Modal1data.yuan}}</li>
                <li><span>部门:</span>{{Modal1data.branchx}}部</li>
                <li><span>电话:</span>{{Modal1data.phone}}</li>
              </ul>
            <div slot="footer" class="footer12">
                 <Select v-model="ascription" filterable clearable class="Select12">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                 </Select>
                 <Button type="primary" @click="moving" :loading="loading2">转移房源</Button>
                 <Button type="ghost" @click="Modal1 = false">取消</Button>
            </div>
        </Modal>

    <!-- 转移 -->
    <!-- 编辑用户 -->

        <Modal v-model="Modal2" :closable='false' :mask-closable='false' :width="500">
            <h3 slot="header" style="color:#2D8CF0">用户编辑{{id}}</h3>

           <Form :model="Modal1data2" :label-width="80" ref='Modal1data2se' :rules="Modal1data22">
              <FormItem label="用户名" prop="name">
                  <Input v-model="Modal1data2.name" readonly></Input>
              </FormItem>
               <FormItem label="英文名">
                  <Input v-model="Modal1data2.ename" placeholder="英文名"></Input>
              </FormItem>
              <FormItem label="部门">
                   <RadioGroup v-model="Modal1data2.branchx" type="button">
                        <Radio label="2" v-for="n in data.branchx" :label="String(n)" :key="n">{{n}}部</Radio>
                    </RadioGroup>
              </FormItem>
              <FormItem label="角色">
                  <Select v-model="Modal1data2.iden">
                      <Option v-for="s in data.iden" :value="s" :key="s">{{ s }}</Option>
                  </Select>
              </FormItem>
              <FormItem label="联系电话" prop="phone">
                  <Input v-model="Modal1data2.phone"></Input>
              </FormItem>
           </Form>
            <div slot="footer">
                 <Button type="primary" @click="Modal2Submit('Modal2')" :loading="loading3" >修改用户</Button>
                 <Button type="ghost" @click="Modal2 = false">取消</Button>
            </div>
        </Modal>

    <!-- 编辑用户 -->
    <!-- 添加用户 -->
    <Modal v-model="Modal3" :closable='false' :mask-closable='false' :width="500" :label-width="150">
            <h3 slot="header" style="color:#2D8CF0">添加用户</h3>

           <Form :model="Modal1data3" :label-width="80" ref='Modal1data3se' :rules="Modal1data33">
              <FormItem label="用户名" prop="name">
                  <Input v-model="Modal1data3.name"></Input>
              </FormItem>
               <FormItem label="英文名">
                  <Input v-model="Modal1data3.ename" placeholder="英文名"></Input>
              </FormItem>
              <FormItem label="部门" prop="branchx">
                   <RadioGroup v-model="Modal1data3.branchx" type="button">
                        <Radio label="2" v-for="n in data.branchx" :label="n" :key="n">{{n}}部</Radio>
                    </RadioGroup>
              </FormItem>
              <FormItem label="角色" prop="iden">
                  <Select v-model="Modal1data3.iden">
                      <Option v-for="s in data.iden" :value="s" :key="s">{{ s }}</Option>
                  </Select>
              </FormItem>
              <FormItem label="联系电话" prop="phone">
                  <Input v-model="Modal1data3.phone"></Input>
              </FormItem>
              <FormItem label="密码" prop="newPass">
                    <Input type="password" v-model="Modal1data3.newPass" placeholder="请输入新密码，至少6位字符" ></Input>
                </FormItem>
                <FormItem label="确认密码" prop="rePass">
                    <Input type="password" v-model="Modal1data3.rePass" placeholder="请再次输入新密码" ></Input>
                </FormItem>
                <Alert show-icon closable>默认密码<b> “123456”</b></Alert>
           </Form>

            <div slot="footer">
                 <Button type="primary"  @click="Modal2Submits('Modal1data3se')" :loading="loading4">添加用户</Button>
                 <Button type="ghost" @click="Modal3 = false">取消</Button>
            </div>
        </Modal>
    <!-- 添加用户 -->
   <!-- 添加角色 -->
    <Modal v-model="Modal4" :closable='false' :mask-closable='false' :width="800" :styles="{top: '5px'}">
            <h3 v-if="Editnew" slot="header" style="color:#2D8CF0">添加角色</h3>
            <h3 v-if="!Editnew" slot="header" style="color:#2D8CF0">编辑角色</h3>

             <Form :model="Modal1data4" :label-width="80" ref='Modal1data3ses' :rules="Modal1data33r">
                <FormItem label="角色名称" prop="name">
                    <Input v-model="Modal1data4.name" :disabled="!Editnew"></Input>
                </FormItem>
                <FormItem label="备注">
                    <Input type="textarea" v-model="Modal1data4.note"></Input>
                </FormItem>

                <FormItem label="操作权限">
                      <CheckboxGroup v-model="Modal1data4.checkAllGroup">
                         <Card class="Cardqunx" v-for="(site ,key) in data.power" :key="key">
                          <p slot="title">{{key}}</p>
                          <Checkbox v-for="(w ,key) in site" :label="w.v" :key="w.v" >{{w.k}}</Checkbox>
                        </Card>
                      </CheckboxGroup>
                </FormItem>
             </Form>

            <div slot="footer">
                 <Button v-if="Editnew" type="primary" @click="Modal2Submitst('Modal1data3ses')" :loading="loading5">添加角色</Button>
                 <Button v-if="!Editnew" type="primary" @click="Modal2Submitst1('Modal1data3ses')" :loading="loading5">编辑角色</Button>
                 <Button type="ghost" @click="Modal4 = false">取消</Button>
            </div>
        </Modal>
   <!-- 添加角色 -->
    </Card>
   </div>
</template>

<script>

import axios from 'axios'
import Cookies from 'js-cookie';

export default {
    name: 'useradmin',
    data() {
        const valideRePassword = (rule, value, callback) => {
            if (value !== this.Modal1data3.newPass) {
                callback(new Error('两次输入密码不一致'));
            } else {
                callback();
            }
        };
        return {
            id: '',
            auth:JSON.parse(Cookies.set('auth')),
            namese: '',
            data: {},
            columns: [
               {
                    title: 'ID',
                    key: 'id',
                    width: 100,
                    sortable: true
                },
                {
                    title: '用户名',
                    key: 'uname',
                },
                {
                    title: '权限',
                    key: 'iden'
                },
                {
                    title: '联系电话',
                    key: 'phone'
                },
                {
                    title: '是否激活',
                    width: 120,
                    align: 'center',
                    render: (h, params) => {
                        const row = params.row;
                        const text = row.activ == 'on' ? true : false;
                        return h('i-switch', {
                            props: {
                                size: 'large',
                                value: text
                            },
                            on: {
                                'on-change': (value) => {
                                    this.id = params.row.id
                                    this.activating(value);
                                }
                            }
                        }, [
                            h('span', {
                                slot: 'open'
                            }, "激活"),
                            h('span', {
                                slot: 'close'
                            }, "no")
                        ]);
                    },
                    filters: [{
                            label: '激活',
                            value: 1
                        },
                        {
                            label: '未激活',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod(value, row) {
                        if (value === 1) {
                            return row.activ == 'on';
                        } else if (value === 2) {
                            return row.activ == 'off';
                        }
                    }
                },
                {
                    title: '操作',
                    key: 'iden',
                    width: 280,
                    fixed: 'right',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    margin: '2px'
                                },
                                on: {
                                    click: () => {
                                        this.id = params.row.id
                                        this.useredit(params.row.id)
                                    }
                                }
                            }, '编辑用户'),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    margin: '2px'
                                },
                                on: {
                                    click: () => {
                                        this.id = params.row.id
                                        this.namese = params.row.iden
                                        this.Editnew = false
                                        this.Authoritylst(params.row.iden);
                                    }
                                }
                            }, '编辑权限'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                style: {
                                    margin: '2px'
                                },
                                on: {
                                    click: () => {
                                        this.id = params.row.id;
                                        this.Transfer(params.row.id);
                                    }
                                }
                            }, '转移房源')
                        ]);
                    }
                }
            ],
            userTables: [],
            cityList: [], //人员
            partData: [], //角色
            loading1: true,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false,
            Modal1: false, //转移房源/激活 true
            Modal1data: {}, //转移房源/激活 data
            ascription: '', //转移房源/激活 reata
            Modal2: false, //用户编辑
            Modal1data2: {}, //用户编辑
            Modal1data22: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '联系电话不能为空', trigger: 'blur' }
                ],
            },
            Modal3: false, //add use
            Modal1data3: {
                "name": "",
                "phone": "",
                "ename": "  ",
                "branchx": 1,
                "iden": "",
                "newPass": "123456",
                "rePass": "123456",
            },
            Modal1data33: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                iden: [
                    { required: true, message: '角色不能为空', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: '联系电话不能为空', trigger: 'blur' }
                ],
                newPass: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { min: 6, message: '请至少输入6个字符', trigger: 'blur' },
                    { max: 32, message: '最多输入32个字符', trigger: 'blur' }
                ],
                rePass: [
                    { required: true, message: '请再次输入新密码', trigger: 'blur' },
                    { validator: valideRePassword, trigger: 'blur' }
                ]

            },
            Modal4: false,
            Modal1data4: {
                name: '',
                note: '',
                checkAllGroup: []
            },
            Modal1data33r: {
                name: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ]
            },
            Editnew: true, //判断新 修改还是新增 
        }
    },
    mounted() {
        this.part(); //data
        this.userTable(); //table
        this.usadminse(); //ren
    },
    methods: {
        Modal4srrr() {
            this.Modal4 = true
            this.Editnew = true
            this.Modal1data4 = {
                name: '',
                note: '',
                checkAllGroup: []
            }
        },
        part() {
            let _this = this;
            axios({
                    method: 'post',
                    url: '/api/idenlist',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    _this.data = res.data.message
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '用户错误' });
                })
        },
        usadminse() {
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
        userTable() {
            let _this = this;
            axios({
                    method: 'post',
                    url: '/api/userlist',
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    // console.log(res.data.message)
                    _this.userTables = res.data.message
                    _this.loading1 = false
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '用户错误' });
                })
        },
        Transfer(e) {
            // 转移 类表
            let _this = this;
            _this.Modal1 = true;
            axios({
                    method: 'post',
                    url: '/api/useracti1?id=' + e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    _this.Modal1data = res.data.message
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '用户错误' });
                })
        },
        moving() {
            // 转移 类表
            let _this = this;
            _this.loading2 = true;
            if (_this.ascription == '') {
                _this.$Message.warning('选择房源转移用户');
                _this.loading2 = false;
            } else {
                axios({
                        method: 'post',
                        url: '/api/useracti3',
                        headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                        data: {
                            id: _this.id,
                            name: _this.ascription
                        }
                    })
                    .then(function(res) {
                        if (res.data.statusx == 200) {
                            _this.$Message.success('房源转移成功');
                            _this.Modal1 = false
                            _this.loading2 = false;
                        } else {
                            _this.$Notice.error({ title: res.data.message });
                            _this.loading2 = false;
                        }
                    })
                    .catch(function(err) {
                        _this.$Notice.error({ title: '转移错误' });
                        _this.loading2 = false;
                    })
            }
        },
        activating(e) {
            let _this = this;
            axios({
                    method: 'post',
                    url: '/api/useracti2?id=' + _this.id,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    if (e) {
                        _this.$Message.success('激活成功');
                    } else {
                        _this.$Message.success('取消激活成功');
                    }
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '激活错误' });
                })

        },
        useredit(e) {
            // 转移 类表
            let _this = this;
            _this.Modal2 = true;
            axios({
                    method: 'post',
                    url: '/api/useracti1?id=' + e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    _this.Modal1data2 = res.data.message
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '用户错误' });
                })
        },
        Modal2Submit(valid) {
            //编辑
            this.$refs['Modal1data2se'].validate((valid) => {
                if (valid) {
                    let _this = this;
                    _this.loading3 = true
                    axios({
                            method: 'post',
                            url: '/api/unup?id=' + _this.id,
                            headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                            data: {
                                data: _this.Modal1data2
                            }
                        })
                        .then(function(res) {
                            console.log(res)
                            _this.$Message.success('编辑用户成功!');
                            _this.Modal2 = false
                            _this.loading3 = false
                        })
                        .catch(function(err) {
                            _this.$Notice.error({ title: '用户错误' });
                            _this.loading3 = false
                        })
                }
            })
        },
        Modal2Submits(valid) {
            this.$refs['Modal1data3se'].validate((valid) => {
                if (valid) {
                    let _this = this;
                    _this.loading4 = true
                    axios({
                            method: 'post',
                            url: '/api/unadd',
                            headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                            data: {
                                data: _this.Modal1data3
                            }
                        })
                        .then(function(res) {
                            console.log(res)
                            _this.$Message.success('添加用户成功!');
                            _this.Modal3 = false;
                            _this.loading4 = false
                            _this.userTable();
                            _this.Modal1data3 = {
                                "name": "",
                                "phone": "",
                                "ename": "  ",
                                "branchx": 1,
                                "iden": "",
                                "newPass": "123456",
                                "rePass": "123456",
                            };
                        })
                        .catch(function(err) {
                            _this.loading4 = false
                            _this.$Notice.error({ title: '添加用户错误' });
                        })
                }
            })
        },
        Modal2Submitst(valid) {
            this.$refs['Modal1data3ses'].validate((valid) => {
                if (valid) {
                    let _this = this;
                    _this.Modal1data4 = {
                        name: '',
                        note: '',
                        checkAllGroup: []
                    };
                    _this.loading5 = true
                    axios({
                            method: 'post',
                            url: '/api/enadd',
                            headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                            data: {
                                data: _this.Modal1data4
                            }
                        })
                        .then(function(res) {
                            console.log(res)
                            _this.$Message.success('添加角色成功!');
                            _this.Modal4 = false;
                            _this.loading5 = false
                            _this.Modal1data4 = {
                                name: '',
                                note: '',
                                checkAllGroup: []
                            };
                            _this.part(); //data
                        })
                        .catch(function(err) {
                            _this.loading5 = false
                            _this.$Notice.error({ title: '添加角色错误' });
                        })
                }
            })
        },
        Modal2Submitst1(valid) {
            this.$refs['Modal1data3ses'].validate((valid) => {
                if (valid) {
                    let _this = this;
                    _this.loading5 = true
                    axios({
                            method: 'post',
                            url: '/api/enup?name=' + _this.namese,
                            headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                            data: {
                                data: _this.Modal1data4
                            }
                        })
                        .then(function(res) {
                            console.log(res)
                            _this.$Message.success('编辑角色成功!');
                            _this.Modal4 = false;
                            _this.loading5 = false
                            _this.part(); //data
                        })
                        .catch(function(err) {
                            _this.loading5 = false
                            _this.$Notice.error({ title: '编辑角色错误' });
                        })
                }
            })
        },
        Authoritylst(e) {
            let _this = this;
            _this.Modal4 = true
               axios({
                    method: 'post',
                    url: '/api/unamepower?name=' + e,
                    headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
                })
                .then(function(res) {
                    _this.Modal1data4 = res.data.message
                })
                .catch(function(err) {
                    _this.$Notice.error({ title: '角色错误' });
                })
        }

    }
};
</script>

