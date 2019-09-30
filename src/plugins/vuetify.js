import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: {
          base: '#4B307F',
          lighten2: '#9D65CF',
          lighten1: '#633f97',
        },
        secondary: '#E65A98',
        background: '#4B307F',
        accent: '#EDC951',
      },
    },
  },
});
