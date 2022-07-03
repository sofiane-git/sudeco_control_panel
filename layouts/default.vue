<template>
  <div
    class="grid grid-cols-12 grid-rows-6 justify-center bg-gray-100 h-screen"
  >
    <AppHeader />
    <div
      class="z-50 col-start-1 md:col-start-2 lg:col-start-3 col-span-full md:col-span-10 lg:col-span-8 row-end-7 row-span-5 self-end mx-4 sm:mx-10 md:mx-14 lg:mx-0 h-[80%] sm:h-[86%] mb-14 rounded shadow-2xl bg-white px-4 py-2"
    >
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { AppHeader, AppFooter } from "@/components/templates";

/*
bg-red-50 sm:bg-yellow-50 md:bg-blue-100 lg:bg-green-100 xl:bg-purple-100
*/
</script>
