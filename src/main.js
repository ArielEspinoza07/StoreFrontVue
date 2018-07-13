// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import swal from 'sweetalert';

// Services
import StoreService from './services/StoreService'
import ArticleService from "./services/ArticleService";


Vue.config.productionTip = false;

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 404) {
    router.push('/404');
  }
  else if (error.response.status === 500) {
    router.push('/500');
  }
});

Vue.prototype.$axios = axios;
Vue.prototype.$storeService = new StoreService(axios);
Vue.prototype.$articleService = new ArticleService(axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
