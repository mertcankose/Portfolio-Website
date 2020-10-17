<template>
  <div class="menu-list">
    <div class="header-mobile-buttons" v-if="$mq === 'mobile'">
      <button
        class="header-hamburger"
        @click="menuMobileOpen = !menuMobileOpen"
        v-if="!menuMobileOpen"
      >
        <HamburgerMenu />
      </button>
      <button
        class="header-close"
        v-if="menuMobileOpen"
        @click="menuMobileOpen = !menuMobileOpen"
      >
        <CloseMenu />
      </button>
    </div>

    <ul
      :class="[$mq === 'mobile' ? 'mobileList' : 'normalList']"
      :style="[menuMobileOpen ? openMobileStyle : {}]"
    >
      <li>
        <a href="#">Work</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <div class="resume-container">
          <router-link to="/resume.pdf" tag="a">RESUME</router-link>
        </div>
      </li>
      <SocialMedia v-if="$mq === 'mobile'" class="social-media" />
    </ul>

    <label for="checkbox" class="checkbox-input">
      <input type="checkbox" name="checkbox" id="checkbox" />
      <span class="checkbox"></span>
    </label>
  </div>
</template>

<script>
import HamburgerMenu from "../../assets/icons/menu.svg";
import CloseMenu from "../../assets/icons/close.svg";
import SocialMedia from "../../components/Constant/SocialMedia.vue";
export default {
  name: "HeaderMenu",
  components: {
    HamburgerMenu,
    CloseMenu,
    SocialMedia
  },
  data() {
    return {
      menuMobileOpen: false,
      openMobileStyle: {
        opacity: 1,
        transform: "translateY(0)",
        pointerEvents: "auto"
      }
    };
  }
};
</script>

<style scoped lang="scss">
.menu-list {
  display: flex;
  align-items: center;
  height: 10vh;
  @media (max-width: 649px) {
    height: 6vh;
  }
  .header-hamburger {
    svg {
      width: 32px;
      height: 32px;
    }
  }
  .header-close {
    svg {
      width: 32px;
      height: 32px;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 22px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .normalList {
    display: flex;
    li {
      margin-left: 8px;
      margin-right: 8px;
      display: flex;
      color: var(--h-menu-item);
      justify-content: center;
      align-items: center;
      height: var(--finger-size);
      a {
        padding-left: 14px;
        padding-right: 14px;
        @media (max-width: 900px) {
          padding-left: 10px;
          padding-right: 10px;
          font-size: 18px;
        }
      }
      @media (max-width: 900px) {
        margin-left: 6px;
        margin-right: 6px;
      }
      &:hover {
        color: var(--h-menu-item-hover);
      }
    }
    .resume-container {
      border: 0.1rem solid var(--h-resume-border);
      color: var(--h-resume);
      height: calc(var(--finger-size) - 6px);
      margin-left: 20px;
      border-radius: 5px;
      transition: 250ms background-color;
      &:hover {
        background-color: var(--h-resume-hover-background);
        color: var(--h-resume-hover-text);
      }
      @media (max-width: 900px) {
        margin-left: 10px;
        //display: none;
      }
    }
  }
  .mobileList {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 105%;
    left: 0;
    right: 0;
    background-color: #fff;
    border-radius: 8px;
    opacity: 0;
    transform: translateY(-20%);
    transition: 0.4s;
    pointer-events: none;
    font-size: 28px;
    padding-bottom: 10px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 8px;
      margin-bottom: 6px;
      height: calc(var(--finger-size) + 6px);
      color: var(--h-menu-item);
      a {
        width: 100%;
      }
    }
    .resume-container {
      border: 0.1rem solid var(--h-resume-border);
      color: var(--h-resume);
      //height: var(--finger-size);
      height: calc(var(--finger-size) - 8px);
      margin-left: 20px;
      border-radius: 5px;
      transition: 250ms background-color;
      &:hover {
        background-color: var(--h-resume-hover-background);
        color: var(--h-resume-hover-text);
      }
      @media (max-width: 900px) {
        margin-left: 10px;
        //display: none;
      }
    }
  }

  //SAME MOBILE AND DESKTOP
  .checkbox-input {
    display: inline-block;
    height: var(--finger-size);
    padding-left: 14px;
    padding-right: 14px;
    display: flex;
    margin-left: 24px;
    margin-right: 8px;
    place-items: center;
    cursor: pointer;
    @media (max-width: 900px) {
      padding-left: 8px;
      padding-right: 8px;
      margin-left: 12px;
    }
    @media (max-width: 649px) {
      order: -1;
      margin-right: 16px;
    }
    input {
      display: none;
      &:checked + .checkbox {
        background-color: var(--h-mode-button-light-background);
        &::before {
          left: 25px;
        }
      }
    }
    .checkbox {
      width: 53px;
      min-width: 53px;
      height: 28px;
      border-radius: 14px;
      background-color: var(--h-mode-button-dark-background);
      display: inherit;
      position: relative;
      transition: 400ms background-color;
      &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--h-mode-button-circle);
        top: 4px;
        left: 4px;
        bottom: 4px;
        transition: 400ms left;
      }
    }
  }
}
</style>
