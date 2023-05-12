<template>
  <div class="carts">
    <CartList
      v-for="(suplier, index) in cart"
      :key="index"
      :list="suplier"
      :title="index"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { cart } from '@/store'

export default Vue.extend({
  computed: {
    cart() {
      return cart.$cartList
    },
  },
})
</script>

<style scoped>
.carts {
  @apply w-full h-full flex flex-col justify-start items-center p-4 overflow-y-auto gap-2;
}
</style>
