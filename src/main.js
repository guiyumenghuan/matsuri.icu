import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import {createGtm} from '@gtm-support/vue-gtm'
import moment from 'moment'

moment.locale('zh-cn');

const app = createApp(App)
app.use(router);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$moment =moment;
app.use(createGtm({id: process.env.VUE_APP_GTM, vueRouter: router}));
app.mount('#app')