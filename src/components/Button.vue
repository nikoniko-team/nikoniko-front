<template>
  <v-btn class="main-btn" v-bind="$props" v-on="$listeners">
    <slot/>
  </v-btn>
</template>

<script>
export default {
  props: {
    'x-large': {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    superProps() {
      return {
        'x-large': true,
        disabled: false,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .main-btn {
    background-color: var(--v-accent-base) !important;
    border-radius: 35px;
    color: var(--v-secondary-base) !important;
  }
</style>
