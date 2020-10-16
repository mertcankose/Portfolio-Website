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
  border-bottom: 1px solid var(--h-border-bottom);
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-container {
    margin-left: 50px;
  }
  .menu-container {
    margin-right: 50px;
  }
}
</style>
