import { FC } from "react";


type ButtonProps = {
  children: string;
};

const Button: FC<ButtonProps> = ({ children }) => (
  <button
    type="submit"
    className="bg-slate-100 dark:bg-slate-900 dark:text-white hover:bg-stone-100 dark:hover:bg-stone-900 cursor-pointer text-black px-2 py-2 rounded-md"
  >
    {children}
  </button>
);
export default Button;
