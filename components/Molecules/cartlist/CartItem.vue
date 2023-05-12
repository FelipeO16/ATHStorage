<template>
  <div class="cart-item">
    <div v-for="(value, index) in item" :key="index">
      {{ value }}
    </div>
    <div class="delete-item">
      <button class="bg-red-500 p-2" @click="cart.removeOne({supplier, item}), $forceUpdate()">x</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {cart} from '@/store'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.item)
  },
  computed: {
    cart() {
      return cart
    },
  },
})
</script>

<style scoped>
.cart-item {
  @apply w-full flex text-royal-blue-200 shadow-lg select-none relative rounded-md;
}

.delete-item {
  top: 50%;
  transform: translateY(-50%);
  @apply absolute right-0;
}

.delete-item button {
  @apply h-8 w-8 flex justify-center items-center text-white rounded-full;
}

.cart-item:hover {
  background-size: cover;
  @apply bg-cloud-burst-600;
}

.cart-item div {
  @apply flex justify-center p-2;
}

.cart-item div:nth-child(2) {
  @apply w-2/12;
}
.cart-item div:nth-child(3) {
  @apply w-2/12;
}
.cart-item div:nth-child(4) {
  @apply w-3/12;
}
.cart-item div:nth-child(5) {
  @apply w-2/12;
}

.cart-item div:nth-child(1) {
  @apply hidden;
}
</style>
