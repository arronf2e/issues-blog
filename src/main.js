// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vodal from 'vodal'
import store from './store'
import "vodal/fade.css"
import "vodal/rotate.css"

Vue.component(Vodal.name, Vodal)

console.log(store.modules)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
