import { FC, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

type FormProps = {
  handleFormSubmit: (value: string) => void;
};

const Form: FC<FormProps> = ({ handleFormSubmit }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFormSubmit(value);
  };

  return (
    <form
      className="p-4 flex flex-col gap-3"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button>Add Todo</Button>
    </form>
  );
};

export default Form;
