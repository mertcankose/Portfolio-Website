<template>
  <div class="works-container">
    <h1>WORKS</h1>
    <div class="works-boxes">
      <Projects class="projects-box" />
      <Toolkit class="toolkit-box" />
    </div>
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
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: 90vh;
  margin-bottom: 100px;
  @media (max-width: 649px) {
    width: 100%;
    height: auto;
  }
  h1 {
    text-align: center;
    color: var(--g-heading);
  }
  .works-boxes {
    display: flex;
    justify-content: space-around;

    @media (max-width: 649px) {
      flex-direction: column;
    }
    .projects-box {
      min-width: 85%;
      height: 80vh;
      @media (max-width: 649px) {
        margin-left: auto;
        margin-right: auto;
        height: 70vh;
        width: 90%;
      }
    }
    .toolkit-box {
      min-width: 80px;
      height: 80vh;
      @media (max-width: 649px) {
        min-width: 90%;
        margin-left: auto;
        margin-right: auto;
        height: 10vh;
        margin-top: 80px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
