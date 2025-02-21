import { FC } from "react";

export type ItemProps = {
  title: string;
  done: boolean;
  handleClick: () => void;
};

const Item: FC<ItemProps> = ({ title, done, handleClick }) => {
  return (
    <li
      onClick={handleClick}
      className={`flex gap-4 ${
        done ? "line-through" : ""
      } border-b py-1.5 border-slate-100 dark:border-slate-900 hover:bg-stone-50 dark:hover:bg-gray-800 px-4 cursor-pointer`}
    >
      <input type="checkbox" checked={done} />
      <span>{title}</span>
    </li>
  );
};

export default Item;
