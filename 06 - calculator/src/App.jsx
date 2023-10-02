import { useState } from "react";

import Button from "./components/Button";

export default function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [lastNum, setLastNum] = useState(0);
  const [operation, setOperation] = useState("");

  const [currentValue, setCurrentValue] = useState(firstNum);

  const handleNumberClick = (event) => {
    const newNumber = event.target.textContent;

    if (!operation) {
      setFirstNum((prevFirstNum) => +`${prevFirstNum}${newNumber}`);

      setCurrentValue(+`${firstNum}${newNumber}`);
    }

    if (operation) {
      setLastNum((prevLastNum) => +`${prevLastNum}${newNumber}`);

      setCurrentValue(+`${lastNum}${newNumber}`);
    }
  };

  const handleFunctionClick = () => {};

  const handleOperationClick = (event) => {
    const operation = event.target.textContent;
    if(operation) {
      
    }
    setOperation(operation);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="min-w-[400px] bg-[#afafaf] grid grid-cols-4 gap-[2px]">
        <span className="text-white text-2xl col-span-4 text-end px-3 py-2">
          {currentValue}
        </span>
        <Button onClick={handleFunctionClick}>AC</Button>
        <Button onClick={handleFunctionClick}>+/-</Button>
        <Button onClick={handleOperationClick}>%</Button>
        <Button
          onClick={handleOperationClick}
          style="active:bg-[#d9762f] bg-[#f48637]"
        >
          +
        </Button>

        <Button onClick={handleNumberClick}>7</Button>
        <Button onClick={handleNumberClick}>8</Button>
        <Button onClick={handleNumberClick}>9</Button>
        <Button
          onClick={handleOperationClick}
          style="active:bg-[#d9762f] bg-[#f48637]"
        >
          x
        </Button>

        <Button onClick={handleNumberClick}>4</Button>
        <Button onClick={handleNumberClick}>5</Button>
        <Button onClick={handleNumberClick}>6</Button>
        <Button
          onClick={handleOperationClick}
          style="active:bg-[#d9762f] bg-[#f48637]"
        >
          -
        </Button>

        <Button onClick={handleNumberClick}>1</Button>
        <Button onClick={handleNumberClick}>2</Button>
        <Button onClick={handleNumberClick}>3</Button>
        <Button
          onClick={handleOperationClick}
          style="active:bg-[#d9762f] bg-[#f48637]"
        >
          +
        </Button>

        <Button onClick={handleNumberClick} style="col-span-2">
          0
        </Button>
        <Button>.</Button>
        <Button style="active:bg-[#d9762f] bg-[#f48637]">=</Button>
      </div>
    </div>
  );
}
