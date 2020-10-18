<template>
  <div class="container">
    <SocialMediaStick class="social-media" />
    <Header />
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
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
}
.social-media {
  position: fixed;
  bottom: 0;
  left: 30px;
  width: 44px;

  @media (max-width: 900px) {
    left: 4px;
    right: auto;
  }
  @media (max-width: 649px) {
    display: none;
  }
}
</style>
