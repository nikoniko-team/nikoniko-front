<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500px">
      <v-card class="card">
        <v-card-title class="card-title">
          Olá! Como vc esta se sentindo?
        </v-card-title>
        <v-card-text v-if='tags.length === 0'>
          <v-row>
            <v-col align="center" v-for="mood in moods" v-bind:key="mood.id">
              <div class="img-wrapper"
                v-bind:class="{ active: isSelectedMood(mood) }">
                <v-img
                  v-on:click="selectMood(mood)"
                  class="align-center"
                  :src="mood.url"
                  contain
                  width="48px"
                />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text v-if='tags.length > 0'>
          <v-row>
            <v-col align='center'>
              <div class="img-wrapper active">
                <v-img
                  v-on:click="unselectMood()"
                  :src="selectedMood.url"
                  contain
                  width="48px"
                />
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col align='start '>
              <Chip
                @click="toggleTag(tag)"
                v-for="tag in tags"
                v-bind:key="tag.id"
                :active="isSelectedTag(tag)"
                style="margin: 0.3em;text-align: left;"
              >
              {{tag.name}}
              </Chip>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <Button v-on:click="confirm" :disabled="!readyToRegister()">
            {{confirmLabel}}
          </Button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Button from './Button.vue';
import Chip from './Chip.vue';
import moodService from '@/services/mood';
import tagService from '@/services/tag';

export default {
  components: {
    Button,
    Chip,
  },
  data: () => ({
    dialog: false,
    resolve: null,
    reject: null,
    selectedMood: null,
    selectedTags: [],
    loading: false,
    moods: [],
    tags: [],
  }),
  mounted() {
    moodService.getAll().then((moods) => {
      this.moods = moods;
    });
  },
  computed: {
    confirmLabel() {
      return this.loading ? 'Carregando' : 'Confirmar';
    },
  },
  methods: {
    /**
     * Open dialog
     */
    open() {
      this.dialog = true;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    /**
     * Confirm selection
     */
    confirm() {
      if (!this.selectedMood) {
        return;
      }

      if (this.selectedTags.length === 0) {
        return;
      }

      this.close(
        this.selectedMood,
        this.selectedTags,
      );
    },

    /**
     * Load tags to select
     */
    async loadTags() {
      this.loading = true;
      this.tags = await tagService.getAll() || [];
      this.loading = false;
    },

    /**
     * Select mood
     */
    selectMood(mood) {
      this.selectedMood = mood;
      this.loadTags();
    },

    /**
     * Unselect current mood
     */
    unselectMood() {
      this.selectedTags = [];
      this.tags = [];
      this.selectedMood = null;
    },

    /**
     * Select tag
     */
    toggleTag(tag) {
      const prevIndex = this.selectedTags.indexOf(tag.id);
      if (prevIndex >= 0) {
        this.selectedTags.splice(prevIndex, 1);
        return;
      }
      this.selectedTags.push(tag.id);
    },

    /**
     * Close modal with mood and tag selected
     */
    close(mood, tags) {
      this.resolve({ mood, tags });
      this.selectedTags = [];
      this.tags = [];
      this.selectedMood = null;
      this.dialog = false;
    },

    /**
     * Check if mood is selected
     */
    isSelectedMood(mood) {
      return this.selectedMood && this.selectedMood.id === mood.id;
    },

    /**
     * Check if tag is selected
     */
    isSelectedTag(tag) {
      return this.selectedTags.indexOf(tag.id) >= 0;
    },

    /**
     * Check if modal is ready to register
     */
    readyToRegister() {
      return this.selectedMood && this.selectedTags.length > 0;
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
