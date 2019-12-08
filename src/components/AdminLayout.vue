<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title to='/'>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Niko Niko</v-toolbar-title>
      <v-spacer/>
      <v-menu bottom left>
        <template v-slot:activator="{ on } ">
          <v-btn
            text
            v-on="on">
            {{selectedTeam.name}}
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title
              v-for="team in teams"
              :key="team.id"
              @click="selectTeam(team)"
            >
              {{team.name}}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-off</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Sair
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-content>
    <v-footer
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import teamService from '@/services/team';

export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    selectedTeam: {},
    teams: [
    ],
  }),
  async mounted() {
    try {
      const teams = await teamService.getAll();
      const [team] = teams;
      this.teams = teams;
      this.selectedTeam = team;
    } catch (err) {
      this.teams = [
        { id: 1, name: 'Time 1' },
      ];
      const [team] = this.teams;
      this.selectedTeam = team;
    }
  },
  methods: {
    /**
     * Select team
     * @param team
     */
    selectTeam(team) {
      this.selectedTeam = team;
    },
  },
};
</script>
