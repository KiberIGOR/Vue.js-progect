import Vue from 'vue'
import App from './App.vue'
import router from './router/router';



Vue.use(router);
// Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')