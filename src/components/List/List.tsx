import { Fragment, Key, ReactNode } from "react";

export type ListProps<Item> = {
  todos: Item[];
  getKey: (item: Item) => Key;
  getRow: (value: Item) => ReactNode;
};

const List = <Item extends Record<string, any>>({
  todos,
  getKey,
  getRow,
}: ListProps<Item>) => (
  <ul>
    {todos.map((todo) => (
      <Fragment key={getKey(todo)}>{getRow(todo)}</Fragment>
    ))}
  </ul>
);

export default List;
