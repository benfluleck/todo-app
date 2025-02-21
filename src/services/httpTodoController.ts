import { z } from "zod";
import {
  TodoItem,
  TodoList,
  TodoListSchema,
  TodoSchema,
} from "../entities/todo";

export interface ITodoController {
  getTodos(): Promise<{ todos: TodoList; error: string | null }>;
  createTodo(
    todo: TodoItem
  ): Promise<{ todoItem: TodoItem | null; error: string | null }>;
  updateTodo(
    id: string,
    done: boolean
  ): Promise<{ todoItem: TodoItem | null; error: string | null }>;
}

export class HTTPTodoController implements ITodoController {
  constructor(private apiUrl: string) {}

  async updateTodo(
    id: string,
    done: boolean
  ): Promise<{ todoItem: TodoItem | null; error: string | null }> {
    try {
      const response = await fetch(`${this.apiUrl}/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ done }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      return { todoItem: data, error: null };
    } catch (error) {
      return {
        todoItem: null,
        error: "Failed to update todo, problem with the server connection",
      };
    }
  }

  async createTodo({
    id,
    value,
    done,
    createdAt,
  }: TodoItem): Promise<{ todoItem: TodoItem | null; error: string | null }> {
    try {
      TodoSchema.parse({ id, value, done, createdAt });

      const response = await fetch(`${this.apiUrl}/todos`, {
        method: "POST",
        body: JSON.stringify({ id, value, done, createdAt }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      return { todoItem: data, error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          todoItem: null,
          error: "Invalid data received from the server, please try again",
        };
      }

     
      return {
        todoItem: null,
        error: "Failed to create todo, problem with the server connection",
      };
    }
  }

  async getTodos(): Promise<{ todos: TodoList; error: string | null }> {
    try {
      const response = await fetch(`${this.apiUrl}/todos`);
      const todos = await response.json();
      TodoListSchema.parse(todos);
      return { todos: todos, error: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          todos: [],
          error: "Invalid data received from the server, please try again",
        };
      
      }

      return {
        todos: [],
        error: "Failed to fetch todos, problem with the server connection",
      };
    }
  }
}
