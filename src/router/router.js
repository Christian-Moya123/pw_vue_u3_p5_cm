import { createRouter, createWebHashHistory } from 'vue-router'

//import EstudainteActualizar from '../pages/EstudainteActualizar'
// import EstudianteConsultar from '../pages/EstudianteConsultar'
// import EstudianteEliminar from '../pages/EstudianteEliminar'
// import EstudianteGuardar from '../pages/EstudianteGuardar'
//import NotFundPage from '../pages/NotFundPage'

const routes = [
    {
        path: '/actualizar',
        component: () => import("../pages/EstudainteActualizar")
    },
    {
        path: '/consultar',
        component: () => import("../pages/EstudianteConsultar")
    },
    {
        path: '/eliminar',
        component: () => import("../pages/EstudianteEliminar")
    },
    {
        path: '/guardar',
        component: () => import("../pages/EstudianteGuardar")
    },

    {
        path: '/:pathMatch(.*)*',
        component: () => import("../pages/NotFundPage")
    }




]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router;