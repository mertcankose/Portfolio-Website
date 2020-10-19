<template>
  <component :is="dynamicIcon"></component>
</template>

<script>
export default {
  name: "DynamicIcon",
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicIcon() {
      return () =>
        import(
          /* webpackChunkName: "icons" */
          /* webpackMode: "lazy-once" */
          `../../assets/icons/${this.icon}.svg`
        );
    }
  }
};
</script>

<style></style>
