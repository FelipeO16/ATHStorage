<template>
  <div class="status-categories">
    <span v-for="category in categories" :key="category">{{ category }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      categories: [
        'code',
        'suplier',
        'description',
        'class',
        'price',
        'total',
        'min',
        'max',
        'place',
        'status',
      ],
    }
  },
})
</script>

<style scoped>
.status-categories {
  @apply w-full flex text-white capitalize tracking-wide;
}

.status-categories span {
  @apply flex justify-center p-2;
}
.status-categories span:nth-child(1) {
  @apply w-1/12;
}
.status-categories span:nth-child(2) {
  @apply w-1/12;
}
.status-categories span:nth-child(3) {
  @apply w-3/12;
}
.status-categories span:nth-child(4),
.status-categories span:nth-child(5),
.status-categories span:nth-child(6),
.status-categories span:nth-child(7),
.status-categories span:nth-child(8),
.status-categories span:nth-child(9),
.status-categories span:nth-child(10) {
  @apply w-1/12;
}
</style>
