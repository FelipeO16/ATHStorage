<template>
  <div class="cart" v-if="page == 3">
    <Carts />
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
.cart {
  @apply w-full h-full flex flex-col items-center justify-center gap-4 bg-midnight-500 dark:bg-french-gray-500;
}
</style>
