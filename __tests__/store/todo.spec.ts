import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "../../store/todo";

beforeAll(() => {
  setActivePinia(createPinia());
});
describe("Todo Pinia Store", () => {
  let store: ReturnType<typeof useTodoStore>;

  beforeEach(() => {
    store = useTodoStore();
  });

  afterEach(() => {
    store.$reset();
  });
  test("store initialized", () => {
    expect(store).toBeDefined();
  });
  test("initialize with empty items", () => {
    expect(store.items).toStrictEqual([]);
  });

  test("createTodo", () => {
    store.add({ title: "create test" });
    const todo = store.items[0];
    expect(todo.title).toStrictEqual("create test");
  });

  test("getById", () => {
    store.add({ title: "Test" });
    const item = store.items[0];
    const todo = store.getById(item.id);

    expect(todo).toStrictEqual(item);
  });
  test("getOrderedTodos", () => {
    const items = [
      {
        createdAt: new Date(2020, 12, 14),
      },
      {
        createdAt: new Date(2017, 2, 14),
      },
      {
        createdAt: new Date(2022, 2, 14),
      },
    ];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.items = items;

    const orderedTodos = store.getOrderedTodos;

    expect(orderedTodos[0].createdAt.getFullYear()).toBe(2017);
    expect(orderedTodos[1].createdAt.getFullYear()).toBe(2021);
    expect(orderedTodos[2].createdAt.getFullYear()).toBe(2022);
  });
  test("updateTodo", () => {
    store.add({ title: "Test" });
    const todo = store.items[0];

    store.update(todo.id, { title: "updated", done: true, content: "blabla" });
    const updated = store.items[0];

    expect(updated.title).toStrictEqual("updated");
    expect(updated.done).toBe(true);
    expect(updated.content).toStrictEqual("blabla");
  });
  test("deleteTodo", () => {
    store.add({ title: "test" });
    const todo = store.items[0];

    store.delete(todo.id);

    expect(store.items).toStrictEqual([]);
  });
});
