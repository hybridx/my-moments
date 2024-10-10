<template>
  <div class="main-image">
    <img id="root-image" :src="mainImagePath" alt="Couple" />
  </div>
  <h1>Anjita and Deepesh</h1>
</template>

<script setup>
const mainImagePath = `https://raw.githubusercontent.com/${
  import.meta.env.VITE_GITHUB_REPOSITORY
}/main/images/main.jpg`;
</script>

<style lang="scss">
.main-image {
  width: 100%;
  display: flex;
  img {
    width: 450px;
    margin: 0 auto;
    height: auto;
  }
}
</style>
