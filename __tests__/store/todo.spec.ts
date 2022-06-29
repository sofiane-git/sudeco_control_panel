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

const getFirstTodoId = (store: ReturnType<typeof useTodoStore>) =>
  store.items[0].id;

const itemToReturn = (label: string, id: string = expect.any(String)) => ({
  id,
  label,
  done: false,
  createdAt: expect.any(Date),
  updatedAt: expect.any(Date),
});

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

  test("add a todo", () => {
    store.add({ label: "create test" });
    const todo = store.items[0];
    expect(todo).toStrictEqual(itemToReturn("create test"));
  });

  test("getById", () => {
    store.add({ label: "Test GetById" });
    const id = getFirstTodoId(store);

    const todo = store.getById(id);

    expect(todo).toStrictEqual(itemToReturn("Test GetById", id));
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
    store.add({ label: "Test" });
    const id = getFirstTodoId(store);

    store.update(id, { label: "updated", done: true, content: "blabla" });
    const updated = store.items[0];

    expect(updated.label).toStrictEqual("updated");
    expect(updated.done).toBe(true);
    expect(updated.content).toStrictEqual("blabla");
  });

  test("deleteTodo where is alone", () => {
    store.add({ label: "test" });
    const id = getFirstTodoId(store);

    store.remove(id);

    expect(store.items).toStrictEqual([]);
  });

  test("deleteTodo where is not alone", () => {
    store.add({ label: "test 1" });
    store.add({ label: "test 2" });
    store.add({ label: "test 3" });
    store.add({ label: "test 4" });

    let id = getFirstTodoId(store);
    store.remove(id);

    expect(store.items).toStrictEqual([
      itemToReturn("test 2"),
      itemToReturn("test 3"),
      itemToReturn("test 4"),
    ]);

    id = store.items[1].id;
    store.remove(id);

    expect(store.items).toStrictEqual([
      itemToReturn("test 2"),
      itemToReturn("test 4"),
    ]);
  });
});
