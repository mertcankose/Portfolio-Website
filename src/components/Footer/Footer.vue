<template>
  <div class="footer-container">
    <SocialMediaStick v-if="$mq === 'mobile'" />
    <div class="footer">
      <span>Copyright © Mertcan Kose</span>
      <span>Made with 💖 in Turkey</span>
    </div>
  </div>
</template>

<script>
import SocialMediaStick from "../Constant/SocialMedia.vue";
export default {
  name: "Footer",
  components: {
    SocialMediaStick
  }
};
</script>

<style scoped lang="scss">
.footer-container {
  margin-bottom: 12px;
  .footer {
    height: 80px;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--f-color);
    @media (max-width: 649px) {
      flex-direction: column;
      justify-content: space-evenly;
    }
    span {
      &:nth-child(1) {
        border-right: 1px solid var(--f-border-left-color);
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
}
</style>
