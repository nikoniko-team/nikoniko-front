<template>
  <v-container fluid>
    <v-row>
    <v-col>
      <h1 class="text-center display-3 page-title">Como anda o astral da equipe?</h1>
    </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col></v-col>
      <v-col>
        <p class="calendar-header pa-2 title">Segunda</p>
      </v-col>
      <v-col>
        <p class="calendar-header pa-2 title">Terça</p>
      </v-col>
      <v-col>
        <p class="calendar-header pa-2 title">Quarta</p>
      </v-col>
      <v-col>
        <p class="calendar-header pa-2 title">Quinta</p>
      </v-col>
      <v-col>
        <p class="calendar-header pa-2 title">Sexta</p>
      </v-col>
      <v-col>
        <p class="calendar-header pa-2 title">Sabado</p>
      </v-col>
      <v-col>
        <p class="calendar-header pa-2 title active">Domingo</p>
      </v-col>
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
        <v-btn class="main-btn" x-large>Registrar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
  },
};
</script>

<style lang="scss" scoped>
  .page-title {
    color: #E65A98;
  }
  .calendar-header{
    background: rgba(157, 101, 207, 0.3);
    border-radius: 35px;
    text-align: center;
  }
  .active {
    background: #9D65CF;
  }
  .main-btn {
    background-color: #EDC951 !important;
    border-radius: 35px;
    color: #E65A98 !important;
  }
</style>
