<template>
  <div class="toolkit-box">
    <Html />
    <Css />
    <Js />
    <NodeJs />
    <MongoDb />
    <VsCode />
    <Brave />
    <Vue />
  </div>
</template>

<script>
import Html from "../../assets/icons/html.svg";
import Css from "../../assets/icons/css.svg";
import Js from "../../assets/icons/js.svg";
import NodeJs from "../../assets/icons/nodejs.svg";
import MongoDb from "../../assets/icons/mongodb.svg";
import VsCode from "../../assets/icons/vscode.svg";
import Brave from "../../assets/icons/brave.svg";
import Vue from "../../assets/icons/vue.svg";
export default {
  name: "Toolkit",
  components: {
    Html,
    Css,
    Js,
    NodeJs,
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
    justify-content: space-between;
  }
  svg {
    width: 60px;
    height: 60px;
    margin-bottom: 24px;
    @media (max-width: 649px) {
      margin-bottom: 0;
      width: 40px;
      height: 40px;
    }
  }
  &::after {
    content: "TOOLKIT";
    position: absolute;
    right: -105px;
    top: 45%;
    font-size: 24px;
    letter-spacing: 10px;
    transform: rotate(90deg);
    @media (max-width: 649px) {
      font-size: 18px;
      letter-spacing: 10px;
      transform: rotate(360deg);
      right: 30%;
      top: -30px;
    }
  }
}
</style>
