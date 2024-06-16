<template>
  <div class="container font-schibsted-grotesk-normal">
    <div class="main-image">
      <img id="root-image" :src="mainImagePath" alt="Couple" />
    </div>
    <h1>Anjita and Deepesh</h1>

    <div class="tabs">
      <div class="tab active">Engagement</div>
      <div class="tab">Pre Wedding</div>
    </div>

    <div class="gallery">
      <!-- <img
        :src="image.download_url"
        width="350"
        v-for="image in images"
        alt="name"
      /> -->
      <h1>Test</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const mainImagePath = `https://raw.githubusercontent.com/${process.env.GITHUB_REPOSITORY}/main/images/main.webp`;

// const data = await $fetch('https://api.github.com/repos/hybridx/my-moments/contents/images');
// const items = data.reduce((acc, el) => {
//   if (!el.download_url) {
//     acc.push({
//       label: el.name.replace('-', ' '),
//       key: el.name,
//       content: el.path,
//     });
//   }
//   return acc;
// }, []);
// const images = await $fetch('http://localhost:1337/data');
// console.log(images);
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
.gallery {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem;
}
.font-noto-sans-normal {
  font-family: 'Noto Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
}
.font-schibsted-grotesk-normal {
  font-family: 'Schibsted Grotesk', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.container {
  /* max-width: 1200px; */
  width: auto;
  margin: 0 auto;
}
.main-image {
  width: 100%;
  display: flex;
}
.main-image img {
  width: 450px;
  margin: 0 auto;
  height: auto;
}
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.image-gallery img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 10px;
}
.tabs {
  display: flex;
  margin-top: 24px;
  padding-top: 12px;
  .tab {
    padding: 8px 24px 1rem;
    // color: #868686;
    &.active {
      border-bottom: 3px solid #2b9af3;
    }
    &:hover {
      border-bottom: 3px solid #2b9af3;
      cursor: pointer;
    }
  }
}
h1 {
  font-family: 'Cedarville Cursive', cursive;
  font-size: 3rem;
  padding: 1rem;
  text-align: center;
}
</style>
