<template>
  <div class="header" :class="{ 'hidden-header': !showNavbar }">
    <div class="logo-container">
      <Logo />
    </div>
    <div class="menu-container">
      <Menu />
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Menu from "./Menu.vue";
const OFFSET = 60;
export default {
  name: "Header",
  components: {
    Logo,
    Menu
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  //border-bottom: 1px solid var(--h-border-bottom);
  //position: relative;
  height: 75px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 500;
  position: fixed;
  box-shadow: 0 2px 15px var(--h-box-shadow);
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
  background-color: var(--h-background);
  @media (max-width: 649px) {
    height: 65px;
  }
  .logo-container {
    margin-left: 50px;
    @media (max-width: 900px) {
      margin-left: 18px;
    }
  }
  .menu-container {
    margin-right: 50px;
    @media (max-width: 900px) {
      margin-right: 18px;
    }
  }
}
.hidden-header {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
