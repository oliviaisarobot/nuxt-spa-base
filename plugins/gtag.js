import Vue from 'vue'
import VueGtag from 'vue-gtag'

if (process.env.gtagKey !== '') {  
  Vue.use(VueGtag, {
    config: { id: process.env.gtagKey }
  })
}
