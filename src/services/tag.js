import axios from './axios';

/**
 * Get all moods
 * @returns {*}
 */
const getAll = () => axios.get('/tag').then(response => response.data.data || []);

export default {
  getAll,
};
