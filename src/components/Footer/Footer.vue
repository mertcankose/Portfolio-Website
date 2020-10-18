<template>
  <div class="footer">
    <span>Copyright © Mertcan Kose</span>
    <span>Made with 💖 in Turkey</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  height: 80px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 649px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
  span {
    &:nth-child(1) {
      border-right: 1px solid #a2b8b0;
      padding-right: 12px;
      @media (max-width: 649px) {
        border: none;
        padding-right: 0;
      }
    }
    &:nth-child(2) {
      padding-left: 12px;
      @media (max-width: 649px) {
        padding-left: 0;
      }
    }
  }
}
</style>
