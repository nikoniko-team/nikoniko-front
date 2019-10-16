import * as moment from 'moment';
import axios from './axios';

/**
 * Format member data of week calendar
 * @param {*} member
 */
const formatMember = member => ({
  ...member,
  records: member.records.reduce((obj, record) => {
    const date = moment(record.date);
    return {
      ...obj,
      [date.day()]: record,
    };
  }, {}),
});

/**
 * Get week data
 * @returns {*}
 */
const get = () => axios
  .get('/week')
  .then(response => response.data)
  .then(response => response.data.members.map(formatMember));

export default {
  get,
};
