<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col offset-md='8'></v-col>
      <v-col cols='3' align='right' style='font-size: 14px;'>
        Você está logado como <strong>Manager</strong>
      </v-col>
    </v-row>
    <v-row no-gutters>
    <v-col>
      <PageTitle>Como anda o astral da equipe?</PageTitle>
    </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col></v-col>
      <v-col v-for="(day, index) in weekdays" v-bind:key="index">
        <TitleChip :active='index === 3'>{{day}}</TitleChip>
      </v-col>
    </v-row>
    <v-row
      align="center"
      class="justify-center"
      v-for="(member, memberIndex) in members" v-bind:key="memberIndex"
    >
      <v-col class="title">{{member.name}}</v-col>
      <v-col
        v-for="(_, dayIndex) in weekdays"
        v-bind:key="dayIndex"
        :set="record = member.records[dayIndex]"
        align="center"
      >
        <v-img
          v-if="record"
          class="align-center"
          :src="record.mood.url"
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
import week from '@/services/week';
import record from '@/services/record';

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
      members: [],
    };
  },
  mounted() {
    this.weekdays = this.$moment.weekdaysShort();
    this.loadWeek();
  },
  methods: {
    /**
     * Open mood selection
     */
    openModal() {
      const modal = this.$refs.modal.open();
      modal.then(this.registerMood);
    },

    /**
     * Register mood
     */
    async registerMood(selected) {
      await record.create({
        teamId: 1,
        userId: 1,
        ...selected,
      });

      this.loadWeek();
    },

    loadWeek() {
      week.get().then((members) => {
        this.members = members;
      });
    },
  },
};
</script>
