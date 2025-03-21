import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

const app = createApp(App);

app.config.globalProperties.$session = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    remove(key) {
        localStorage.removeItem(key);
    },
    clear()
    {
        localStorage.clear();
    }
}

const token = app.config.globalProperties.$session.get('token') != undefined ? app.config.globalProperties.$session.get('token') : null;
axios.defaults.baseURL = "http://127.0.0.1:8084/api/V1/";
axios.defaults.headers.common['Authorization'] = token;

app.use(router);
app.mount('#app')
