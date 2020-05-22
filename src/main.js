import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import myFilter from './plugins/myFilter'

Vue.config.productionTip = false

new Vue({
  vuetify,
  myFilter,
  render: h => h(App)
}).$mount('#app')
