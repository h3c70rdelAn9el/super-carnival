// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/assets/css/main.css')

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/main.css'

import lightbox from 'vlightbox'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: "https://fonts.googleapis.com/css2?family=Raleway&family=Shadows+Into+Light+Two&display=swap",
  })
  library.add(faInstagram, faTwitter, faBars, faWindowClose)
  Vue.component('Layout', DefaultLayout)
  Vue.component('AppIcon', FontAwesomeIcon)
  Vue.use(lightbox)
}
