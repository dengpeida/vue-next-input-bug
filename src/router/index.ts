import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'; 
const routes: RouteRecordRaw[] = [
    { path: '/', name: 'index', component: () => import('@/views/index')}
]; 
const router = createRouter({ history: createWebHistory(), routes, }); 
export default router;