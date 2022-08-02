<template>
  <div class="status-item">
    <div v-for="(value, index) in product" :key="index" :class="value">
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style scoped>
.status-item {
  @apply w-full h-full flex items-center text-royal-blue-200 shadow-lg select-none relative rounded-md;
}

.status-item:hover {
  background-size: cover;
  @apply bg-cloud-burst-600 cursor-pointer;
}

.status-item div {
  @apply flex justify-center p-2;
}

.status-item div:nth-child(2) {
  @apply w-1/12;
}
.status-item div:nth-child(3) {
  @apply w-1/12;
}
.status-item div:nth-child(4) {
  @apply w-3/12;
}
.status-item div:nth-child(5),
.status-item div:nth-child(6),
.status-item div:nth-child(7),
.status-item div:nth-child(8),
.status-item div:nth-child(9),
.status-item div:nth-child(10),
.status-item div:nth-child(11) {
  @apply w-1/12;
}

.status-item div:nth-child(1) {
  @apply hidden;
}

.Bad {
  @apply bg-brink-pink-500 text-white;
}
.Good {
  @apply bg-jungle-green-500 text-white;
}
</style>
