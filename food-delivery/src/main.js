import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import Vue3Geolocation from 'vue3-geolocation'
import VueTelInput from 'vue3-tel-input'

import 'vue3-tel-input/dist/vue3-tel-input.css'
import './style/GlobalFile.css'

createApp(App)
  .use(mdiVue, {
    icons: mdijs,
  })
  .use(store)
  .use(router)
  .use(VueTelInput)
  .use(Vue3Geolocation)
  .use(VueGoogleMaps, {
    load: {
      // enter your key google cloude ipa
      key: 'AIzaSyAPrYfUMqMO2GMAx98PgLhLCYMi0MdasNY',
    },
  })
  .mount('#app')
