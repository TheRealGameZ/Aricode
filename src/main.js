import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/src/assets/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'


createApp(App).use(router).mount('#app');