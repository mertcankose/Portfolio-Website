<template>
  <div class="main-container">
    <div class="introduction-container">
      <Introduction />
    </div>
    <div class="photo-container">
      <Photo />
    </div>
  </div>
</template>

<script>
import Introduction from "./Introduction.vue";
import Photo from "./Photo.vue";
export default {
  name: "Main",
  components: {
    Introduction,
    Photo
  }
};
</script>

<style scoped lang="scss">
.main-container {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 85%;
  min-height: 80vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 649px) {
    flex-direction: column;
    min-height: 80vh;
  }
  .introduction-container {
    order: 2;
    max-width: 50%;
    @media (max-width: 900px) {
      max-width: 60%;
    }
    @media (max-width: 649px) {
      max-width: 80%;
    }
  }
  .photo-container {
    order: 1;
  }
}
</style>
