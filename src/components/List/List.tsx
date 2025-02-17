import { Fragment, Key, ReactNode } from "react";

type ListProps<Item> = {
  todos: Item[];
  getKey: (item: Item) => Key;
  getRow: (value: Item) => ReactNode;
};

const List = <Todo extends Record<string, any>>({
  todos,
  getKey,
  getRow,
}: ListProps<Todo>) => (
  <ul className="h-[500px]">
    {todos.map((todo) => (
      <Fragment key={getKey(todo)}>{getRow(todo)}</Fragment>
    ))}
  </ul>
);


export default List;
