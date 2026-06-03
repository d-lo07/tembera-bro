import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import Destination from '../views/Destination.vue'
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
        path: '/destination',
        name: 'Destination',
        component: Destination,
    },
    {
        path: '/kigali',
        name: 'Kigali',
        component: KigaliProvince,
    },
    {
        path: '/west',
        name: 'West',
        component: WesternProvince,
    },
    {
        path: '/east',
        name: 'East',
        component: EasternProvince,
    },
    {
        path: '/south',
        name: 'South',
        component: SouthernProvince,
    },
    {
        path: '/north',
        name: 'North',
        component: NorthernProvince,
    },
]

// assign alternating background meta for routes: even -> white, odd -> green
routes.forEach((r, i) => {
    r.meta = r.meta || {}
    r.meta.bg = i % 2 === 0 ? 'white' : 'green'
})

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router