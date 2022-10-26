import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App/App.vue';

import '../styles/styles.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const app = new Vue({
  el: '#app',
  render: (h) => h(App),
});

