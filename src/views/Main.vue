<style lang="less">
    @import "./main.less";
    .logo-con{
        cursor: pointer;
        -webkit-transition:all 0.25s ease-out;transition:all 0.25s ease-out;
        &:hover{
            opacity: 0.7;
        }
    }
    .management{
        position: absolute;
        right: 123px;
        top: 0;
        width: 150px;
        height: 100%;
        line-height: 61px;
    }
    .management .ivu-menu-submenu-title{
        color: #2d8cf0;
    }
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
            <shrinkable-menu 
                :shrink="shrink"
                @on-change="handleSubmenuChange"
                :theme="menuTheme" 
                :before-push="beforePush"
                :open-names="openedSubmenuArr"
                :menu-list="menuList">
                <div slot="top" class="logo-con" @click="clickHome">
                    <img v-show="!shrink"  src="../images/logo.png" key="max-logo" />
                    <img v-show="shrink" src="../images/logo-min.png" key="min-logo" />
                </div>
            </shrinkable-menu>
        </div>
        <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
            <div class="main-header">
                <div class="navicon-con">
                    <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
                <div class="header-middle-con">
                    <div class="main-breadcrumb">
                        <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
                    </div>
                </div>
                <div class="header-avator-con">
                    <full-screen v-model="isFullScreen" @on-change="fullscreenChange"></full-screen>
                    <lock-screen></lock-screen>

                    <message-tip v-model="mesCount"></message-tip>
                    
                    <theme-switch></theme-switch>

                     <div class="management">
                         <Menu mode="horizontal" @on-select="handleClickUserDropdownse">
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="settings"></Icon>
                                    系统管理
                                </template>
                                <MenuGroup title="管理">
                                    <MenuItem name="0"><Icon type="person-add"></Icon> 用户管理 </MenuItem>
                                    <MenuItem name="1"><Icon type="android-wifi"></Icon> IP管理 </MenuItem>
                                </MenuGroup>
                                <MenuGroup title="删除">
                                    <MenuItem name="2"><Icon type="ios-trash-outline"></Icon> 楼盘删除</MenuItem>
                                    <MenuItem name="3"><Icon type="ios-trash"></Icon> 房源删除</MenuItem>
                                </MenuGroup>
                                 <MenuGroup title="记录">
                                    <MenuItem name="4"><Icon type="ios-cog-outline"></Icon> 图片记录</MenuItem>
                                    <MenuItem name="5"><Icon type="ios-cog"></Icon> 跟进记录</MenuItem>
                                </MenuGroup>
                                <MenuGroup title="其他">
                                    <!-- <MenuItem name="6"><Icon type="ios-toggle-outline"></Icon> 房源转换</MenuItem> -->
                                    <MenuItem name="6"><Icon type="ios-toggle-outline"></Icon> 添加区域/商圈</MenuItem>
                                    <MenuItem name="7"><Icon type="ios-toggle-outline"></Icon> 添加地铁</MenuItem>
                                    <MenuItem name="8"><Icon type="ios-toggle-outline"></Icon> 客户提醒间隔</MenuItem>
                                </MenuGroup>
                            </Submenu>
                        </Menu>

                    </div>

                    <div class="user-dropdown-menu-con">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                <a href="javascript:void(0)">
                                    <span class="main-user-name">{{ userName }}</span>
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <!-- http://47.98.155.165/image/vueAdmin/deyu_logo_200x200.jpg -->
                                <DropdownMenu slot="list">
                                    <DropdownItem name="ownSpace">修改密码</DropdownItem>
                                    <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Avatar src="http://47.98.155.165/image/vueAdmin/deyu_logo_200x200.jpg" style="background: #619fe7;margin-left: 10px;border:1px solid #eee"></Avatar>
                        </Row>
                    </div>
                </div>
            </div>
            <div class="tags-con">
                <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
            </div>
        </div>
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <keep-alive :include="cachePage">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>

         <Modal v-model="editPasswordModal" :closable='false' :mask-closable=false :width="500">
            <h3 slot="header" style="color:#2D8CF0">修改密码</h3>
            <Form ref="editPasswordForm" :model="editPasswordForm" :label-width="100" label-position="right" :rules="passwordValidate">
                <FormItem label="原密码" prop="oldPass" :error="oldPassError">
                    <Input v-model="editPasswordForm.oldPass" placeholder="请输入现在使用的密码" ></Input>
                </FormItem>
                <FormItem label="新密码" prop="newPass">
                    <Input v-model="editPasswordForm.newPass" placeholder="请输入新密码，至少6位字符" ></Input>
                </FormItem>
                <FormItem label="确认新密码" prop="rePass">
                    <Input v-model="editPasswordForm.rePass" placeholder="请再次输入新密码" ></Input>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="text" @click="cancelEditPass">取消</Button>
                <Button type="primary" :loading="savePassLoading" @click="saveEditPass">保存</Button>
            </div>
        </Modal>

    </div>
