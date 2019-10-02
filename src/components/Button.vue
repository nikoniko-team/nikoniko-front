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
  },
  methods: {
    superProps() {
      console.log(this.$props);
      return {
        'x-large': true,
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
