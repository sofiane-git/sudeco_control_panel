<template>
  <div class="bg-gray-100 h-screen">
    <AppHeader />
    <div
      class="absolute top-44 left-[3.71rem] h-2/3 w-11/12 rounded shadow-xl bg-white"
    >
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { AppHeader } from "@/components/templates";
</script>
