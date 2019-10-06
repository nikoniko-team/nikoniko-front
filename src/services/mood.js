import axios from './axios';

/**
 * Get all moods
 * @returns {*}
 */
const getAll = () => axios.get('/mood');

export default {
  getAll,
};
