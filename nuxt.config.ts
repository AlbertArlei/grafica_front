// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-vue3-google-signin'
  ],
  googleSignIn: {
    clientId: '103467167204-qojqrj7j8t40ad9nttonb631cd9a1u7u.apps.googleusercontent.com',
  },
  runtimeConfig:{
    public:{
      apiUrl: 'http://localhost:8080'
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})