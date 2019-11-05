<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500px">
      <v-card class="card">
        <v-card-title class="card-title">
          Olá! Como vc esta se sentindo?
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col align="center" v-for="mood in moods" v-bind:key="mood.id">
              <div class="img-wrapper"
                v-bind:class="{ active: isSelected(mood) }">
                <v-img
                  v-on:click="select(mood)"
                  class="align-center"
                  :src="mood.url"
                  contain
                  width="48px"
                />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <Button v-on:click="confirm">Confirmar</Button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Button from './Button.vue';
import moodService from '@/services/mood';

export default {
  components: {
    Button,
  },
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    selected: null,
    moods: [],
  }),
  mounted() {
    moodService.getAll().then((moods) => {
      this.moods = moods;
    });
  },
  methods: {
    open() {
      this.dialog = true;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    confirm() {
      this.resolve(this.selected);
      this.dialog = false;
    },
    select(mood) {
      this.selected = mood;
    },
    isSelected(mood) {
      return this.selected && this.selected.id === mood.id;
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
  .img-wrapper {
    display: inline-block;
    padding: 5px;
    border: 4px solid transparent;
    cursor: pointer;
    &.active {
      border-radius: 50%;
      border-color: #ffffff;;
    }
  }
</style>
