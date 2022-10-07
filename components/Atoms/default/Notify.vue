<template>
  <div ref="dropdown" class="dropdown">
    <strong class="dropdown-label" @click="show = !show"
      >Click me to open!</strong
    >
    <p class="dropdown-content" v-if="show">Lorum ipsum...</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      show: false,
    }
  },
})
</script>

<style scoped></style>
