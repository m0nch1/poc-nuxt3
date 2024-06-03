const {
  NUXT_PUBLIC_API_HOST,
} = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'cloudflare-pages',
  },
  runtimeConfig: {
    public: {
      apiHost: NUXT_PUBLIC_API_HOST,
    }
  },
})
