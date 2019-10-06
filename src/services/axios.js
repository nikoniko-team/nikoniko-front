import axios from 'axios';

export default axios.create({
  baseURL: 'https://sandbox-nikoniko-backend.herokuapp.com/api/',
});
