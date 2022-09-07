<template>
  <div class="dialogue">
    <div class="dialogue-box">
      <img
        class="qr"
        :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.code}`"
      />
      <div class="dialogue-text" v-if="item.status == 'Bad'">
        Add <span>{{ item.description }} </span>to cart?
      </div>
      <div class="dialogue-text" v-if="item.status == 'Good'">
        Product <span>{{ item.description }} </span>is good, add to cart?
      </div>
      <div class="dialogue-quantity">
        <label for="quantity">Quantity</label>
        <input id="quantity" type="number" name="quantity" />
      </div>
      <div class="dialogue-confirm">
        <button @click="addToCart(item)">
          <font-awesome-icon :icon="faCircleCheck" />
        </button>
        <button @click="closeDialogue(false)">
          <font-awesome-icon :icon="faCircleXmark" />
        </button>
      </div>
    </div>

    <!-- <div class="teste">
      description: {{ item.description }}
      <br />
      class: {{ item.class }}
      <br />
      price: {{ item.price }}
      <br />
      total: {{ item.total }}
      <br />
      min: {{ item.min }}
      <br />
      max: {{ item.max }}
      <br />
      place: {{ item.place }}
      <br />
      status: {{ item.status }}
      <br />
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dialogue } from '@/store'
import {
  faCancel,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  computed: {
    item() {
      return dialogue.$dialogue_item
    },
    dialogueBox() {
      return dialogue
    },
    faCancel() {
      return faCancel
    },
    faCircleCheck() {
      return faCircleCheck
    },
    faCircleXmark() {
      return faCircleXmark
    },
  },
  methods: {
    closeDialogue(status: boolean) {
      this.dialogueBox.toggleDialogue(status)
    },
    addToCart(item: object) {
      // this.dialogueBox.$dialogue_box = false
      // this.dialogueBox.$cart_list.push(item)
    },
  },
})
</script>

<style scoped>
/* Dialogue */

.dialogue {
  @apply absolute w-5/6 h-5/6 flex flex-col justify-center items-center bg-opacity-40 bg-black overflow-hidden;
}

/* Dialogue box */

.dialogue-box {
  @apply h-2/5 flex flex-col justify-around gap-4 items-center rounded-xl border border-royal-blue-500 p-4 bg-cloud-burst-800 max-w-3xl;
}

.dialogue-text {
  @apply text-white text-center text-base;
}

.dialogue-text span {
  @apply italic text-royal-blue-300;
}

/* Dialogue quantity */

.dialogue-quantity {
  @apply flex justify-center items-center relative border border-royal-blue-500 rounded-md p-2;
}

.dialogue-quantity label {
  @apply absolute -top-2.5 left-2/4 transform -translate-x-1/2 text-royal-blue-100 uppercase text-sm bg-cloud-burst-800 font-sans tracking-widest px-2;
}

.dialogue-quantity input {
  @apply text-white bg-transparent;
}

.dialogue-quantity input:focus {
  @apply text-white bg-transparent outline-none;
}

/* Dialogue confirm */

.dialogue-confirm {
  @apply flex justify-center gap-5 items-center;
}

.dialogue-confirm button:nth-child(1) {
  @apply text-2xl text-green-500;
}

.dialogue-confirm button:nth-child(2) {
  @apply text-2xl text-red-500;
}
</style>
