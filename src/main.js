import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  render: h => h(App),
  data: {
    todoList: [
      {id: 0, text: 'xxxooo'},
      {id: 1, text: 'yyy'},
      {id: 3, text: 'zzz'}
    ]
  }
});