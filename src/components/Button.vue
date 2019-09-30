<template>
  <v-btn class="main-btn" x-large>
    <slot/>
  </v-btn>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss" scoped>
  .main-btn {
    background-color: var(--v-accent-base) !important;
    border-radius: 35px;
    color: var(--v-secondary-base) !important;
  }
</style>
