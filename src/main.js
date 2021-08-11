import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
