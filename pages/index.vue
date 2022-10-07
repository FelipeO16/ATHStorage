<template>
  <div class="page" :class="{ dark: darkmode }">
    <!-- <Notify /> -->
    <!-- <ToggleDarkmode /> -->
    <Sidebar />
    <ProductList />
    <AddProduct />
    <ProductCountMain />
    <Cart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { darkmode } from '@/store'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    darkmode() {
      return darkmode.$darkmode
    },
  },
})
</script>

<style scoped>
.page {
  @apply w-screen h-screen flex items-center justify-between bg-ebony-500;
}
</style>
