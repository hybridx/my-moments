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

<template>
  <lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
    <div class="gallery" :id="props.name">
      <a
        data-lg-size="1406-1390"
        class="gallery-item"
        :data-src="image.download_url"
        :href="image.download_url"
        target="_blank"
        v-for="image in images"
      >
        <img
          class="img-responsive"
          :src="image.download_url"
          alt="Couple"
          loading="lazy"
          width="340"
        />
      </a>
    </div>
  </lightgallery>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  name: 'App',
  components: {
    Lightgallery,
  },
  data: () => ({
    plugins: [lgZoom, lgVideo],
  }),
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
  },
};
</script>
<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
body {
  margin: 0;
}
.gallery-item {
  margin: 5px;
}
</style>
