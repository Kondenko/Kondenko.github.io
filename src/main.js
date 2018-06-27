import Vue from 'vue'
import App from './components/App.vue'
import VModal from "vue-js-modal";
import VueAnalytics from 'vue-analytics'
import VueScrollTo from 'vue-scrollto'

Vue.use(VModal, { dynamic: true });
Vue.use(VueAnalytics, {
  id: 'UA-120562930-1',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
});
Vue.use(VueScrollTo)

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount('#app')
