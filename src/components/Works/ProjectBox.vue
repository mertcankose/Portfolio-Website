<template>
  <div
    class="project-card"
    data-aos="fade-up"
    data-aos-offset="80"
    data-aos-delay="35"
    data-aos-duration="450"
    data-aos-mirror="true"
  >
    <a :href="siteLink" class="site-link-box" target="_blank">
      <img
        :src="require(`../../assets/workPhotos/${this.photo}.png`)"
        alt=""
        loading="lazy"
      />
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
  background-color: var(--w-project-card-background);
  padding: 16px 18px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px var(--w-project-card-box-shadow-1),
    -4px -5px 8px var(--w-project-card-box-shadow-2);
  @media (max-width: 649px) {
    padding: 12px 14px;
  }
  .site-link-box {
    border-radius: 8px;
    display: inline-block;
    position: relative;
    width: 100%;
    padding-top: 56.5%; /* Aspect Ratio */
    img {
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      mix-blend-mode: var(--w-project-card-image-mix-blend-type);
      transition: transform 400ms;
      &:hover {
        mix-blend-mode: normal;
        transform: scale(1.09, 1.16);
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
        color: var(--w-project-card-heading);
        @media (max-width: 900px) {
          font-size: 1.4rem;
        }
      }
      p {
        font-size: 17px;
        line-height: 28px;
        color: var(--w-project-card-description);
        @media (max-width: 900px) {
          font-size: 14px;
        }
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
          color: var(--w-project-card-technologies);
          &:not(:nth-child(1)) {
            margin-left: 12px;
          }
          @media (max-width: 900px) {
            font-size: 11px;
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
          svg {
            color: var(--w-project-box-svg-hover);
          }
        }
      }
      svg {
        width: 22px;
        height: 22px;
        color: var(--w-project-box-svg);
        &:hover {
          color: var(--w-project-box-svg-hover);
        }
        @media (max-width: 649px) {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>
