import axios from './axios';

/**
 * Get all moods
 * @returns {*}
 */
const getAll = () => axios.get('/mood')
  .then(response => response.data.data);

export default {
  getAll,
};
