<template>
  <div id="app-container">
    <SocialMediaStick class="social-media" />
    <Header class="header" />
    <Main />
    <Works />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
import Works from "./components/Works/Works.vue";
import Contact from "./components/Contact/Contact.vue";
import Footer from "./components/Footer/Footer.vue";
import SocialMediaStick from "./components/Constant/SocialMedia.vue";
//SCROLLING
import AOS from "aos";
export default {
  name: "App",
  components: {
    SocialMediaStick,
    Header,
    Main,
    Works,
    Contact,
    Footer
  },
  data() {
    return {};
  },
  created() {
    AOS.init();

    //theme
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.getElementsByTagName("html")[0];
    element.classList.add(onpageLoad);
  }
};
</script>

<style scoped lang="scss">
#app-container {
  display: flex;
  flex-direction: column;
  .social-media {
    position: fixed;
    bottom: 0;
    left: 20px;
    @media (max-width: 900px) {
      left: 4px;
      right: auto;
    }
    @media (max-width: 649px) {
      display: none;
    }
  }
}
</style>
