import { TodoList } from "../entities/todo";
import getTodoCount from "./getTodoCount";



describe("getTodoCount", () => {
  it("should return the correct count of completed and inComplete todos", () => {
    const todos: TodoList = [
      { id: "1", value: "todo 1", done: true },
      { id: "2", value: "todo 2", done: false },
      { id: "3", value: "todo 3", done: true },
    ];
    const { completed, inComplete } = getTodoCount(todos);

    expect(completed).toBe(2);
    expect(inComplete).toBe(1);
  });


  it("should return 0 for completed and inComplete todos when no todos are passed", () => {
    const todos: TodoList = [];
    const { completed, inComplete } = getTodoCount(todos);

    expect(completed).toBe(0);
    expect(inComplete).toBe(0);
  });

  it("should return 0 for completed and inComplete todos when all todos are incomplete", () => {
    const todos: TodoList = [
      { id: "1", value: "todo 1", done: false },
      { id: "2", value: "todo 2", done: false },
      { id: "3", value: "todo 3", done: false },
    ];
    const { completed, inComplete } = getTodoCount(todos);

    expect(completed).toBe(0);
    expect(inComplete).toBe(3);
  });
});
