<template>
  <div class="home">
    <topbar></topbar>
    <water></water>
  </div>
</template>

<script>
import topbar from '@/views/topbar.vue'
import water from '@/views/waterfall.vue'
export default {
  components:{
    topbar,
    water
  }
}
</script>
