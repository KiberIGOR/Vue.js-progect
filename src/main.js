import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router';


Vue.use(VueRouter);

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})


// Vue.config.productionTip = false



new Vue({
  router: router,
  render: h => h(App),
  
}).$mount('#app')