import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(App)
})
