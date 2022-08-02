<template>
  <div class="sidebar-icons">
    <SidebarIcon
      :icon="icon"
      v-for="(icon, index) in icons"
      :key="index"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  faListUl,
  faCalculator,
  faEnvelopeCircleCheck,
  faTriangleExclamation,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  computed: {
    icons() {
      return [
        faListUl,
        faPlus,
        faCalculator,
        faEnvelopeCircleCheck,
        faTriangleExclamation,
      ]
    },
  },
})
</script>

<style scoped>
.sidebar-icons {
  @apply w-full h-full flex flex-col items-center gap-8;
}
</style>
