<template>
  <div class="count" v-if="page == 2">
    <div class="box-count">
      <div class="name">
        <label for="product-name">Product:</label>
        <div id="product-name">{{ product.description }}</div>
      </div>
      <div class="quantity">
        <label for="product-quantity">Qtt:</label>
        <input type="number" placeholder="quantity" />
      </div>
      <button @click="set('meuovo')">Set</button>
    </div>
    <qrcode-stream class="qr-capture" @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { pages, products } from '@/store'
export default Vue.extend({
  data() {
    return {
      product: {} as any,
    }
  },
  computed: {
    page() {
      return pages.$page
    },
  },

  watch: {
    product() {
      this.$forceUpdate
    },
  },

  methods: {
    async onDecode(decodedString: string) {
      let result = await products.get(decodedString)
      this.product = result[0]
      alert(this.product)
    },
    async set(p: string) {
      let result = await products.get(p)
      this.product = result[0]
      alert(JSON.stringify(this.product.description))
    },
  },
})
</script>

<style scoped>
.count {
  @apply text-white w-full h-full;
}

.box-count {
  @apply w-full md:w-3/6 flex flex-col gap-8 border border-royal-blue-500 p-4;
}

.box-count div {
  @apply flex gap-2;
}

input {
  @apply w-full;
}

.qr-capture {
  @apply w-72 h-72;
}
</style>
