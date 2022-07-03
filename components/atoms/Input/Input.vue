<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    :class="[
      inputCustomClass,
      type === 'checkbox' ? 'a-input-checkbox' : 'a-input',
    ]"
    :placeholder="placeholder"
    :disabled="disabled"
    :checked="ckboxChecked"
    autocomplete="off"
    :list="list"
  />
</template>

<script setup lang="ts">
type InputType = "text" | "email" | "password" | "checkbox" | "s";
const props = defineProps<{
  id?: string;
  type: InputType;
  name?: string;
  inputCustomClass?: string;
  placeholder?: string;
  disabled?: boolean;
  ckboxChecked?: boolean;
  list?: any;
}>();
</script>
