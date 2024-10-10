<template>
  <div class="main-image">
    <img id="root-image" :src="mainImagePath" alt="Couple" />
  </div>
  <h1>You and Them</h1>
</template>

<script setup>
const mainImagePath = import.meta.env.VITE_DEV_ENV === 'dev' ? `https://raw.githubusercontent.com/${
  import.meta.env.VITE_GITHUB_REPOSITORY
}/main/images/main.jpg` : 'main.jpg';
</script>

<style lang="scss">
.main-image {
  width: 100%;
  display: flex;
  img {
    margin: 0 auto;
    height: auto;
  }
}
#root-image {
  max-width: 70vw;
}
</style>
