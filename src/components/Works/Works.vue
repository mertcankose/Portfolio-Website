<template>
  <div class="works-container" id="works">
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
  justify-content: space-evenly;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
    height: auto;
  }
  @media (max-width: 649px) {
    width: 100%;
  }
  .projects-box {
    max-width: 90%;
    @media (max-width: 900px) {
      margin-left: auto;
      margin-right: auto;
      //width: 85%;
    }
  }
  .toolkit-box {
    max-width: 80px;
    @media (max-width: 900px) {
      min-width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 40px;
      margin-bottom: 10px;
      order: -1;
    }
  }
}
</style>
