<template>
  <button class="block link-button w-full text-white text-center py-2 "
          :class="styles"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface PropsButton {
  label?: string
  styles?: string
}
withDefaults(defineProps<PropsButton>(), {
  styles: 'bg-gray-700 hover:bg-gray-800',
})
</script>

<style scoped>

</style>
