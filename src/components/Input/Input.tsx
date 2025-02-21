import { FC } from "react";
import { MIN_TODO_LENGTH, TODO_CUSTOM_VALIDATION_MESAGE } from "../../lib/constants";

type InputProps = {
  name: string;
};

const Input: FC<InputProps> = ({ name }) => {
  return (
    <input
      type="text"
      name={name}
      id="input"
      className="outline-solid outline-slate-100 dark:outline-slate-800 rounded-md px-2 py-1"
      pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
      minLength={MIN_TODO_LENGTH}
      title={TODO_CUSTOM_VALIDATION_MESAGE}
      required
    />
  );
};

export default Input;
