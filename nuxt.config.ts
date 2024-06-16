// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      githubUsername: process.env.GITHUB_USER,
      githubRepo: process.env.GITHUB_REPOSITORY,
    }
  },
  routeRules: {
    '/': { prerender: true },
  },
  nitro: {
    preset: 'static',
  },
});
