<template>
  <button class="toggle" @click="toggleDarkmode">
    <font-awesome-icon :icon="faMoon" v-if="darkmode.$darkmode" />
    <font-awesome-icon :icon="faSun" v-if="!darkmode.$darkmode" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { darkmode } from '@/store'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  computed: {
    darkmode() {
      return darkmode
    },
    faMoon() {
      return faMoon
    },
    faSun() {
      return faSun
    },
  },
  methods: {
    toggleDarkmode() {
      darkmode.toggle()
      // this.$toast.success('Teste Sucesso...', { duration: 3000 })
      // this.$toast.error('Teste Erro...', { duration: 3000 })
      // this.$toast.info('Teste Informação...', { duration: 3000 })
      // this.$toast.show('Teste Padrão...', { duration: 3000 })
    },
  },
})
</script>

<style scoped>
.toggle {
  @apply text-xl flex items-center justify-center text-white hover:text-royal-blue-500 font-extralight cursor-pointer;
}
</style>
