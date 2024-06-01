<template>
  <section class="flex-1 h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4 md:p-6">
    <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 text-center max-w-md w-full">
      <svg data-id="17"
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round"
           class="h-12 w-12 text-gray-400 mx-auto mb-4">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
        <line x1="9" x2="9.01" y1="9" y2="9"></line>
        <line x1="15" x2="15.01" y1="9" y2="9"></line>
      </svg>
      <h2 class="text-2xl font-bold mb-2"
          data-id="18">Page Not Found
      </h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6" data-id="19">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <router-link to="/" data-id="20"
         class="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
         href="#" rel="ugc">
        Go back home
      </router-link>
    </div>
  </section>
</template>
