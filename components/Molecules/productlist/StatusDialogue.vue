<template>
  <div class="dialogue">
    <div
      class="dialogue-box"
      :class="{ 'h-2/5': !showQrCode, 'h-3/5': showQrCode }"
    >
      <button class="show-qrcode" @click="showQrCode = !showQrCode">
        {{ showQrCode ? 'Hidden QrCode' : 'Show QrCode' }}
      </button>
      <img
        v-show="showQrCode"
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
        <button @click="sub()" class="quantity-button">
          <font-awesome-icon :icon="faMinus"></font-awesome-icon>
        </button>
        <input
          id="quantity"
          type="number"
          name="quantity"
          v-model.number="item_quantity"
        />
        <button @click="sum()" class="quantity-button">
          <font-awesome-icon :icon="faPlus"></font-awesome-icon>
        </button>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dialogue, cart } from '@/store'
import { Item, CartItem } from '@/models'
import {
  faCancel,
  faCircleCheck,
  faCircleXmark,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  data() {
    return {
      item_quantity: 1,
      showQrCode: true,
    }
  },
  computed: {
    item() {
      return dialogue.$dialogue_item
    },
    cart() {
      return cart
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
    faPlus() {
      return faPlus
    },
    faMinus() {
      return faMinus
    },
  },
  methods: {
    closeDialogue(status: boolean) {
      this.dialogueBox.toggleDialogue(status)
    },
    addToCart(item: Item) {
      // this.dialogueBox.$dialogue_box = false
      let data = {
        id: item.id,
        code: item.code,
        suplier: item.suplier,
        description: item.description,
        quantity: this.item_quantity,
      } as CartItem
      this.cart.increment(data)
    },
    sum() {
      this.item_quantity += 1
      ;(this.$refs.quantity as HTMLInputElement)?.focus()
    },
    sub() {
      this.item_quantity += 1
      ;(this.$refs.quantity as HTMLInputElement)?.focus()
    },
    count() {},
  },
})
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
/* Dialogue */

.dialogue {
  @apply absolute w-5/6 h-5/6 flex flex-col justify-center items-center bg-opacity-40 bg-black overflow-hidden;
}

/* Dialogue box */

.dialogue-box {
  @apply flex flex-col justify-around gap-4 items-center rounded-xl border border-royal-blue-500 p-4 bg-cloud-burst-800 max-w-3xl;
}

.show-qrcode {
  @apply text-blue-500;
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
  @apply text-white bg-transparent text-center;
}

.dialogue-quantity input:focus {
  @apply text-white bg-transparent outline-none;
}

.quantity-button {
  @apply hover:text-blue-500;
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
