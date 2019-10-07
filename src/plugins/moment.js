import * as moment from 'moment';
import Vue from 'vue';
import VueMoment from 'vue-moment';


moment.locale('pt-BR');

Vue.use(VueMoment, {
  moment,
});

export default moment;
