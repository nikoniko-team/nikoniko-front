<template>
  <v-container fluid>
    <v-row>
    <v-col>
      <PageTitle>Como anda o astral da equipe?</PageTitle>
    </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col></v-col>
      <v-col><TitleChip>Segunda</TitleChip></v-col>
      <v-col><TitleChip>Terça</TitleChip></v-col>
      <v-col><TitleChip>Quarta</TitleChip></v-col>
      <v-col><TitleChip>Quinta</TitleChip></v-col>
      <v-col><TitleChip>Sexta</TitleChip></v-col>
      <v-col><TitleChip>Sabado</TitleChip></v-col>
      <v-col><TitleChip active>Domingo</TitleChip></v-col>
    </v-row>
    <v-row align="center" class="justify-center">
      <v-col class="title">Thiago</v-col>
      <v-col align="center">
        <v-img
          class="align-center"
          :src="require('../assets/mood_1.svg')"
          contain
          width="64px"
        />
      </v-col>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
      <v-col></v-col>
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
    };
  },
  methods: {
    openModal() {
      console.log('poadksad');
      this.$refs.modal.open();
    },
  },
};
</script>
