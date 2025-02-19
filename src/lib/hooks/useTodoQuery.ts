import { useCallback, useEffect, useState } from "react";
import { Status } from "../../entities/status";
import { TodoList } from "../../entities/todo";
import { HTTPTodoController } from "../../services/httpTodoController";

const useTodoQuery = (): {
  todos: TodoList;
  errorMessage: string | null;
  currentStatus: Status;
  setTodos: (todos: TodoList) => void;
  setStatus: (status: Status) => void;
  setErrorMessage: (errorMessage: string | null) => void;
} => {
  const [todos, setTodos] = useState<TodoList|[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(Status.IDLE);

  const apiUrl = process.env.REACT_APP_API_URL;
  const getTodos = useCallback(
    async () => {
      setStatus(Status.LOADING);
      if (apiUrl) {
        const httpTodoController = new HTTPTodoController(apiUrl);
        const { todos, error } = await httpTodoController.getTodos();

        if (error) {
          setStatus(Status.ERROR);
          setErrorMessage(error);
          return;
        }

        setStatus(Status.SUCCESS);
        setErrorMessage(null);
        setTodos(todos);
      } else {
        setErrorMessage(
          "API URL is not provided, please check the environment variables"
        );
        setStatus(Status.ERROR);
        return;
      }
    },
    [apiUrl]
  );

  useEffect(() => {
    const controller = new AbortController();

    getTodos();

    return () => {
      setTimeout(() => controller.abort(), 3000);
    };
  }, [getTodos]);

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
