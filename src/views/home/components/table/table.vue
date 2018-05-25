<template>
 
</template>

<style lang="less" scoped>
   .pages{
     float: right;
     margin: 15px 5px 5px 0;
   }
   .searchFolebs{
   	.shuax{
        float: right;
        cursor: pointer;
        line-height: 20px;
         -webkit-transition:all 0.25s ease-out; 
        transition:all 0.25s ease-out;
        &:hover{
          opacity: 0.5;
        }
     }
   }
</style>
<script>

import axios from 'axios'
import Cookies from 'js-cookie';

    export default {
    	name: 'tables',
        data () {
            return {
            	
            }
        },
        mounted(){
           
        },
        methods:{
            // fangyuaData(){
            //     let _this = this;
            //     _this.loading = true;
            //       axios({
            //           method:'post',
            //           url:'/api/adminname2',
            //           headers:{Authorization:'Bearer '+Cookies.set('keya')},
            //        })
            //       .then(function (res) {
            //          _this.loading = false;
            //       })
            //       .catch(function (err) {
            //           _this.$Notice.error({title: '房源跟进错误'});
            //       })
            // }
        }
    }
</script>