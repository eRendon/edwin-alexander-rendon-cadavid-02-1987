<template>
  <div class="h-screen ">
    <NavBarLayout></NavBarLayout>
    <router-view class="max-w-screen-lg ml-auto mr-auto pt-20 pb-5"></router-view>
    <Alert></Alert>
    <Loading></Loading>
  </div>
</template>

<script setup lang="ts">
import NavBarLayout from './NavBarLayout.vue';
import Alert        from '../components/Atomic/Alert.vue';
import Loading from '../components/Atomic/Loading.vue'
</script>
