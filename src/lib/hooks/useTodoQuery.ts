import { useEffect, useState } from "react";
import { Status } from "../../entities/status";
import { TodoList } from "../../entities/todo";
import { ITodoController } from "../../services/httpTodoController";

const useTodoQuery = (
  todoController: ITodoController
): {
  todos: TodoList;
  errorMessage: string | null;
  currentStatus: Status;
  setTodos: (todos: TodoList) => void;
  setStatus: (status: Status) => void;
  setErrorMessage: (errorMessage: string | null) => void;
} => {
  const [todos, setTodos] = useState<TodoList>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(Status.IDLE);

  const getTodos = (async (todoController: ITodoController) => {
    setStatus(Status.LOADING);
    const { todos, error } = await todoController.getTodos();

    if (error) {
      setStatus(Status.ERROR);
      setErrorMessage(error);
      return;
    }

    setStatus(Status.SUCCESS);
    setErrorMessage(null);
    setTodos(todos);
  });

  useEffect(() => {
    const controller = new AbortController();

    getTodos(todoController);

    return () => {
      setTimeout(() => controller.abort(), 3000);
    };
  }, []);

  return {
    todos,
    errorMessage,
    currentStatus: status,
    setTodos,
    setStatus,
    setErrorMessage,
  };
};

export default useTodoQuery;
