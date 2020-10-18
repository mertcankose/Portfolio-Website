<template>
  <div class="project-card">
    <a :href="siteLink" class="site-link-box" target="_blank">
      <img :src="require(`../../assets/workPhotos/${this.photo}.png`)" alt="" />
    </a>
    <div class="info-box">
      <div class="info-box-head">
        <a :href="siteLink" target="_blank">
          <h1>{{ heading }}</h1></a
        >
        <p>{{ description }}</p>
      </div>
      <div class="info-box-bottom">
        <div class="info-box-bottom-technologies">
          <span v-for="(item, index) in technologies" :key="index">
            {{ item }}
          </span>
        </div>
        <div class="info-box-links">
          <a :href="siteLink" target="_blank">
            <ExternalIcon />
          </a>
          <a :href="githubLink" target="_blank">
            <Github />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalIcon from "../../assets/icons/external.svg";
import Github from "../../assets/icons/github.svg";
export default {
  name: "ProjectBox",
  components: {
    ExternalIcon,
    Github
  },
  props: {
    siteLink: {
      type: String,
      require: true,
      default: "https://github.com/mertcankose"
    },
    photo: {
      type: String,
      require: true
      //default: "default-image"
    },
    heading: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    technologies: {
      type: Array,
      require: true
    },
    githubLink: {
      type: String,
      require: true
    }
  }
};
</script>

<style scoped lang="scss">
.project-card {
  //border: 2px solid #bcdafa;
  background-color: #e9f3ff;
  padding: 14px;
  border-radius: 8px;
  .site-link-box {
    border-radius: 8px;
    display: inline-block;
    position: relative;
    width: 100%;
    padding-top: 56.5%; /* 4:3 Aspect Ratio */
    img {
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      mix-blend-mode: multiply;
      &:hover {
        mix-blend-mode: normal;
      }
      //min-height: 250px;
    }
  }
  .info-box {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
    min-height: 200px;
    &-head {
      h1 {
        font-size: 1.6rem;
      }
      p {
        font-size: 17px;
        line-height: 28px;
      }
    }
    &-bottom {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &-technologies {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        span {
          font-size: 14px;
          color: rgb(173, 169, 169);
          &:not(:nth-child(1)) {
            margin-left: 12px;
          }
        }
      }
    }

    &-links {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        padding: 5px;
        &:nth-child(2) {
          margin-left: 8px;
        }
        &:hover {
          color: #8395a7;
        }
      }
      svg {
        width: 22px;
        height: 22px;

        @media (max-width: 649px) {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>
