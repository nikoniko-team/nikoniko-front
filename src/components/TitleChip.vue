a<template>
  <p class="pa-2 chip" v-bind:class="{ active }">
    <slot/>
  </p>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
  .chip {
    background: var(--v-primary-lighten1);
    border-radius: 35px;
    text-align: center;
  }
  .active {
    background: var(--v-primary-lighten2);
  }
</style>
