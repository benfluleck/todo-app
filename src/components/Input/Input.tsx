import { FC } from "react";
import { MIN_TODO_LENGTH, TODO_CUSTOM_VALIDATION_MESAGE } from "../../lib/constants";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="outline-solid outline-slate-100 dark:outline-slate-800 rounded-md px-2 py-1"
      value={value}
      pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
      onChange={onChange}
      minLength={MIN_TODO_LENGTH}
      title={TODO_CUSTOM_VALIDATION_MESAGE}
      required
    />
  );
};

export default Input;
