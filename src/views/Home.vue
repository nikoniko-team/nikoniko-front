<template>
  <v-container fluid>
    <v-row>
    <v-col>
      <PageTitle>Como anda o astral da equipe?</PageTitle>
    </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col></v-col>
      <v-col v-for="(day, index) in weekdays" v-bind:key="index">
        <TitleChip>{{day}}</TitleChip>
      </v-col>
    </v-row>
    <v-row align="center" class="justify-center">
      <v-col class="title">Thiago</v-col>
      <v-col v-for="(day, index) in weekdays" v-bind:key="index" align="center">
        <v-img
          class="align-center"
          :src="require('../assets/mood_1.svg')"
          contain
          width="64px"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <Button x-large v-on:click="openModal">Registrar</Button>
      </v-col>
    </v-row>
    <RegisterMood ref="modal"/>
  </v-container>
</template>

<script>
import Button from '@/components/Button.vue';
import TitleChip from '@/components/TitleChip.vue';
import PageTitle from '@/components/PageTitle.vue';
import RegisterMood from '@/components/RegisterMood.vue';
import mood from '@/services/mood';

export default {
  components: {
    Button,
    TitleChip,
    PageTitle,
    RegisterMood,
  },
  data() {
    return {
      dialog: false,
      weekdays: [],
    };
  },
  mounted() {
    this.weekdays = this.$moment.weekdaysShort();
    mood.getAll().then(({ data }) => {
      console.log('api result', data);
    });
  },
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
  },
};
</script>
