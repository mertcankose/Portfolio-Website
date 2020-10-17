<template>
  <div class="project-box">
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
  </div>
</template>

<script>
import ProjectBox from "./ProjectBox.vue";
export default {
  name: "Project",
  components: {
    ProjectBox
  }
};
</script>

<style scoped lang="scss">
.project-box {
}
</style>
