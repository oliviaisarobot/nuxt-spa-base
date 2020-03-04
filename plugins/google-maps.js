import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

if (process.env.googleApiKey !== '') {  
  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.googleApiKey,
      language: 'hu',
      region: 'HU'
    }
  })
}
