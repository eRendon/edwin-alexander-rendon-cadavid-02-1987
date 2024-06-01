<template>
  <router-link :to="to" class="block link-button w-full text-white text-center py-2 hover:bg-gray-800" prefetch={false}>
    {{ label }}
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>

<style scoped>
.link-button {
  background-color: #5864F6;
}
</style>
