// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}/`,
  },
  ssr: true,
  routeRules: {
    '/': { prerender: true, experimentalNoScripts: true },
  },
  nitro: {
    preset: 'static',
  },
});
