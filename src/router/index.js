import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import NorthernProvince from '../views/NorthernProvince.vue'
import SouthernProvince from '../views/SouthernProvince.vue'
import WesternProvince from '../views/WesternProvince.vue'
import EasternProvince from '../views/EasternProvince.vue'
import KigaliProvince from '../views/KigaliProvince.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
      {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
     {
        path: '/Kigali',
        name: 'Kigali',
        component: KigaliProvince,
    },
    {
        path: '/West',
        name: 'West',
        component: WesternProvince,
    },{
        path: '/East',
        name: 'East',
        component: EasternProvince,
    },
{
        path: '/South',
        name: 'South',
        component: SouthernProvince,
    },
    {
        path: '/North',
        name: 'North',
        component: NorthernProvince,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router