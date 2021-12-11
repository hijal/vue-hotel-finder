import { createApp } from 'vue';
import useVuelidate from '@vuelidate/core';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap';

import '@/assets/css/styles.css';
import router from './router/index.js';
import App from './App.vue';

const app = createApp(App);

app.use(useVuelidate);
app.use(BootstrapVue3);
app.use(router);
app.mount('#app');
