import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue';

import DigimonsPage from './pages/DigimonsPage.vue';
import SingleDigimonPage from './pages/SingleDigimonPage.vue';
import DescripcionPage from './pages/DescripcionPage.vue';
import CamposPage from './pages/CamposPage.vue';
import HabilidadesPage from './pages/HabilidadesPage.vue';
import EvolucionesPrevias from './pages/EvolucionesPrevias.vue';
import EvolucionesSiguientes from './pages/EvolucionesSiguientes.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component : HomePage,
      },
      {
        path: '/digimons',
        name: 'digimon',
        component : DigimonsPage,
      },
      {
        path: '/digimon/:idrouter',
        name: "SingleDigimonPage",
        component: SingleDigimonPage
      },
      {
        path: '/descripcion/:idrouter',//Esto sirve para la ruta que pones en la url arriba
        name: "Descripcion",
        component: DescripcionPage
      },
      {
        path: '/campos/:idrouter',//Esto sirve para la ruta que pones en la url arriba
        name: "Campos",
        component: CamposPage
      },
      {
        path: '/habilidades/:idrouter',//Esto sirve para la ruta que pones en la url arriba
        name: "Habilidades",
        component: HabilidadesPage 
      },
      {
        path: '/evolucionesPrevias/:idrouter',//Esto sirve para la ruta que pones en la url arriba
        name: "EvolucionesPrevias",
        component: EvolucionesPrevias
      },
      {
        path: '/evolucionesSiguientes/:idrouter',//Esto sirve para la ruta que pones en la url arriba
        name: "EvolucionesSiguientes",
        component: EvolucionesSiguientes
      },
    ],
  });
  
  export default router