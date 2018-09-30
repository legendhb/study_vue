import Vue from 'vue'
import App from './App'
import router from './router'
import Passport from './passport'
Vue.config.productionTip = false

Passport.init();
new Vue({
  el: "#app",
  router,
  render: h => h(App),
  data: {
    passport: Passport
  }
});