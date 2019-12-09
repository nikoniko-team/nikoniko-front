import axios from './axios';

/**
 * Get all teams
 * @returns {*}
 */
const getAll = () => axios.get('/team').then(response => response.data.data || []);

/**
 * Set selected team
 * @param team
 */
const setTeam = team => localStorage.setItem('team', JSON.stringify(team));

/**
 * Get selected team
 * @returns {string}
 */
const getTeam = () => JSON.parse(localStorage.getItem('team'));

export default {
  getAll,
  setTeam,
  getTeam,
};
