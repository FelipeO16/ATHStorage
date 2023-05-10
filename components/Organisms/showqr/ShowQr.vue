<template>
    <div class="show-list" v-if="page == 5">
      <div v-for="product in products.$productsList" :key="product">
        <div class="w-64 h-64 bg-white dark:bg-midnight-500 rounded-lg flex flex-col justify-center items-center">
          <div class="w-full flex justify-center">
            <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${product.code}`" alt="">
          </div>
            <div class="w-full flex justify-center dark:text-white p-4 text-xs">
                <p class="text-center">{{ product.description }}</p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import { pages, products } from '@/store'
  export default Vue.extend({
    computed: {
        page() {
            return pages.$page
        },
        products() {
            return products
        },
    },
  })
  </script>
  
  <style scoped>
  .show-list {
    @apply w-full h-full flex items-center flex-wrap justify-center gap-4 bg-midnight-500 dark:bg-french-gray-500 overflow-auto;
  }
  </style>
  