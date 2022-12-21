import { createApp } from 'vue'
import App from './App.vue'

// Font
import "@fontsource/work-sans"
import "@fontsource/trocchi"

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDollarSign, faTruck, faCheck, faMagnifyingGlass, faAngleDown, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard, faMap, faClock, faUser } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faTwitter, faInstagram, faYoutube, faTruck, faMap, faDollarSign, faCreditCard, faClock, faCheck, faMagnifyingGlass, faAngleDown, faUser, faBagShopping)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
