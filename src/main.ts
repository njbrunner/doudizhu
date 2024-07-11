import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
// import { getAnalytics } from "firebase/analytics";

import 'primevue/resources/themes/aura-dark-lime/theme.css'

import App from './App.vue'
import router from './router'

// const analytics = getAnalytics(app);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
