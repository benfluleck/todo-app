import React from "react";
import { TodoList } from "../../entities/todo";
import getTodoCount from "../../utils/getTodoCount";

type StatusProps = {
  todos: TodoList;
};

const Status: React.FC<StatusProps> = ({ todos }) => {
  const { completed, inComplete } = getTodoCount(todos);

  return (
    <div className="justify-self-end dark:text-white">
      Done: {completed} | Undone: {inComplete}
    </div>
  );
};


export default Status;

