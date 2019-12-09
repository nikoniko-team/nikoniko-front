<template>
  <v-card style="height: 100%">
    <v-card-title>Tags</v-card-title>
    <v-card-text style="height: 88%">
      <vue-word-cloud
        :words="tags"
        :color="generateColor"
        font-family="Roboto"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import VueWordCloud from 'vuewordcloud';
import randomcolor from 'randomcolor';
import reportService from '@/services/report';

export default {
  components: {
    VueWordCloud,
  },
  data: () => ({
    tags: [],
  }),
  async mounted() {
    const tags = await reportService.getTags();
    this.tags = tags.map(tag => [tag.name, tag.count]);
  },
  methods: {
    generateColor() {
      return randomcolor({ luminosity: 'bright' });
    },
  },
};
</script>
