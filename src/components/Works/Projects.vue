<template>
  <div class="projects-out">
    <h1>WORKS</h1>
    <div class="projects-container">
      <ProjectBox
        v-for="(item, index) in works"
        :key="index"
        class="project-box"
        :siteLink="item.siteLink"
        :photo="item.photo"
        :heading="item.heading"
        :description="item.description"
        :githubLink="item.githubLink"
        :technologies="item.technologies"
      />
    </div>
  </div>
</template>

<script>
import ProjectBox from "./ProjectBox.vue";
import { workMixin } from "./workMixin.js";
export default {
  name: "Project",
  mixins: [workMixin],
  components: {
    ProjectBox
  }
};
</script>

<style scoped lang="scss">
.projects-out {
  h1 {
    text-align: center;
    color: var(--w-heading);
    margin-bottom: 44px;
    margin-top: 40px;
  }
}
.projects-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 649px) {
    padding-left: 4px;
    padding-right: 4px;
  }
  .project-box {
    width: 30%;
    height: auto;
    @media (max-width: 1200px) {
      width: 45%;
    }
    @media (max-width: 649px) {
      width: 100%;
    }
  }
}
</style>
