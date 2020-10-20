<template>
  <div class="social-box">
    <ul>
      <li>
        <a href="https://github.com/mertcankose" target="_blank">
          <Github />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/mertcan-k%C3%B6se-b10623158/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/mertcankose_" target="_blank">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://codepen.io/mertcankose" target="_blank">
          <Codepen />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Github from "../../assets/icons/github.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Codepen from "../../assets/icons/codepen.svg";
export default {
  name: "SocialMediaStick",
  components: {
    Github,
    Linkedin,
    Twitter,
    Codepen
  },

  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.social-box {
  z-index: 20;
  @media (max-width: 649px) {
    margin-top: 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 649px) {
      flex-direction: row;
      justify-content: center;
    }
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 90px;
      margin: 0px auto;
      background-color: var(--g-social-media-stick);
      @media (max-width: 649px) {
        display: none;
      }
    }
    li {
      //margin-bottom: 10px;
      display: flex;
      justify-content: center;
      margin-bottom: 4px;
      color: #222f3e;
      @media (max-width: 649px) {
        margin-bottom: 0;
        margin-left: 30px;
      }
      &:hover {
        svg {
          transform: scale(1.4);
          transition: 300ms transform;
          color: var(--g-social-media-svg-hover);
        }
      }
      &:nth-last-child(1) {
        margin-bottom: 10px;
        @media (max-width: 649px) {
          margin-bottom: 0;
        }
      }
      a {
        padding: 12px;
        svg {
          width: 26px;
          height: 26px;
          color: var(--g-social-media-svg);
          @media (max-width: 1200px) {
            width: 22px;
            height: 22px;
          }
          @media (max-width: 649px) {
            color: var(--g-social-media-svg-mobile);
          }
        }
      }
    }
  }
}
</style>
