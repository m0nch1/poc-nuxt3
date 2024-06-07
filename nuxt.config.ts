// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'cloudflare-pages',
  },
  
  modules: ["nuxt-graphql-client"],
  'graphql-client': {
    codegen: false,
  },

  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET, // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      "graphql-client": {
        clients: {
          default: {
            host: "",
          },
        },
      },
    }
  },
})