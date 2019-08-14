import Vue from 'vue'

import VModal from "vue-js-modal"
import VueAnalytics from 'vue-analytics'
import VueScrollTo from 'vue-scrollto'
import VueCarousel from "@chenfengyuan/vue-carousel"

import App from './components/App.vue'
import Story from './components/Story.vue'

Vue.use(VueCarousel)
Vue.use(VModal, { dynamic: true })
Vue.use(VueAnalytics, {
  id: 'UA-120562930-1',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})
Vue.use(VueScrollTo)

const routes = {
 '/': App,
 '/story': Story
}

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || App
    }
  },
  render(h) { return h(this.ViewComponent) }
}).$mount('#app')