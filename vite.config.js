import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs';

dotenv.config();

const folderUrl = `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/contents/images`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  base: `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}/`,
  build: {
    rollupOptions: {
      plugins: [
        {
          async buildStart() {
            const data = await fetchDataFromAPI(folderUrl);
            fs.writeFileSync('./public/folder.json', JSON.stringify(data));
            for (const folderMetaData of data) {
              if (!folderMetaData.download_url) {
                const folderData = await fetchDataFromAPI(folderMetaData.url);
                fs.writeFileSync(`./public/${folderMetaData.name}.json`, JSON.stringify(folderData));
              }
            }
          },
        },
      ],
    },
  },
});

async function fetchDataFromAPI(url) {
  const response = await axios.get(url); // Replace with your API endpoint
  return response.data;
}
