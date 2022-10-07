<template>
  <div class="cart-header">{{ suplier }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    suplier: String,
  },
})
</script>

<style scoped>
.cart-header {
  @apply w-full h-10 flex flex-col items-center justify-center gap-4 bg-royal-blue-500  text-french-gray-300 rounded-t-lg tracking-widest select-none uppercase;
}
</style>
