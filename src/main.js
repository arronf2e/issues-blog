// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vodal from 'vodal'
import "vodal/fade.css"
import "vodal/rotate.css"
import Toast from './components/toast'

Toast.config({
  duration: 3000,
  position:'top center'
})

Vue.use(Toast)
Vue.component(Vodal.name, Vodal)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
