import { Fragment, Key, ReactNode } from "react";

export type ListProps<Item> = {
  items: Item[];
  getKey: (item: Item) => Key;
  getRow: (value: Item) => ReactNode;
  handleOnItemClick: (e: React.MouseEvent<HTMLUListElement>) => void;
};

const List = <Item extends Record<string, any>>({
  items,
  getKey,
  getRow,
  handleOnItemClick,
}: ListProps<Item>) => (
  <ul onClick={handleOnItemClick}>
    {items.map((item) => (
      <Fragment key={getKey(item)}>{getRow(item)}</Fragment>
    ))}
  </ul>
);

export default List;
