import { axiosConfigInstance } from '../config/axiosConfig';
import { env } from '../config/env';

export const fetchMainImage = async (prompt) => {
  const { data } = await axiosConfigInstance.get();
  const filteredData =  data.filter(el => el.download_url);
  console.log(filteredData);
  return filteredData;
};

export const fetchTabs = async (prompt) => {
  const { data } = await axiosConfigInstance.get();
  return data;
};
