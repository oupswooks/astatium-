import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "material-design-iconic-font/dist/css/material-design-iconic-font.css";

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
