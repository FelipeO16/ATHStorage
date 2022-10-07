<template>
  <div class="cart-list">
    <div class="header" @click="show = !show">
      <CartListHeader :suplier="title" />
    </div>
    <Transition name="slide-fade">
      <CartCategories v-show="show" />
      <div class="list" v-show="show">
        <CartItem v-for="(item, index) in list" :key="index" :item="item" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
</style>
