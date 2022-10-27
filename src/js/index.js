import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App/App.vue';
import store from './store.js';

import '../styles/styles.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  el: '#app',
  store: store,
  render: (h) => h(App),
});


