import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '/src/assets/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App).use(router).mount('#app');