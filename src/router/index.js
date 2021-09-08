import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import postForm from "@/views/postForm.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/postform",
    name: "postForm",
    component: postForm,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
