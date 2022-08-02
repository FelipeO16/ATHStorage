<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <Logo />
    </div>
    <SidebarIcons />
    <ToggleDarkmode />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.sidebar {
  @apply w-24 h-full flex flex-col items-center justify-between gap-16 py-10 bg-ebony-500;
}

.sidebar-logo {
  @apply w-3/4 flex justify-center items-center;
}
</style>
