import { FC } from "react";

type InputProps = {
  name: string;
  minLength?: number;
  title?: string;
};

const MIN_LENGTH = 3
const CUSTOM_VALIDATION_MESSAGE = 'Input must be at least 3 alphanumeric characters long';

const Input: FC<InputProps> = ({
  name,
  minLength = MIN_LENGTH,
  title = CUSTOM_VALIDATION_MESSAGE,
}) => {
  return (
    <input
      type="text"
      name={name}
      id="input"
      className="outline-solid outline-slate-100 dark:outline-slate-800 rounded-md px-2 py-1"
      pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
      minLength={minLength}
      title={title}
      required
    />
  );
};

export default Input;
