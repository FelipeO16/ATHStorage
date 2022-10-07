<template>
  <div class="cart-categories">
    <span v-for="category in categories" :key="category">{{ category }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      categories: ['code', 'suplier', 'description', 'quantity'],
    }
  },
})
</script>

<style scoped>
.cart-categories {
  @apply w-full flex text-blue-500 capitalize tracking-wide;
}

.cart-categories span {
  @apply flex justify-center p-2;
}
.cart-categories span:nth-child(1),
.cart-categories span:nth-child(2),
.cart-categories span:nth-child(4) {
  @apply w-2/12;
}
.cart-categories span:nth-child(3) {
  @apply w-3/12;
}
</style>
