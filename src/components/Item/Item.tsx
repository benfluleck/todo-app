import { FC } from "react";

type ItemProps = {
  title: string;
  done: boolean;
};

const Item: FC<ItemProps> = ({ title, done }) => {
  return (
    <li
      className={`flex gap-4 ${
        done ? "line-through" : ""
      } border-b py-1.5 border-slate-100 dark:border-slate-900 hover:bg-stone-50 px-4 cursor-pointer`}
    >
      <input type="checkbox" checked={done} />
      <span>{title}</span>
    </li>
  );
};

export default Item;
