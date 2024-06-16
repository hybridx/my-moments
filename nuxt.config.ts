// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}/` || '/',
  },
  routeRules: {
    '/': { prerender: true },
  },
  nitro: {
    preset: 'static',
  },
});
