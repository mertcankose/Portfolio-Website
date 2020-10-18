<template>
  <div class="toolkit-box">
    <Html class="html" />
    <Css class="css" />
    <Sass class="sass" />
    <Js class="js" />
    <Vue class="vue" />
    <NodeJs class="nodejs" />
    <Express class="express" />
    <MongoDb class="mongodb" />
    <VsCode class="vscode" />
    <Brave class="brave" />
  </div>
</template>

<script>
import Html from "../../assets/icons/html.svg";
import Css from "../../assets/icons/css.svg";
import Sass from "../../assets/icons/sass.svg";
import Js from "../../assets/icons/js.svg";
import Vue from "../../assets/icons/vue.svg";
import NodeJs from "../../assets/icons/nodejs.svg";
import Express from "../../assets/icons/express.svg";
import MongoDb from "../../assets/icons/mongodb.svg";
import VsCode from "../../assets/icons/vscode.svg";
import Brave from "../../assets/icons/brave.svg";

export default {
  name: "Toolkit",
  components: {
    Html,
    Css,
    Sass,
    Js,
    NodeJs,
    Express,
    MongoDb,
    VsCode,
    Brave,
    Vue
  }
};
</script>

<style scoped lang="scss">
.toolkit-box {
  //border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 649px) {
    flex-direction: row;
    //justify-content: space-between;
    align-items: flex-start;
    gap: 18px;
    flex-wrap: wrap;
    padding-left: 4px;
    padding-right: 4px;
    text-align: center;
  }
  &::after {
    content: "TOOLKIT";
    position: absolute;
    right: -130px;
    //top: 45%;
    font-size: 24px;
    letter-spacing: 10px;
    transform: rotate(90deg);
    background-image: linear-gradient(
      0deg,
      var(--m-heading-background-1),
      var(--m-heading-background-2)
    );
    background-size: 10px 10px;
    background-repeat: repeat-x;
    background-position: bottom;
    @media (max-width: 649px) {
      font-size: 18px;
      letter-spacing: 8px;
      transform: rotate(360deg);
      right: 38%;
      top: -50px;
    }
  }
  svg {
    width: 60px;
    height: 60px;
    margin-bottom: 24px;
    @media (max-width: 649px) {
      margin-bottom: 0;
      width: 46px;
      height: 46px;
    }
  }
  .html {
    color: var(--g-html);
  }
  .css {
    color: var(--g-css);
  }
  .js {
    color: var(--g-js);
  }
  .nodejs {
  }
  .mongodb {
  }
  .vscode {
    color: var(--g-vscode);
  }
  .vue {
    color: var(--g-vue);
  }
}
</style>
