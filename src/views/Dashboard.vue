<template>
  <AdminLayout>
    <v-row dense>
      <v-col cols="6">
        <LatestMonthsCard />
      </v-col>
      <v-col cols="6">
        <MonthlyChartCard />
      </v-col>
      <v-col cols="12">
        <CommentsCard />
      </v-col>
    </v-row>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/AdminLayout.vue';
import CommentsCard from '@/components/Dashboard/CommentsCard.vue';
import MonthlyChartCard from '@/components/Dashboard/MonthlyChartCard.vue';
import LatestMonthsCard from '@/components/Dashboard/LatestChartCard.vue';

export default {
  props: {},
  components: {
    AdminLayout,
    CommentsCard,
    MonthlyChartCard,
    LatestMonthsCard,
  },
};
</script>
