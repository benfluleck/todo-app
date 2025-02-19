import { TodoList } from "../entities/todo";

export const getTodoCount = (
  todos: TodoList
): {
  completed: number;
  inComplete: number;
} => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.done).length;
  const inComplete = total - completed;

  return { completed, inComplete };
};

export default getTodoCount;
