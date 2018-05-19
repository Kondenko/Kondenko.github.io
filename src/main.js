import Vue from 'vue'
import App from './components/App.vue'

var name = "Vladimir Kondenko"

new Vue({
  el: "#app",
  data: {
      avatar: require("./assets/img_avatar.png"),
      name: "Vladimir Kondenko"
  },
  render: h => h(App)
})
