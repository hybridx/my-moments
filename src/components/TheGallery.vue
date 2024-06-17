<template>
  <div class="gallery">
    <img v-for="image in images" :src="image.download_url" alt="Couple" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { fetchImageUrls } from './../../service/api.js';

const props = defineProps({
  name: String,
});

const images = ref();
images.value = await fetchImageUrls(props.name);
console.log(images.value);
</script>
<style scoped lang="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  img {
    width: 350px;
  }
}
</style>
