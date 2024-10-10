<template>
  <div class="gallery" :id="props.name">
    <a
      v-for="(image, key) in images"
      :key="key"
      :href="image.download_url"
      :data-pswp-width="image.width || 1200"
      :data-pswp-height="image.height || 800"
      target="_blank"
      rel="noreferrer"
    >
      <img 
        :src="image.download_url" 
        alt="couple photo"
        loading="lazy" 
        width="340"
      />
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { fetchImageUrls } from './../../service/api.js'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const images = ref([])
const lightbox = ref(null)

onMounted(async () => {
  try {
    images.value = await fetchImageUrls(props.name)
    
    // Initialize PhotoSwipe after images are loaded
    lightbox.value = new PhotoSwipeLightbox({
      gallery: `#${props.name}`,
      children: 'a',
      initialZoomLevel: 'fit',
      pswpModule: () => import('photoswipe')
    })

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      lightbox.value.init()
    }, 1000)
  } catch (error) {
    console.error('Error loading gallery:', error)
  }
})

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}

.pswp__img {
  object-fit: contain;
}
</style>