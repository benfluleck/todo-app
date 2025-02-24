import { FC, ReactNode } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

type FormProps = {
  handleOnSubmit: (value: string) => void;
  buttonText: ReactNode;
};

const Form: FC<FormProps> = ({ handleOnSubmit, buttonText }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    const inputValue = data.get("input");

    handleOnSubmit(inputValue as string);

    const inputElement = document.getElementById("input");
    if (inputElement) {
      (inputElement as HTMLInputElement).value = "";
    }
  };

  return (
    <form
      aria-label="form"
      className="p-4 flex flex-col gap-3"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
    >
      <Input name="input" />
      <Button>{buttonText}</Button>
    </form>
  );
};

export default Form;
