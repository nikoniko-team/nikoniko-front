<template>
  <v-card class="mx-auto">
    <v-card-title>Últimos 3 meses</v-card-title>
    <v-card-text>
      <VueApexCharts type="line" :options="options" :series="series"></VueApexCharts>
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
        shadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 1,
        },
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
      },
    },
    series: [
      {
        name: 'Very Sad',
        data: [15, 10, 5],
      },
      {
        name: 'Sad',
        data: [20, 10, 5],
      },
      {
        name: 'Regular',
        data: [10, 15, 20],
      },
      {
        name: 'Happy',
        data: [15, 20, 25],
      },
      {
        name: 'Very Happy',
        data: [5, 10, 15],
      },
    ],
  }),
};
</script>
