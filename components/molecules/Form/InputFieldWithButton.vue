<template>
  <div class="border flex justify-center items-center px-3 py-2 w-2/5">
    <input-field
      :id="id"
      :placeholder="placeholder"
      :label-content="labelContent"
      :input-type="inputType"
      :disabled="disabled"
      :error="error"
      :value="modelValue"
      input-custom-class=""
      @keyup.enter="$emit('save')"
      @keyup.esc="$emit('canceled')"
      @input="$emit('update:modelValue', $event.target?.value)"
    />
    <Button class="ml-6 h-[2.87rem] w-56 text-center" @click="$emit('save')">
      {{ buttonContent }}
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "@/components/atoms";
import { InputField } from "@/components/molecules";

defineProps<{
  id?: string;
  placeholder?: string;
  labelContent: string;
  inputType: "text" | "email";
  disabled?: boolean | undefined;
  buttonContent: string;
  error: boolean;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "save"): void;
  (e: "canceled"): void;
}>();
</script>
