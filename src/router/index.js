import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CertificatsView from "@/views/CertificatsView.vue";
import ContactView from "@/views/ContactView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import DatenschutzView from "@/views/DatenschutzView.vue";
import ImpressumView from "@/views/ImpressumView.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: CertificatsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