</template>
<script>
    import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue';
    import tagsPageOpened from './main-components/tags-page-opened.vue';
    import breadcrumbNav from './main-components/breadcrumb-nav.vue';
    import fullScreen from './main-components/fullscreen.vue';
    import lockScreen from './main-components/lockscreen/lockscreen.vue';
    import messageTip from './main-components/message-tip.vue';
    import themeSwitch from './main-components/theme-switch/theme-switch.vue';
    import Cookies from 'js-cookie';
    import util from '@/libs/util.js';
    import axios from 'axios'
    import localStorages from '../localStorage/localStorage';
    export default {
        components: {
            shrinkableMenu,
            tagsPageOpened,
            breadcrumbNav,
            fullScreen,
            lockScreen,
            messageTip,
            themeSwitch
        },
        data () {
            const valideRePassword = (rule, value, callback) => {
                if (value !== this.editPasswordForm.newPass) {
                    callback(new Error('两次输入密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                shrink: false,
                editPasswordModal: false, // 修改密码模态框显示
                savePassLoading: false,
                oldPassError: '',
                editPasswordForm: {
                oldPass: '',
                newPass: '',
                rePass: ''
                },
                passwordValidate: {
                    oldPass: [
                        { required: true, message: '请输入原密码', trigger: 'blur' }
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
                userName: '',
                forms: [],
                auth:{},
                keya:Cookies.set('keya'),
                isFullScreen: false,
                openedSubmenuArr: ['recomm_end','overview','building','house','client']
                // openedSubmenuArr: this.$store.state.app.openedSubmenuArr 默认侧边打开
            };
        },
        computed: {
            menuList () {
                return this.$store.state.app.menuList;
            },
            pageTagsList () {
                return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
            },
            currentPath () {
                return this.$store.state.app.currentPath; // 当前面包屑数组
            },
            avatorPath () {
                return localStorage.avatorImgPath;
            },
            cachePage () {
                return this.$store.state.app.cachePage;
            },
            lang () {
                return this.$store.state.app.lang;
            },
            menuTheme () {
                return this.$store.state.app.menuTheme;
            },
            mesCount () {
                return this.$store.state.app.messageCount;
            }
        },
        methods: {
            accesse(){
             let _this = this;
             axios({
                method: 'post',
                url: '/api/power',
                headers: { Authorization: 'Bearer ' + Cookies.set('keya') },
              })
              .then(function(res) {
                   Cookies.set('auth', res.data.power); //权限
                  _this.auth = res.data.power;
              })
              .catch(function(err) {
                  _this.$Notice.error({ title: '权限获取错误' });
              })
          },
            init () {
                let pathArr = util.setCurrentPath(this, this.$route.name);
                this.$store.commit('updateMenulist');
                if (pathArr.length >= 2) {
                    this.$store.commit('addOpenSubmenu', pathArr[1].name);
                }
                this.userName = Cookies.get('user');
                let messageCount = 3;
                this.messageCount = messageCount.toString();
                this.checkTag(this.$route.name);
                // this.$store.commit('setMessageCount', 40);

                // console.log(this.$store.state.app.messageCount)
            },
            toggleClick () {
                this.shrink = !this.shrink;
            },
             cancelEditPass () {
              this.editPasswordModal = false;
            },
            saveEditPass () {
                this.$refs['editPasswordForm'].validate((valid) => {
                    if (valid) {
                        this.savePassLoading = true;
                        // you can write ajax request here
                    }
                });
            },
            handleClickUserDropdown (name) {
                if (name === 'ownSpace') {
                    // util.openNewPage(this, 'ownspace_index');
                    // this.$router.push({
                    //     name: 'ownspace_index'
                    // });
                      this.editPasswordModal = true;
                } else if (name === 'loginout') {
                    this.$store.commit('logout', this);
                    this.$store.commit('clearOpenedSubmenu');
                    this.$router.push({
                        name: 'login'
                    });
                }
            },
            checkTag (name) {
                let openpageHasTag = this.pageTagsList.some(item => {
                    if (item.name === name) {
                        return true;
                    }
                });
                if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
                    util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
                }
            },
            handleSubmenuChange (val) {
                // console.log(val)
            },
            beforePush (name) {
                // if (name === 'accesstest_index') {
                //     return false;
                // } else {
                //     return true;
                // }
                return true;
            },
            fullscreenChange (isFullScreen) {
                // console.log(isFullScreen);
            },
            clickHome(){
                //点击回到首页
               this.$router.push({
                 name: 'home_index'
                });
            },
            cuno(){
               this.$router.push({
                 name: 'error-403'
                });
            },
            handleClickUserDropdownse(e){
                if (e==0) {
                    if (this.auth.user01 || auth.user02) {
                         this.$router.push({
                          name: 'user_admin'
                         })
                    }else{
                        this.cuno();
                    }


                }else if(e == 1){

                    if (this.auth.syst01) {
                        this.$router.push({
                        name: 'add_ip'
                       }) 
                    }else{
                       this.cuno(); 
                    }
                    

                }else if(e == 2){

                   if (this.auth.syst04) {
                    this.$router.push({
                      name: 'lou_reover'
                    })
                    }else{
                      this.cuno(); 
                    }
                    

                }else if(e == 3){
                    // syst03
                      if (this.auth.syst03){
                           this.$router.push({
                              name: 'fang_reover'
                            })
                      }else{
                       this.cuno(); 
                      }
                   

                }else if(e == 4){
                    // syst02
                    if (this.auth.syst02) {
                          this.$router.push({
                          name: 'recording_img'
                        })
                    }else{
                       this.cuno();  
                    }
                   
                }else if(e == 6){
                    this.$router.push({
                      name: 'dist_rict'
                    })
                }else if(e == 7){
                    this.$router.push({
                      name: 'add_metro'
                    })
                }else if(e == 5){
                    if (this.auth.syst08) {
                        this.$router.push({
                         name: 'follow_up'
                       })
                    }else{
                      this.cuno();    
                    }
                    
                }else if(e == 8){
                    this.$router.push({
                      name: 'alterna_tion'
                    })
                }
            }
        },
        watch: {
            '$route' (to) {
                this.$store.commit('setCurrentPageName', to.name);
                let pathArr = util.setCurrentPath(this, to.name);
                if (pathArr.length > 2) {
                    this.$store.commit('addOpenSubmenu', pathArr[1].name);
                }
                this.checkTag(to.name);
                localStorage.currentPageName = to.name;
            },
            lang () {
                util.setCurrentPath(this, this.$route.name); // 在切换语言时用于刷新面包屑
            }
        },
        mounted () {
            this.init();
            this.accesse();
            this.forms = localStorages.getStorage('forms');
        },
        created () {
            // 显示打开的页面的列表
            this.$store.commit('setOpenedList');
        }
    };
</script>
