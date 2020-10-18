<template>
  <div class="works-container">
    <Projects class="projects-box" />
    <Toolkit class="toolkit-box" />
  </div>
</template>

<script>
import Projects from "./Projects.vue";
import Toolkit from "./Toolkit.vue";
export default {
  name: "Works",
  components: {
    Projects,
    Toolkit
  }
};
</script>

<style scoped lang="scss">
.works-container {
  display: flex;
  justify-content: space-around;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;

  @media (max-width: 649px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  .projects-box {
    min-width: 85%;
    @media (max-width: 649px) {
      margin-left: auto;
      margin-right: auto;
      width: 90%;
    }
  }
  .toolkit-box {
    min-width: 80px;
    @media (max-width: 649px) {
      min-width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 80px;
      margin-bottom: 10px;
      order: -1;
    }
  }
}
</style>
