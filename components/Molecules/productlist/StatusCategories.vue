<template>
  <div class="status-categories">
    <span
      v-for="(category, index) in categories"
      :key="index"
      @click="order(category), select(index)"
    >
      {{ category }}
      <font-awesome-icon :icon="markdown" v-if="selected[index]" />
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'

export default Vue.extend({
  data() {
    return {
      categories: [
        'code',
        'suplier',
        'description',
        'class',
        'price',
        'storage',
        'min',
        'max',
        'place',
        'status',
      ],
      selected: [] as any,
    }
  },
  computed: {
    markdown() {
      return faArrowAltCircleDown
    },
  },
  methods: {
    async order(category: string) {
      await products.order(category)
    },
    select(index: number) {
      if (this.selected[index]) {
        this.order('id')
        this.selected = []
      } else {
        this.selected = []
        this.selected[index] = true
      }
    },
  },
})
</script>

<style scoped>
.status-categories {
  @apply w-full flex text-white capitalize tracking-wide;
}

.status-categories span {
  @apply flex justify-center p-2 gap-1 cursor-default items-end;
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
