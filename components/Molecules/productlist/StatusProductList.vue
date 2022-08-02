<template>
  <div class="status-product-list">
    <StatusHeader />
    <StatusMain />
    <StatusDialogue v-show="dialogueBox.$dialogue_box" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { dialogue } from '@/store'
export default Vue.extend({
  computed: {
    dialogueBox() {
      return dialogue
    },
  },
})
</script>

<style scoped>
.status-product-list {
  @apply w-5/6 h-5/6 flex flex-col items-center gap-4 bg-cloud-burst-500 text-french-gray-500 rounded-lg;
}
</style>
