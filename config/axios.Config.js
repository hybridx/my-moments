import axios from 'axios';

const axiosConfigInstance = axios.create({
  baseURL: `/${VITE_APP_BASE_URL}/`,
});

module.exports = { axiosConfigInstance };
