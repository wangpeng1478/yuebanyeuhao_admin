export default {
  install(Vue, options) {
    Vue.prototype.$api = opts => {
      if(opts == undefined){
      	return 'http://47.98.155.165/api'
      }
    }
  }
}