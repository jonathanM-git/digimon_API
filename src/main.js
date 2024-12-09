import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const app = createApp(App).use(VueSplide)

app.use(router)

app.mount('#app')
