// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    /* Don't disable this, otherwise nuxt generate using prerenderRoutes will break when using multiple pages */
    // payloadExtraction: false,
  },

  // routeRules: {
  //   'no-js': {
  //     experimentalNoScripts: true,
  //   },
  //   '/spa': {
  //     ssr: false,
  //   },
  //   ten: {
  //     cache: {
  //       maxAge: 10,
  //       swr: false,
  //     },
  //   },
  //   'ten-swr': {
  //     cache: {
  //       maxAge: 10,
  //       staleMaxAge: 60,
  //       swr: true,
  //     },
  //   },
  //   '/static-route': {
  //     static: true,
  //   },
  //   '/abc-prerender': {
  //     prerender: true,
  //   },
  // },

  nitro: {
    // /* We added the below directly in app.vue using prerenderRoutes macro  */
    //   prerender: {
    //     routes: ['/api/data'],
    //   },
    preset: 'netlify-static',
  },

  app: {
    head: {
      htmlAttrs: {
        // style: 'background-color: #111; color: #f0f0f0',
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    config: {
      corePlugins: {
        preflight: false,
      },
    },
  },
})
