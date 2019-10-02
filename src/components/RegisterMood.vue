<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500px">
      <v-card class="card">
        <v-card-title class="card-title">
          Olá, Gisele! Como vc esta se sentindo?
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="mood in moods" v-bind:key="mood.id">
              <v-img
                v-on:click="select(mood.id)"
                class="align-center"
                :src="require('../assets/mood_1.svg')"
                contain
                width="64px"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <Button v-on:click="create">Confirmar</Button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    moods: [
      {
        id: 1,
        image: 'null',
      },
      {
        id: 2,
        image: 'null',
      },
    ],
  }),
  methods: {
    open() {
      this.dialog = true;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    create() {
      this.resolve(true);
      this.dialog = false;
    },
    select(idx) {
      console.log('select index', idx);
    },
  },
};
</script>
<style lang="scss" scoped>
  .card {
    background: var(--v-background-base) !important;
  }
  .card-title {
    justify-content: center;
    color: var(--v-secondary-base) !important;
  }
</style>
