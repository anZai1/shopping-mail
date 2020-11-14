import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import("../view/home/Home.vue");
const Category=()=>import("../view/category/Category.vue");
const Profile=()=>import("../view/profile/Profile.vue");
const Shopping=()=>import("../view/shopcar/Shopcar.vue");
const Detail=()=>import("../view/detail/Detail.vue")
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/shopping",
    component:Shopping
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/detail",
    component:Detail
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
