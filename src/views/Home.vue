<template>
  <div class="home">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from '@/views/topbar.vue'
export default {
  components:{
    topbar,
    
  }
}
</script>
