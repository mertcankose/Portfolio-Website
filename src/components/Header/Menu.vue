<template>
  <div class="menu-list">
    <ul>
      <li>
        <a href="#">Work</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
    </ul>
    <div class="resume-container">
      <a href="#">Resume</a>
    </div>
    <label for="checkbox" class="checkbox-input">
      <input type="checkbox" name="checkbox" id="checkbox" />
      <span class="checkbox"></span>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
a {
  display: flex;
  place-items: center;
  height: 100%;
  padding-left: 14px;
  padding-right: 14px;
}
.menu-list {
  display: flex;
  align-items: center;
  height: 10vh;
  ul {
    display: flex;
    li {
      margin-left: 8px;
      margin-right: 8px;
      display: flex;
      color: var(--h-menu-item);
      justify-content: center;
      align-items: center;
      height: var(--finger-size);
      &:hover {
        color: var(--h-menu-item-hover);
      }
    }
  }
  .resume-container {
    border: 0.1rem solid var(--h-resume-border);
    color: var(--h-resume);
    height: var(--finger-size);
    margin-left: 24px;
    margin-right: 8px;
    border-radius: 5px;
    transition: 250ms background-color;
    &:hover {
      background-color: var(--h-resume-hover-background);
      color: var(--h-resume-hover-text);
    }
  }
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
