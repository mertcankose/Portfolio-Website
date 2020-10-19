<template>
  <div class="photo-container">
    <img
      src="../../assets/illustrations/programmer-mertcan-no-white.png"
      alt="mertcan"
    />
  </div>
</template>

<script>
export default {};
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
    @media (max-width: 900px) {
      max-width: 70vw;
    }
  }
}
</style>
