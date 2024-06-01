import { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import HomeLayout from '../layouts/HomeLayout.vue'
import Team from '../pages/Team.vue'
import Detail from '../pages/Detail.vue'
import NotFound from '../pages/404.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-layout',
    component: HomeLayout,
    children: [
      {
        path: '/',
        name: 'index',
        component: Home
      },
      {
        path: '/team',
        name: 'team',
        component: Team
      },
      {
        path: '/team/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
]

export default routes
