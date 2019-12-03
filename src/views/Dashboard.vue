<template>
  <AdminLayout>
    <div class="Dashboard">
      <pre v-text="$attrs"/>
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/AdminLayout.vue';

export default {
  props: {},
  components: { AdminLayout },
};
</script>
