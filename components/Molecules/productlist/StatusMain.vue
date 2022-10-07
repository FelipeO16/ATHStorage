<template>
  <div class="staus-main">
    <client-only>
      <StatusCategories />
      <div
        class="item"
        v-for="(item, index) in products.$productsList"
        :key="index"
        @click="setDialogue(item)"
      >
        <StatusItem :product="item" />
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dialogue, products } from '@/store'
export default Vue.extend({
  name: 'StatusMain',
  computed: {
    dialogueBox() {
      return dialogue
    },
    products() {
      return products
    },
  },
  data() {
    return {
      text: [] as any,
      result: '',
      camera: 'auto',
      error: '',
    }
  },
  methods: {
    showOption(index: any) {
      this.text[index] = true
      this.$forceUpdate()
    },
    hideOption(index: any) {
      this.text[index] = false
      this.$forceUpdate()
    },
    onDecode(decodedString: any) {
      console.log(decodedString)
    },
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
    setDialogue(item: any) {
      this.dialogueBox.toggleDialogue(true)
      this.dialogueBox.set(item)
    },
  },
})
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  @apply w-3 border border-royal-blue-500 rounded-xl;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-ebony-500 rounded-xl;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply w-2 bg-royal-blue-500 rounded-xl;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #555;
} */

.staus-main {
  @apply w-full h-full flex flex-col gap-4 p-2 relative overflow-y-auto overflow-x-hidden;
}

.item {
  @apply w-full h-10 border border-royal-blue-500 relative rounded-md;
}
</style>
