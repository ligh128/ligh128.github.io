import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'
import './assets/main.css'
import Notifications from '@kyvg/vue3-notification'


import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App).use(Vue3Lottie)

app.use(router)

app.component('Datepicker', Datepicker);

app.mount('#app')
