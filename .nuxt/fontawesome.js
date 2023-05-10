import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faHome as freeFasFaHome,
  faChartBar as freeFasFaChartBar,
  faClipboardList as freeFasFaClipboardList,
  faCreditCard as freeFasFaCreditCard,
  faWrench as freeFasFaWrench
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaHome,
  freeFasFaChartBar,
  freeFasFaClipboardList,
  freeFasFaCreditCard,
  freeFasFaWrench
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
