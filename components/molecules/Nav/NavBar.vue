<template>
  <div>
    <NavLink
      v-for="item in links"
      :to="item.path"
      :value="modelValue"
      @click="$emit('update:modelValue', item.title)"
    >
      {{ item.title }}
    </NavLink>
  </div>
</template>
<script lang="ts" setup>
import { NavLink } from "@/components/atoms";

interface NavItem {
  path: string;
  title: string;
}

defineProps<{
  links: NavItem[];
  modelValue?: any;
}>();
</script>
