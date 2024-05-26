import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Select from "./components/select";
import RadioGroup from "./components/radioGroup";
import ButtonPrimary from "./components/buttonPrimary";
import ButtonOutline from "./components/buttonOutline";

function App() {
  const [count, setCount] = useState(0);

  /* Test data */
  const [value, setValue] = useState(0);
  const items = [
    {
      id: 1,
      name: "1번",
      value: 1,
    },
    {
      id: 2,
      name: "2번",
      value: 2,
    },
    {
      id: 3,
      name: "3번",
      value: 3,
    },
  ];
  /* */

  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl">React-TailwindCSS-Typescript-Vite-shadcn/ui</h1>
      <h1 className="text-5xl font-bold">{count}</h1>
      <div className="flex flex-row gap-5">
        <Button size={"icon"} onClick={() => setCount((count) => count + 1)}>
          +
        </Button>
        <Button size={"icon"} onClick={() => setCount((count) => count - 1)}>
          -
        </Button>
      </div>

      {/* Test Area */}
      <Select<number>
        items={items}
        onSelectItem={setValue}
      ></Select>
      <RadioGroup label="RadioGroup" items={items}></RadioGroup>
      <ButtonPrimary label="Primary"></ButtonPrimary>
      <ButtonOutline label="Outline"></ButtonOutline>
      {/*  */}
    </div>
  );
}

export default App;
