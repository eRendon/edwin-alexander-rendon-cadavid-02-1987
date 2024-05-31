<template>
  <div class="flex flex-col h-screen">
    <NavBarLayout></NavBarLayout>
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBarLayout from './NavBarLayout.vue';
</script>

<style scoped>

</style>
