import { FC } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

type FormProps = {
  handleFormSubmit: (value: string) => void;
};

const Form: FC<FormProps> = ({ handleFormSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    const todo = data.get("input");

    handleFormSubmit(todo as string);

    const inputElement = document.getElementById("input");
    if (inputElement) {
      (inputElement as HTMLInputElement).value = "";
    }
  };

  return (
    <form
      aria-label="form"
      className="p-4 flex flex-col gap-3"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <Input name="input" />
      <Button>Add Todo</Button>
    </form>
  );
};

export default Form;
