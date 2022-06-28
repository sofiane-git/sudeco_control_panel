<template>
  <textarea
    :id="id"
    :v-model="modelValue"
    :name="name"
    class="a-textarea"
    :placeholder="placeholder"
    :disabled="disabled"
  >
  </textarea>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
}>();
</script>
