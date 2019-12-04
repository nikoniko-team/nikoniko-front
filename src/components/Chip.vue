<template>
  <v-chip
    class='chip'
    :input-value="active"
    @click="$emit('click')"
  >
    <slot/>
  </v-chip>
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
    background: var(--v-primary-lighten1) !important;
    font-weight: bold;
  }
</style>
