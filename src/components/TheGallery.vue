<template>
  <div class="gallery">
    <!-- <img v-for="image in images" :src="image.download_url" alt="Couple" loading="lazy" /> -->
  </div>
  <div class="gallery" :id="props.name">
    <a :href="image.download_url" target="_blank" v-for="image in images">
      <img :src="image.download_url" alt="Couple" loading="lazy" width="340" />
    </a>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { fetchImageUrls } from './../../service/api.js';

const props = defineProps({
  name: String,
});

// -----
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

setTimeout(() => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: `#${props.name}`,
    children: 'a',
    initialZoomLevel: 'fit',
    pswpModule: () => import('photoswipe'),
  });

  lightbox.init();
}, 100);
// ------

const images = ref();
images.value = await fetchImageUrls(props.name);
</script>

<style lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  img {
    width: 350px;
  }
}
.pswp__img {
  object-fit: contain;
}
</style>
