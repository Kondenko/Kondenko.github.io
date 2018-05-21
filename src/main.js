import Vue from 'vue'
import App from './components/App.vue'

var name = "Vladimir Kondenko"

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount('#app')
