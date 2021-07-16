import './index.css'

import { createApp } from 'vue'; 
import router from '@/router'; 
import store from '@/store'; 
import App from '@/App'; 

const app = createApp(App); 
app.use(router).mount('#app');
