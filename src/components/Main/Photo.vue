<template>
  <div class="photo-container">
    <!--
    <img
      src="../../assets/illustrations/black-illustration.png"
      alt="mertcan"
    />
    -->
    <Black />
  </div>
</template>

<script>
import Black from "../../assets/illustrations/black.svg";
export default {
  name: "MainPhoto",
  components: {
    Black
  }
};
</script>

<style scoped lang="scss">
.photo-container {
  display: flex;
  place-items: center;

  img {
    width: 100%;
    max-width: 32vw;
    height: auto;
    border-radius: 10px;
    //background-color: #fbfbfd;
    @media (max-width: 900px) {
      max-width: 70vw;
    }
  }
  svg {
    max-width: 32vw;
    height: auto;
    color: var(--m-photo-black-illustration);
    @media (max-width: 900px) {
      max-width: 60vw;
      margin-top: 60px;
    }
  }
}
</style>
