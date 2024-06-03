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
    apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      "graphql-client": {
        clients: {
          default: {
            host: "https://localhost.example.com",
          },
        },
      },
    }
  },
})