export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'jaim',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/jaim_logo.svg' },
      {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"},
      // { rel: 'stylesheet', href: '/static/assets/global.css' }
    ],
  },
  css: [
    '@/static/assets/global.css',
  ],
  plugins: [
    '@/static/plugins/bootstrap-vue',
    { src: '@/static/plugins/vue-toastification.js', mode: 'client' },
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  },
  env: {
    API_URL: process.env.API_URL
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
}
