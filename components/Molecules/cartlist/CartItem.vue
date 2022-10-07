<template>
  <div class="cart-item">
    <div v-for="(value, index) in item" :key="index">
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style scoped>
.cart-item {
  @apply w-full h-10 flex text-royal-blue-200 shadow-lg select-none relative rounded-md;
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
