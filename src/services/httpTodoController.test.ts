import { HTTPTodoController } from "./httpTodoController";

const mockTodos = [
  {
    id: "1",
    value: "test",
    done: false,
    createdAt: Date.now(),
  },
  {
    id: "2",
    value: "test",
    done: true,
    createdAt: Date.now(),
  },
  {
    id: "3",
    value: "test",
    done: false,
    createdAt: Date.now(),
  },
];

const mockTodo = {
  id: "4",
  value: "test",
  done: false,
  createdAt: Date.now(),
};

beforeAll(() => jest.spyOn(window, 'fetch'))


describe("HTTPTodoController", () => {
  test("getTodos should return all todos", async () => {

    window.fetch = jest.fn().mockResolvedValue({
      json: async () => mockTodos,
    });

    const httpTodoController = new HTTPTodoController(
      "http://localhost:3001"
    );

    const { todos, error } = await httpTodoController.getTodos();
    expect(todos).toEqual(mockTodos);
    expect(error).toBe(null);
  }); 

  test("getTodos should return error when server is down", async () => {
    window.fetch = jest.fn().mockResolvedValue({
      json: async () => {
        throw new Error("Server is down");
      },
    });

    const httpTodoController = new HTTPTodoController(
      "http://localhost:3001"
    );

    const { todos, error } = await httpTodoController.getTodos();
    expect(todos).toEqual([]);
    expect(error).toBe(
      "Failed to fetch todos, problem with the server connection"
    );
  });

  test("getTodos should return a zod invalid data error when server sends wrong data", async () => {
    window.fetch = jest.fn().mockResolvedValue({
      json: async () => {},
    });

    const httpTodoController = new HTTPTodoController(
      "http://localhost:3001",
    );

    const { todos, error } = await httpTodoController.getTodos();
    expect(todos).toEqual([]);
    expect(error).toBe(
      "Invalid data received from the server, please try again"
    );
  });

  test("updateTodo should return new todoItem", async () => {
    window.fetch = jest.fn().mockResolvedValue({
      json: async () => ({
        ...mockTodos[0],
        done: true,
      }),
    });

    const httpTodoController = new HTTPTodoController(
      "http://localhost:3001"
    );
    const { todoItem, error } = await httpTodoController.updateTodo("1", true);
    expect(todoItem).toEqual({ ...mockTodos[0], done: true });
    expect(error).toBe(null);
  });

  test("createTodo should return new todoItem", async () => {
    window.fetch = jest.fn().mockResolvedValue({
      json: async () => mockTodo,
    });

    const httpTodoController = new HTTPTodoController(
      "http://localhost:3001"
    );
    const { todoItem, error } = await httpTodoController.createTodo(mockTodo);
    expect(todoItem).toEqual(mockTodo);
    expect(error).toBe(null);
  });  
});
