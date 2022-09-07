<template>
  <div class="page">
    <form class="add-product-form" v-if="page == 0">
      <h1>Add Product</h1>

      <div class="input">
        <label for="code">Code</label>
        <input id="code" type="text" name="code" v-model="product.code" />
      </div>
      <div class="input">
        <label for="suplier">Suplier</label>
        <input
          id="suplier"
          type="text"
          name="suplier"
          v-model="product.suplier"
        />
      </div>
      <div class="input">
        <label for="description">description</label>
        <input
          id="description"
          type="text"
          name="description"
          v-model="product.description"
        />
      </div>
      <div class="input">
        <label for="class">class</label>
        <input id="class" type="number" name="class" v-model="product.class" />
      </div>
      <div class="input">
        <label for="price">price</label>
        <input id="price" type="number" name="price" v-model="product.price" />
      </div>
      <div class="input-group">
        <div class="input">
          <label for="min">min</label>
          <input id="min" type="number" name="min" v-model="product.min" />
        </div>
        <div class="input">
          <label for="max">max</label>
          <input id="max" type="number" name="max" v-model="product.max" />
        </div>
      </div>

      <div class="input">
        <label for="place">place</label>
        <input id="place" type="number" name="place" v-model="product.place" />
      </div>

      <div class="input-group">
        <div class="input-btn">
          <button @click.prevent="add(product)" class="confirm">Confirm</button>
        </div>
        <div class="input-btn">
          <button @click.prevent="cancel()" class="cancel">Cancel</button>
        </div>
      </div>
    </form>
    <div class="success" v-else-if="page == 1">
      <div class="success-header">Success</div>
      <QrCode :text="product.code" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { products } from '@/store'

export default Vue.extend({
  data() {
    return {
      product: {} as any,
      value: 'https://example.com',
      size: 300,
      test: false,
      page: 0,
    }
  },
  computed: {
    products() {
      return products
    },
  },
  methods: {
    async add(product: object) {
      const result = await products.add(product)
      if (result.message) {
        this.page = 1
      }
    },
    cancel() {
      this.test = true
    },
  },
})
</script>

<style scoped>
.page {
  @apply w-2/6 h-3/5;
}

.add-product-form,
.success {
  @apply w-full h-full flex flex-col justify-center items-center gap-5 bg-cloud-burst-500 dark:bg-transparent dark:border dark:border-royal-blue-500 shadow-xl rounded-xl p-4 relative;
}

.add-product-form h1 {
  @apply absolute -top-7  bg-black bg-opacity-20 p-2 text-3xl text-royal-blue-500 text-center uppercase dark:bg-french-gray-500 font-sans tracking-wider rounded-lg;
}

.add-product-form .input-group {
  @apply w-3/6 flex justify-between items-center;
}

.add-product-form .input-group .input {
  @apply w-2/5 flex justify-around items-center;
}

.input {
  @apply w-3/6 h-10 flex justify-center relative border p-2 rounded-md border-royal-blue-500 shadow-xl dark:text-royal-blue-500;
}

.add-product-form label {
  @apply absolute -top-2.5 left-2/4 transform -translate-x-1/2 text-royal-blue-100 uppercase text-sm bg-cloud-burst-500 font-sans tracking-widest px-2;
}

.add-product-form input {
  @apply text-white bg-transparent w-full dark:text-royal-blue-500;
}

.add-product-form input:focus {
  @apply text-white bg-transparent outline-none dark:text-royal-blue-500;
}

.input-btn {
  @apply w-2/5 h-10 flex justify-center relative border rounded-md border-royal-blue-500 shadow-xl;
}

.confirm {
  @apply text-jungle-green-500 hover:text-jungle-green-400 dark:hover:text-green-500 dark:hover:bg-transparent dark:hover:shadow-lg w-full h-full hover:bg-black hover:bg-opacity-20;
}

.cancel {
  @apply text-amaranth-500 hover:text-amaranth-400 dark:hover:text-red-500 dark:hover:bg-transparent dark:hover:shadow-lg w-full h-full hover:bg-black hover:bg-opacity-20;
}

.success-header {
  @apply text-jungle-green-500 text-3xl;
}
</style>
