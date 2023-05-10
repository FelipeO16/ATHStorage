<template>
  <div class="sidebar-icons">
    <SidebarIcon
      :icon="icon"
      v-for="(icon, index) in icons"
      :key="index"
      :index="index"
      :actived="index == page"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { pages } from '@/store'
import {
  faListUl,
  faCalculator,
  faCartPlus,
  faTriangleExclamation,
  faPlus,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  computed: {
    icons() {
      return [faListUl, faPlus, faCalculator, faCartPlus, faTriangleExclamation, faQrcode]
    },
    page() {
      return pages.$page
    },
  },
})
</script>

<style scoped>
.sidebar-icons {
  @apply w-full h-full flex flex-col items-center gap-8;
}
</style>
