import Vue from 'vue'
import App from './components/App.vue'

import VModal from "vue-js-modal";

Vue.use(VModal, { dynamic: true });

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount('#app')
