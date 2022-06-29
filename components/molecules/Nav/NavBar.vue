<template>
  <div>
    <NavLink
      v-for="item in links"
      :to="item.path"
      @click="storeOnSessionStorage(item)"
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
}>();

const storeOnSessionStorage = (item: NavItem): void => {
  sessionStorage.setItem("Location", JSON.stringify(item));
};
</script>
