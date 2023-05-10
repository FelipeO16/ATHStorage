<template>
  <div
    class="sidebar-icon"
    @click="pages.set(index)"
    :class="{ active: actived }"
  >
    <div class="tooltip">
      <span class="tooltiptext">{{ text[index] }}</span>
      <font-awesome-icon :icon="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { pages } from '@/store'
export default Vue.extend({
  props: {
    icon: {
      type: Object,
      required: true,
    },
    actived: {
      type: Boolean,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      return pages
    },
  },
  data() {
    return {
      text: ['List', 'Add', 'Count', 'Cart', 'Logs', 'QR'],
    }
  },
})
</script>

<style scoped>
.sidebar-icon {
  @apply w-full p-2 text-2xl flex items-center justify-center text-french-gray-500  hover:text-royal-blue-500 font-extralight cursor-pointer;
}

.active {
  @apply text-royal-blue-500;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 60px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -30px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
  @apply text-lg;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
