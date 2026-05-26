import { createRoute , createWebHistory} from 'vue-router';
import Homeview  from'../views/Helloworldview.vue'



const routes =[
    {
        path:'/',
        name:'home',
        Component:HomeView,
    },
];
 
const router =createRoute({
    history: createWebHistory(),
    routes,
});
export default router;