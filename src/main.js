import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)

import getVant from './plugins'
getVant(app)

app.use(store)
app.use(router)
app.mount('#app')
