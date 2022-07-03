<template>
  <input-field-with-button
    id="addToDo"
    v-model.trim="newTodo"
    :value="newTodo"
    placeholder="Saisir l'intitulé de la tâche"
    label-content="Saisir intitulé"
    input-type="text"
    :disabled="disabled"
    button-content="Ajouter une tâche"
    :error="error"
    @save="saveNewTodo"
    @canceled="cancelAddTodo"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTodoStore } from "@/store/todo";
import { InputFieldWithButton } from "@/components/molecules";

const todoStore = useTodoStore();
const newTodo = ref("");
const error = ref(false);
const disabled = ref(false);

watch(error, (value: boolean) => {
  if (value) {
    setTimeout(() => {
      error.value = false;
    }, 3000);
  }
});

const saveNewTodo = () => {
  if (newTodo.value.length <= 0) {
    error.value = true;
    return;
  }

  todoStore.add({
    label: newTodo.value,
  });

  newTodo.value = "";
};

const canceled = ref(false);

watch(canceled, () => {
  console.log(canceled.value);
});

const cancelAddTodo = () => {
  canceled.value = true;
};
</script>
