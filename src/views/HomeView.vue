<template>
  <div class="home">
    <TopNav/>
    <SwpierTop/>
    <IconList/>
    <recommendMusic/>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue';
import SwpierTop from '@/components/home/SwpierTop.vue';
import IconList from '@/components/home/IconList.vue';
import recommendMusic from '@/components/home/recommendMusic.vue'

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
