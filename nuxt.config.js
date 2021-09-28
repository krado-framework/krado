import i18n from './nuxt-i18n.config'

const url = 'https://krado.novalumo.dev'
const site_name   = 'Krado'
const description = 'Site description'

export default {
  target: 'static',
  head:
  {
    titleTemplate: '%s | Krado Framework',
    meta:
    [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: description },
      // open graph
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: site_name },
      { property: 'og:description', content: description },
      { property: 'og:image', content: '/img/novalumo.jpg' },
      // twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:creator', content: '@novalumo' },
      { property: 'twitter:description', content: description },
    ],
    link:
    [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/icon.png' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css' },
    ],
  },
  css:
  [
    '~/assets/main.scss',
  ],
  loading:
  {
    color: 'blue',
    failedColor: 'red',
    height: '5px'
  },
  plugins:
  [
    // '@/plugins/utils'
  ],
  components: true,
  buildModules:
  [
    '@nuxt/typescript-build',
    '@nuxt/image',
  ],
  modules:
  [
    ['nuxt-i18n', i18n],
    // '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/gtm'
  ],
  build:
  {
  },
  axios:
  {
  },
  // gtm:
  // {
  //   id: 'GTM-538NQQ9',
  //   debug: false,
  //   pageTracking: true,
  // },
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'https://www.novalumo.llc',
  //   exclude: [
  //     '/contact/result'
  //   ],
  //   routes: [

  //   ]
  // },
}