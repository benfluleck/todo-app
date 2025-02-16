import { useState, FC } from "react";
import { nanoid } from "nanoid";
import { Status } from "../../components/Status/Status";
import useFetch from "../../lib/hooks/useFetch";

const Home: FC = () => {
  const [value, setValue] = useState<string>("");

  const { todos, errorMessage, apiStatus, setTodos } = useFetch();


  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="-translate-y-1/2 -translate-x-1/2 fixed divide-x-2 divide-solid divide-slate-100 top-1/2 left-1/2 rounded-md bg-white grid grid-cols-[3fr_1fr]">
      <div className="col-span-full px-2 py-2 rounded-t-md bg-slate-100">
        <Status />
      </div>
      <div className="w-full md:w-lg xl:w-xl l:w-xl"> 
        <ul className="min-h-[650px]">
          {todos.map((todo) => (
            <li className="border-b py-1.5 border-slate-100 px-4" key={todo.id}>
              {todo.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <input
          type="text"
          className="outline-solid outline-slate-100 rounded-md px-1"
          value={value}
          onChange={updateValue}
        />
        <button
          className="bg-slate-100 hover:bg-stone-100 cursor-pointer text-black px-2 py-2 rounded-md"
          onClick={() =>
            setTodos([
              ...todos,
              {
                id: nanoid(),
                value: value,
                done: false,
                createdAt: Date.now(),
              },
            ])
          }
        >
          add todo
        </button>
      </div>
    </div>
  );
};

export default Home;
