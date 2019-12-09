<template>
  <v-card class="mx-auto">
    <v-card-title>Dezembro</v-card-title>
    <v-card-text>
      <VueApexCharts type="bar" :options="options" :series="series"></VueApexCharts>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import reportService from '@/services/report';
import teamService from '@/services/team';

export default {
  components: { VueApexCharts },
  data: () => ({
    options: {
      theme: {
        mode: 'dark',
        palette: 'palette10',
      },
      chart: {
        id: 'monthly',
      },
      xaxis: {
        categories: [],
      },
    },
    series: [],
  }),
  async mounted() {
    const team = teamService.getTeam();
    const data = await reportService.getMonthly(team.id);
    this.options = {
      ...this.options,
      xaxis: { categories: data.categories },
    };
    this.series = [
      { data: data.values },
    ];
  },
};
</script>
