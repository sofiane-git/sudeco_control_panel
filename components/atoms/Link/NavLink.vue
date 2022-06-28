<template>
  <nuxt-link
    class="px-2 mx-2 text-white border-0 rounded active:bg-gray-50 active:shadow-inner hover:shadow"
    active-class="text-blue-400"
    :to="link"
  >
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{
  link: string;
}>();
</script>
