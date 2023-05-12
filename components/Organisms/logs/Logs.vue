<template>
  <div class="email-logs" v-if="page == 5">
    <!-- do a table responsive with 3 columns and th -->
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Supplier</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <client-only>
          <tr v-for="(item, index) in list" :key="index">
            <td>{{ item.data.email.subject }}</td>
            <td>
              {{
                new Date(item.created_at).toLocaleString('en-US', {
                  timeZone: 'Australia/Brisbane',
                })
              }}
            </td>
            <td>{{ item.data.email.status }}</td>
          </tr>
        </client-only>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { cart, pages } from '@/store'
export default Vue.extend({
  computed: {
    page() {
      return pages.$page
    },
  },
  data() {
    return {
      list: {},
    }
  },
  async created() {
    const respon = await cart.getLogs()
    this.list = respon
  },
})
</script>

<style scoped>
.email-logs {
  @apply w-full h-full flex flex-col items-center py-4 gap-4 bg-midnight-500 dark:bg-french-gray-500 overflow-auto;
}

table {
    @apply table-auto w-11/12 lg:w-3/6;
}

th {
    @apply bg-french-gray-500 dark:bg-midnight-500 border-2 border-white text-midnight-500;
}

td {
    @apply bg-royal-blue-500 dark:bg-french-gray-500 border-2 border-white text-white;
}
</style>
