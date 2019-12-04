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
        categories: [
          'Very Sad',
          'Sad',
          'Regular',
          'Happy',
          'Very Happy',
        ],
      },
    },
    series: [{
      data: [10, 20, 30, 40, 50],
    }],
  }),
};
</script>
