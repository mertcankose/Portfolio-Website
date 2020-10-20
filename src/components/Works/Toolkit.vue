<template>
  <div class="toolkit-container">
    <h1 v-if="$mq === 'tablet' || $mq === 'mobile'">TOOLKIT</h1>
    <div class="toolkit-container-box">
      <div
        v-for="(item, index) in toolkitItems"
        :key="index"
        class="toolkit-container-box-item"
        data-aos="fade-up"
        data-aos-offset="80"
        data-aos-delay="40"
        data-aos-duration="400"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <DynamicIcon
          :icon="item.baseName"
          :class="item.baseName"
          loading="lazy"
        />
        <span>{{ item.showName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { toolkitMixin } from "./toolkitMixin.js";
import DynamicIcon from "../Helpers/DynamicIcon.vue";
export default {
  name: "Toolkit",
  mixins: [toolkitMixin],
  components: {
    DynamicIcon
  }
};
</script>
<style scoped lang="scss">
.toolkit-container {
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 24px;
    letter-spacing: 10px;
    color: var(--w-toolkit-heading);
    background-image: linear-gradient(
      0deg,
      var(--w-toolkit-background-gradient-1),
      var(--w-toolkit-background-gradient-2)
    );
    background-size: 10px 10px;
    background-repeat: repeat-x;
    background-position: bottom;
  }
  &-box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 80px;
    align-items: center;
    position: relative;
    @media (max-width: 900px) {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      gap: 18px;
      flex-wrap: wrap;
      padding-left: 4px;
      padding-right: 4px;
      text-align: center;
      margin-top: 36px;
    }
    &::after {
      content: "TOOLKIT";
      position: absolute;
      right: -130px;
      font-size: 24px;
      letter-spacing: 10px;
      transform: rotate(90deg);
      color: var(--w-toolkit-after);
      //padding-left: 4px;
      //padding-right: 4px;
      background-image: linear-gradient(
        0deg,
        var(--w-toolkit-background-gradient-1),
        var(--w-toolkit-background-gradient-2)
      );
      background-size: 10px 10px;
      background-repeat: repeat-x;
      background-position: bottom;
      @media (max-width: 1200px) {
        right: -110px;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
    svg {
      width: 54px;
      height: 54px;
      @media (max-width: 1200px) {
        margin-bottom: 0;
        width: 40px;
        height: 40px;
      }
    }
    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media (max-width: 900px) {
        margin-left: 16px;
      }
      span {
        transform: translateY(100%);
        z-index: -10;
        font-size: 15px;
        margin-top: 6px;
        color: var(--w-toolkit-span-hidden);
        @media (max-width: 900px) {
          transform: translateY(0);
          color: var(--w-toolkit-span);
          font-size: 10px;
        }
      }
      &:hover {
        span {
          transform: translateY(0%);
          transition: 400ms transform ease;
          white-space: nowrap;
          color: var(--w-toolkit-span-hover);
        }
      }
    }
    .html {
      color: var(--g-html);
      &:hover {
      }
    }
    .css {
      color: var(--g-css);
    }
    .js {
      color: var(--g-js);
    }
    .nodejs {
      color: var(--w-toolkit-nodejs);
    }
    .express {
      color: var(--w-toolkit-express);
    }
    .mongodb {
      color: var(--w-toolkit-mongodb);
    }
    .vscode {
      color: var(--g-vscode);
    }
    .vue {
      color: var(--g-vue);
    }
  }
}
</style>
