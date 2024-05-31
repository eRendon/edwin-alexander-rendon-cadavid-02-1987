import { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import HomeLayout from '../layouts/HomeLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-layout',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: Home
      }
    ]
  }
]

export default routes
