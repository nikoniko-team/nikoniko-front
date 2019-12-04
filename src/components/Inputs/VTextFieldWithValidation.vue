<template>
  <ValidationProvider :vid="vid" :name="$attrs.label" :rules="rules" v-slot="{ errors, valid }">
    <v-text-field
      v-model="innerValue"
      :error-messages="errors"
      :success="valid"
      :prepend-icon="icon"
      v-bind="$attrs"
      v-on="$listeners"
      :type="type"
    ></v-text-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'VTextFieldWithValidation',
  components: {
    ValidationProvider,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    // must be included in props
    value: {
      type: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    vid: {
      type: String,
    },
    mask: {
      type: String,
    },
  },
  data: () => ({
    innerValue: '',
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>
