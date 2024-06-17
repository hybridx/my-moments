<template>
  <TheMain />
  <Suspense>
    <TheTabs />
  </Suspense>
</template>

<script setup lang="ts">
import TheMain from './components/TheMain.vue';
import TheTabs from './components/TheTabs.vue';
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');

body {
  margin: 0;
  padding: 0;
}

h1 {
  font-family: 'Cedarville Cursive', cursive;
  font-size: 3rem;
  padding: 1rem;
  text-align: center;
}
</style>
