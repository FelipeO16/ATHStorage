<template>
  <div class="count" v-if="page == 2">
    <div class="box-count" v-show="showProduct">
      <!-- <div class="name">
        <label for="product-name">Product:</label>
        <div>{{ product.description }}</div>
      </div> -->
      <div class="quantity">
        <label for="product-quantity">Qtt:</label>
        <input
          type="number"
          placeholder="quantity"
          v-model.number="new_value"
        />
      </div>
      <button @click="set()">Set</button>
    </div>
    <div class="test">
      <qrcode-stream @decode="onDecode" @init="onInit" />
      <!-- <qrcode-capture @decode="onDecode" :capture="option" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { pages, products } from '@/store'
import { Item } from '@/models'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
export default Vue.extend({
  data() {
    return {
      new_value: 0,
      camera: 'auto',
      option: { text: 'rear camera (default)', value: 'environment' },
      product: {} as Item,
      result: '',
      showScanConfirmation: false,
      showProduct: true,
      description: '',
      error: '',
    }
  },
  computed: {
    page() {
      return pages.$page
    },
    check() {
      return faCheckCircle
    },
    // product() {
    //   return products.$productCount as Item
    // },
  },

  methods: {
    async onInit(promise: any) {
      try {
        await promise
      } catch (error: any) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permission'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        } else if (error.name === 'InsecureContextError') {
          this.error =
            'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
        } else {
          this.error = `ERROR: Camera error (${error.name})`
        }
      }
    },
    async onDecode(decodedString: string) {
      const check = await products.get(decodedString)
      this.product = check[0]
      alert(this.product.description)
      // products.count(check[0])
      this.pause()
      await this.timeout(500)
      this.unpause()
    },
    async set() {
      this.product.storage = this.new_value
      try {
        await products.update(this.product)
        this.$toast.success("Product's storage updated!", {
          duration: 3000,
          position: 'top-center',
        })
      } catch (e) {
        this.$toast.error('Error', {
          duration: 3000,
          position: 'top-center',
        })
      }
      this.new_value = 0
      this.product.description = ''
    },
    unpause() {
      this.camera = 'auto'
    },

    pause() {
      this.camera = 'off'
    },

    timeout(ms: number) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms)
      })
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

.scan-confirmation {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.box-count div {
  @apply flex gap-2;
}

input {
  @apply w-full text-royal-blue-500;
}

.test {
  @apply w-5/6 h-3/6;
}
</style>
