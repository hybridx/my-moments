<template>
  <div class="main-image">
    <img :src="mainImagePath" alt="Couple" />
  </div>
  <h1>You and Them</h1>
</template>

<script setup>
const mainImagePath =
  import.meta.env.VITE_DEV_ENV === 'dev'
    ? `https://raw.githubusercontent.com/${
        import.meta.env.VITE_GITHUB_REPOSITORY
      }/main/images/main.jpg`
    : 'main.jpg';
</script>

<style lang="scss" scoped>
.main-image {
  width: 100%;
  display: grid;
  place-content: center;
  img {
    margin: auto;
    height: auto;
    width: 95vw;
    max-width: 1200px;
  }
}
</style>
