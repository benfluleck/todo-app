import { FC } from "react";
import { nanoid } from "nanoid";
import Status from "../../components/Status/Status";
import Form from "../../components/Form/Form";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { Status as API_STATUS } from "../../entities/status";
import List from "../../components/List/List";
import { TodoItem } from "../../entities/todo";
import Item from "../../components/Item/Item";
import useTodoQuery from "../../lib/hooks/useTodoQuery";
import { HTTPTodoController } from "../../services/httpTodoController";

const apiUrl = process.env.REACT_APP_API_URL || "";

const Home: FC = () => {
  const {
    todos,
    currentStatus,
    errorMessage,
    setTodos,
    setErrorMessage,
    setStatus,
  } = useTodoQuery();

  const httpTodoController = new HTTPTodoController(apiUrl);

  const handleItemClick = async (id: string, done: boolean) => {
    const { todoItem, error } = await httpTodoController.updateTodo(id, !done);

    if (error) {
      setErrorMessage(error);
      setStatus(API_STATUS.ERROR);
      return;
    }

    if (todoItem) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: todoItem.done,
          };
        }

        return todo;
      });

      setTodos(updatedTodos);
    }
  };

  const handleCreateTodo = async (value: string) => {
    const newTodo = {
      id: nanoid(),
      value,
      done: false,
      createdAt: Date.now(),
    };

    const { todoItem, error } = await httpTodoController.createTodo({
      ...newTodo,
    });

    if (error) {
      setErrorMessage(error);
      setStatus(API_STATUS.ERROR);
      return;
    }

    if (todoItem) {
      setTodos([
        ...todos,
        {
          ...todoItem,
        },
      ]);
    }
  };

  
  return (
    <div className="-translate-y-1/2 -translate-x-1/2 fixed divide-x-2 divide-solid divide-slate-100 dark:divide-slate-900 top-1/2 left-1/2 rounded-md bg-white dark:bg-slate-700 grid lg:grid-cols-[3fr_1fr] xl:grid-cols-[4fr_1fr] grid-cols-1">
      <div className="col-span-full px-2 py-2 rounded-t-md bg-slate-100 dark:bg-slate-900">
        <Status todos={todos} />
      </div>
      <div className={`w-full xl:w-xl l:w-xl ${currentStatus !== API_STATUS.ERROR ? "overflow-y-auto" : ""}`}>
        {currentStatus === API_STATUS.LOADING && <Loader />}
        <List<TodoItem>
          todos={todos}
          getKey={(todo) => todo.id}
          getRow={(todo) => (
            <Item
              handleClick={() => handleItemClick(todo.id, todo.done)}
              title={todo.value}
              done={todo.done}
            />
          )}
        />

        {errorMessage && currentStatus === API_STATUS.ERROR && (
          <ErrorMessage error={errorMessage} />
        )}
      </div>
      <Form handleFormSubmit={(value) => handleCreateTodo(value)} />
    </div>
  );
};

export default Home;
