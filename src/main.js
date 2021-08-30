import Vue from "vue"
import App from "./App.vue"
import "./firebase.js"
import router from "./router"
Vue.config.productionTip = false
/* ここから */
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faHeart)

Vue.component("font-awesome-icon", FontAwesomeIcon)
/* ここまで */

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
