<template>
  <AdminLayout>
    <CommentsCard />
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/AdminLayout.vue';
import CommentsCard from '@/components/Dashboard/CommentsCard.vue';

export default {
  props: {},
  components: { AdminLayout, CommentsCard },
};
</script>
