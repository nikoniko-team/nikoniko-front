<template>
  <h1 class="text-center display-3 page-title">
    <slot/>
  </h1>
</template>

<script>
export default {
  name: 'PageTitle',
};
</script>

<style lang="scss" scoped>
  .page-title {
    color: var(--v-secondary-base);
  }
</style>
