import axios from './axios';

/**
 * Get all teams
 * @returns {*}
 */
const getAll = () => axios.get('/team').then(response => response.data.data || []);

export default {
  getAll,
};
