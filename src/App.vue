<template>
  <div class="container">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
export default {
  name: "App",
  components: {
    Header,
    Main
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.container {
}
</style>
