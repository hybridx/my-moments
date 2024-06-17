import axios from 'axios';

const axiosConfigInstance = axios.create({});

export async function fetchTabs() {
  const { data } = await axiosConfigInstance.get('folder.json');
  return data.filter(el => !el.download_url);
}

export async function fetchImageUrls(url) {
  const { data } = await axiosConfigInstance.get(`${url}.json`);
  return data;
}
