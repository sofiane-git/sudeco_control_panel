import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import {
  Todo,
  TodoState,
  TodoAdd,
  TodoUpdate,
} from "@/models/interfaces/store/todo";

const state = (): TodoState => ({
  items: [],
});

const getters = {
  getById: (state: TodoState) => (id: string) =>
    state.items.find((item: Todo) => (item as Todo).id === id),
  getOrderedTodos: (state: TodoState) =>
    [...state.items].sort(
      (a: Todo, b: Todo) => a.createdAt.getTime() - b.createdAt.getTime()
    ),
};

const actions = {
  add(partialTodo: TodoAdd) {
    const todo: Todo = {
      id: uuid(),
      ...partialTodo,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.items.push(todo);
  },
  update(id: string, update: TodoUpdate) {
    const index = this.items.findIndex((item: Todo) => item.id === id);
    this.items[index] = {
      ...this.items[index],
      ...update,
      updatedAt: new Date(),
    };
  },
  delete(id: string) {
    this.items = this.items.filter((item: Todo) => item.id !== id);
  },
};

export const useTodoStore = defineStore("todoStore", {
  state,
  getters,
  actions,
});
