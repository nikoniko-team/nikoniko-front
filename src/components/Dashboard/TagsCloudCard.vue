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
import teamService from '@/services/team';

export default {
  components: {
    VueWordCloud,
  },
  data: () => ({
    tags: [],
  }),
  async mounted() {
    const team = teamService.getTeam();
    const tags = await reportService.getTags(team.id);
    this.tags = tags.map(tag => [tag.name, tag.count]);
  },
  methods: {
    generateColor() {
      return randomcolor({ luminosity: 'bright' });
    },
  },
};
</script>
