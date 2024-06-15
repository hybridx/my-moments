import axios from 'axios';
import { env } from './env';

export const axiosConfigInstance = axios.create({
  baseURL: `https://api.github.com/repos/${env.username}/${env.repoName}/contents/images`,
  headers: {
    Authorization: 'Bearer <>',
  },
});
