import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/app.scss";
import VueMq from "vue-mq"; //Media Query
import Vuelidate from "vuelidate"; //FOR FORMS VALIDATION
//FOR SCROLL
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 650,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
});

Vue.use(Vuelidate);
Vue.use(axios);

Vue.use(AOS);
AOS.init();

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
