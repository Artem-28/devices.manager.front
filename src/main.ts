import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';
import { Quasar, Notify } from 'quasar';
import './quasar'
import authUserApi from "@/store/entities/AuthUser/api";

async function init () {
    await authUserApi.authUser()
    createApp(App)
        .use(Quasar, {
            plugins: { Notify }
        })
        .use(store)
        .use(router)
        .mount('#app')
}
init()
