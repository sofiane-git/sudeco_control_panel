import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import {
  Todo,
  TodoState,
  TodoAdd,
  TodoUpdate,
  Todos,
} from "@/models/store/todo";

const state = (): TodoState => ({
  items: [],
});

const getters = {
  getById: (state: TodoState) => (id: string) =>
    state.items.find((item: Todo) => !!item && (item as Todo).id === id),
  getOrderedTodos: (state: TodoState) =>
    [...state.items].sort(
      (a: Todo, b: Todo) => a.createdAt.getTime() - b.createdAt.getTime()
    ),
};

const actions = {
  add(todo: TodoAdd) {
    const id = uuid();
    const itemToAdd: Todo = {
      id,
      ...todo,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.items.push(itemToAdd);
    console.log(this.items);
  },
  update(id: string, update: TodoUpdate) {
    const items: Todos = this.items;
    const index: number | undefined = items.findIndex(
      (item: Todo) => !!item && item.id === id
    );

    items[index] = {
      ...items[index],
      ...update,
      updatedAt: new Date(),
    };
  },
  remove(id: string) {
    this.items = this.items.filter((item: Todo) => item.id !== id);
  },
};

export const useTodoStore = defineStore("todoStore", {
  state,
  getters,
  actions,
});
