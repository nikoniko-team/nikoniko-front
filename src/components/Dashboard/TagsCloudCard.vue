<template>
  <wordcloud
    :data="tags"
    nameKey="name"
    valueKey="value"
    :showTooltip="true"
    color="Accent"
  >
  </wordcloud>
</template>

<script>
import wordcloud from 'vue-wordcloud';

export default {
  components: {
    wordcloud,
  },
  data: () => ({
    tags: [
      { name: 'Cat', value: 26 },
      { name: 'fish', value: 30 },
    ],

  }),
};
</script>
