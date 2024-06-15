import './main.scss';
import { env } from './config/env';
import { fetchMainImage } from './service/queries';

fetchMainImage();
// const mainImage = await fetchMainImage();
// console.log(mainImage);

document.querySelector('#app').innerHTML = `
<div class="container font-schibsted-grotesk-normal">
   <div class="main-image">
            <img id="root-image" src="https://raw.githubusercontent.com/${env.username}/${env.repoName}/main/images/main.webp" alt="Main Image">
        </div>
   <h1>Anjita & Deepesh</h1>
   <div class="tabs">
      <div class="tab active">Overview</div>
      <div class="tab">Statistics</div>
      <div class="tab">Schedule</div>
      <div class="tab">News</div>
      <div class="tab">Help</div>
    </div>
   <div class="image-gallery" id="image-gallery"></div>
</div>
`;

