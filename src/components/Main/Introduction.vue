<template>
  <div class="introduction-box">
    <p class="hiMessage">Hi, my name is</p>
    <h1>MERTCAN KOSE.</h1>
    <p class="presentation">
      I'm a computer science student and a front-end software engineer in
      Turkey.
    </p>
  </div>
</template>

<script>
export default {
  name: "Introduction"
};
</script>

<style scoped lang="scss">
.introduction-box {
  font-size: 2.4vw;
  @media (max-width: 900px) {
    font-size: 22px;
  }
  .hiMessage {
    color: var(--m-hi-message);
    @media (max-width: 900px) {
      text-align: center;
    }
  }
  h1 {
    width: 90%;
    background-image: linear-gradient(
      0deg,
      var(--m-heading-background-1),
      var(--m-heading-background-2)
    );
    background-size: 30px 30px;
    background-repeat: repeat-x;
    background-position: bottom;
    @media (max-width: 900px) {
      width: 85%;
      background-size: 14px 14px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 649px) {
      width: 80%;
      background-size: 14px 14px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      font-size: 2rem;
      margin-top: 8px;
      margin-bottom: 10px;
    }
  }
  .presentation {
    line-height: 3.8rem;
    @media (max-width: 900px) {
      text-align: center;
    }
    @media (max-width: 649px) {
      line-height: 2.2rem;
    }
  }
}
</style>
