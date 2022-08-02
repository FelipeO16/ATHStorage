<template>
  <div class="sidebar-icon" @click="pages.set(index)">
    <font-awesome-icon :icon="icon" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { pages } from '@/store'
export default Vue.extend({
  props: {
    icon: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      return pages
    },
  },
})
</script>

<style scoped>
.sidebar-icon {
  @apply w-full p-2 text-2xl flex items-center justify-center text-french-gray-500  hover:text-royal-blue-500 font-extralight cursor-pointer;
}
</style>
