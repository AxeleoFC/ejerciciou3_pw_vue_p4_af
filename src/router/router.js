import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: "/actualizar",
        component: ()=> import ('../modulos/page/Vehiculo.vue')
    },
    {
        path: "/:pathMach(.*)*",
        component: ()=> import ('../modulos/')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

export default router