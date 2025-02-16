import { useEffect, useState } from "react";
import { Status } from "../../entities/status";
import { Todo } from "../../entities/todo";

const useFetch = (): {
  todos: Todo[];
  errorMessage: string | null;
  apiStatus: Status;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
} => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>(Status.IDLE);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchTodos = async (signal: AbortSignal): Promise<void> => {
    try {
      setStatus(Status.FETCHING);
      const response = await fetch(`${apiUrl}/todos`, { signal });
      const todos = await response.json();

      setStatus(Status.FETCHED);
      setTodos(todos);
    } catch (error) {
      setStatus(Status.ERROR);
      setErrorMessage(
        "Failed to fetch todos, problem with the server connection"
      );
    } finally {
      setStatus(Status.IDLE);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchTodos(signal);

    return () => {
      setTimeout(() => controller.abort(), 2000);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { todos, errorMessage, apiStatus: status, setTodos };
};

export default useFetch;
