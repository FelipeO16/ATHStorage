<template>
  <div class="qr-code">
    <img
      :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`"
    />
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
