<template>
  <div class="flex justify-center mt-8">
    <nav class="mx-auto flex w-full justify-center">
      <ul class="flex flex-row items-center gap-1">
        <li class="">
          <button @click="prevPage" :disabled="page <= 1"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 class="lucide lucide-chevron-left h-4 w-4">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span>Previous</span>
          </button>
        </li>
        <li class=""
            v-for="pageNumber in visiblePages"
            :key="pageNumber"
            @click="changePage(pageNumber)">
          <button aria-current="page"
                  :class="{ 'border': page === pageNumber }"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
            {{ pageNumber }}
          </button>
        </li>

        <li v-if="page < totalPages - 1">
          <span class="flex h-9 w-9 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 class="lucide lucide-ellipsis h-4 w-4">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </span>
        </li>
        <li>
          <button @click="nextPage" :disabled="page >= totalPages"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5">
            <span>Next</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 class="lucide lucide-chevron-right h-4 w-4">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  page: number;
  totalPages: number;
}>()

const emits = defineEmits(['changePage'])

const prevPage = () => {
  if (props.page > 1) {
    emits('changePage', props.page - 1)
  }
}

const nextPage = () => {
  if (props.page < props.totalPages) {
    emits('changePage', props.page + 1)
  }
}

const changePage = (pageNumber: number) => {
  emits('changePage', pageNumber)
}

const visiblePages = computed(() => {
  const pages = []
  if (props.totalPages <= 3) {
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i)
    }
  } else if (props.page <= 2) {
    pages.push(1, 2, 3)
  } else if (props.page >= props.totalPages - 1) {
    pages.push(props.totalPages - 2, props.totalPages - 1, props.totalPages)
  } else {
    pages.push(props.page - 1, props.page, props.page + 1)
  }
  return pages
})
</script>

<style scoped>

</style>
