import { createRouter, createWebHistory } from 'vue-router'

// Import Components
import CreateMenu from '../components/Menus/CreateMenu.vue'
import EditMenu from '../components/Menus/EditMenu.vue'
import ShowMenu from '../components/Menus/ShowMenu.vue'
import MenuIndex from '../components/Menus/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Menus',
      name: 'Menu',
      component: MenuIndex
    },
    {
      path: '/Menus/create',
      name: 'Menu-create',
      component: CreateMenu
    },
    {
      path: '/Menus/edit',
      name: 'Menu-edit',
      component: EditMenu
    },
    {
      path: '/Menus',
      name: 'Menu',
      component: ShowMenu
    }
  ]
})

export default router