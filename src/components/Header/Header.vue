<template>
  <div class="header">
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
export default {
  name: "Header",
  components: {
    Logo,
    Menu
  }
};
</script>

<style scoped lang="scss">
.header {
  //border-bottom: 1px solid var(--h-border-bottom);
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 649px) {
    height: 75px;
  }
  .logo-container {
    margin-left: 50px;
    @media (max-width: 900px) {
      margin-left: 30px;
    }
  }
  .menu-container {
    margin-right: 50px;
    @media (max-width: 900px) {
      margin-right: 30px;
    }
  }
}
</style>
