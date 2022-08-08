import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import './style/GlobalFile.css'

createApp(App)
  .use(mdiVue, {
    icons: mdijs,
  })
  .use(store)
  .use(router)
  .mount('#app')
