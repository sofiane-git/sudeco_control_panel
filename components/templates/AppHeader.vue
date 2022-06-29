<template>
  <div
    class="bg-gray-800 w-[98%] mx-auto h-64 rounded-t-lg shadow-black shadow-sm"
  >
    <div class="w-[95%] border-b h-14 mx-auto flex items-center">
      <Image
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Logo"
        class="h-8 w-8"
      />
      <div class="ml-6 flex-1">
        <NavBar :links="links" />
      </div>
      <ButtonWithIcon
        icon-type="outline"
        :d="[{ path: icons.user_circle.outline.path }]"
        title="Mon profil"
        custom-icon-class="w-9 h-9 text-white"
      />
    </div>
    <div>
      <Text
        tag="h2"
        class="text-white text-4xl w-11/12 mx-auto mt-8 drop-shadow-2xl shadow-white"
      >
        {{ displayText() }}
      </Text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Image, Text } from "@/components/atoms";
import { NavBar, ButtonWithIcon } from "@/components/molecules";
import icons from "assets/icons";

const links = [
  {
    path: "/",
    title: "Tableau de bord",
  },
  {
    path: "/invoice",
    title: "Facture",
  },
  {
    path: "/quotation",
    title: "Devis",
  },
  {
    path: "/comptability",
    title: "Comptabilité",
  },
];

const displayText = () => {
  if (sessionStorage.getItem("Location")) {
    const locationOnSessionStorageStringify =
      sessionStorage.getItem("Location");
    const locationOnSessionStorage = JSON.parse(
      locationOnSessionStorageStringify
    );
    return locationOnSessionStorage.title;
  } else {
    return "Sudeco";
  }
};
</script>
