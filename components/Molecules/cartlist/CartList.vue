<template>
  <div class="cart-list">
    <div class="header" @click="show = !show">
      <CartListHeader :suplier="title" />
    </div>
    <Transition name="slide-fade">
      <div v-show="show">
        <CartCategories />
        <div class="list">
          <CartItem v-for="(item, index) in list" :key="index" :item="item" />
        </div>
        <div class="buy">
          <button class="bg-green-500" @click="buy(title)">Buy</button>
          <button class="bg-red-500" @click="cart.remove(title)">Remove</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { cart } from '@/store'
import { Item } from '@/models'
export default Vue.extend({
  props: {
    list: Array,
    title: String,
  },
  data() {
    return {
      show: false,
    }
  },
  methods:{
    async buy(title: string) {
      var products = [] as Array<object>
      this.list.map((item: any) => {
        products.push({
          description: item.description,
          quantity: item.quantity,
        });
      });
      console.log(products)
      await cart.buy({products, title})
      this.show = false
    }
  },
  computed: {
    cart() {
      return cart
    },
  },
})
</script>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.cart-list {
  @apply w-5/6 bg-cloud-burst-500 border border-royal-blue-500 rounded-t-xl;
}
.header {
  @apply cursor-pointer;
}
.list {
  @apply w-full;
}

.buy {
  @apply w-full flex h-8 rounded-b-xl justify-center items-center;
}

.buy button {
  @apply w-20 h-full text-white;
}
</style>
