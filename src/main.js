import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./styles/app.scss";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 650,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
