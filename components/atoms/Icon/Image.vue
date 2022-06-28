<template>
  <img :src="src" :alt="alt" />
</template>

<script lang="ts" setup>
defineProps<{
  src: string;
  alt: string;
}>();
</script>
