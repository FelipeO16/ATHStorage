<template>
  <div class="page" :class="{ dark: darkmode }">
    <!-- <Notify /> -->
    <!-- <ToggleDarkmode /> -->
    <Sidebar />
    <ProductList />
    <AddProduct />
    <ProductCountMain />
    <Cart />
    <ShowQr />
    <Logs />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { darkmode, products } from '@/store'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    darkmode() {
      return darkmode.$darkmode
    },
  },
  async mounted() {
    await products.add2()
  },
})
</script>

<style scoped>
.page {
  @apply w-screen h-screen min-h-screen flex items-center justify-between bg-ebony-500;
}
</style>
