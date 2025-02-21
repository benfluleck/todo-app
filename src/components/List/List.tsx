import { Fragment, Key, ReactNode } from "react";

export type ListProps<Item> = {
  items: Item[];
  getKey: (item: Item) => Key;
  getRow: (value: Item) => ReactNode;
};

const List = <Item extends Record<string, any>>({
  items,
  getKey,
  getRow,
}: ListProps<Item>) => (
  <ul>
    {items.map((item) => (
      <Fragment key={getKey(item)}>{getRow(item)}</Fragment>
    ))}
  </ul>
);

export default List;
