import Vue from "vue"
import VueRouter from "vue-router"
import postForm from "@/views/postForm.vue"

Vue.use(VueRouter)

const routes = [
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
