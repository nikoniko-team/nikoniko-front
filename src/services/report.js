import axios from './axios';


/**
 * Get monthly records report
 * @param teamId
 * @returns {Q.Promise<*[]> | Promise<any> | PromiseLike<any>}
 */
const getMonthly = teamId => axios.get(`report/${teamId}/monthly`)
  .then(response => response.data.data || [])
  .then(data => ({
    categories: data.map(item => item.name),
    values: data.map(item => item.value),
  }));

/**
 * Get tags report
 * @returns {Q.Promise<*[]> | Promise<any> | PromiseLike<any>}
 */
const getTags = teamId => axios.get(`report/${teamId}/tags`)
  .then(response => response.data.data || []);

export default {
  getMonthly,
  getTags,
};
