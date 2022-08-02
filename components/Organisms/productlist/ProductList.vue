<template>
  <div class="product-list" v-if="page == 0">
    <StatusProductList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { pages } from '@/store'
export default Vue.extend({
  computed: {
    page() {
      return pages.$page
    },
  },
})
</script>

<style scoped>
.product-list {
  @apply w-full h-full flex flex-col items-center justify-center gap-4 bg-midnight-500 dark:bg-french-gray-500;
}
</style>
