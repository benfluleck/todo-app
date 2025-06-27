import { FC } from "react";

export type ItemProps = {
  title: string;
  done: boolean;
  id: string;
};

const Item: FC<ItemProps> = ({ id, title, done }) => {
  return (
    <li
      data-index={id}
      className={`flex gap-4 ${
        done ? "line-through" : ""
      } border-b py-1.5 border-slate-100 dark:border-slate-900 hover:bg-stone-50 dark:hover:bg-gray-800 px-4 cursor-pointer`}
    >
      <input id={id} readOnly type="checkbox" checked={done} />
      <label htmlFor={id}>{title}</label>
    </li>
  );
};

export default Item;
