import Vue from 'vue'
import router from './router.js'
import App from './app.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})