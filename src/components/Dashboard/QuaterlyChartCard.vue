<template>
  <v-card>
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
        palette: 'palette1',
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
    series: [],
  }),
  mounted() {
    this.options = {
      ...this.options,
      series: [

        {
          name: 'Muito Triste',
          data: [0, 1, 10],
        },
        {
          name: 'Triste',
          data: [0, 0, 1],
        },
        {
          name: 'Neutro',
          data: [0, 1, 1],
        },
        {
          name: 'Feliz',
          data: [0, 1, 3],
        },
        {
          name: 'Muito Feliz',
          data: [0, 5, 2],
        },

      ],
    };
  },
};
</script>
