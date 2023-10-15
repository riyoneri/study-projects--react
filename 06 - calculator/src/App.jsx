import { useState } from "react";

import Button from "./components/Button";

export default function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [lastNum, setLastNum] = useState(0);
  const [operation, setOperation] = useState(null);

  const [currentValue, setCurrentValue] = useState(0);

  const handleNumberClick = (event) => {
    const newNumber = event.target.textContent;

    setCurrentValue((prevCurrentValue) => +`${prevCurrentValue}${newNumber}`);
  };

  const handleNegative = () => {
    setCurrentValue(currentValue * -1);
  };

  const handleClearClick = () => {
    setCurrentValue(0);
    setFirstNum(0);
    setLastNum(0);
    setOperation(0);
  };

  const handleEqualClick = () => {
    setCurrentValue(
      eval(`${firstNum} ${operation} ${lastNum || currentValue}`)
    );
  };

  const handleOperationClick = (event) => {
    let clickedOperation = event.target.textContent;
    if (!operation) {
      setFirstNum(currentValue);
      setCurrentValue(0);
    } else {
      setLastNum(currentValue);
      setCurrentValue(0);
    }

    clickedOperation === "÷" && (clickedOperation = "/");
    clickedOperation === "x" && (clickedOperation = "*");

    setOperation(clickedOperation);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="min-w-[400px] bg-[#afafaf] grid grid-cols-4 gap-[2px]">
        <span className="text-white text-2xl col-span-4 text-end px-3 py-2">
          {currentValue}
        </span>
        <Button onClick={handleClearClick}>AC</Button>
        <Button onClick={handleNegative}>+/-</Button>
        <Button onClick={handleOperationClick}>%</Button>
        <Button
          onClick={handleOperationClick}
          style="active:bg-[#d9762f] bg-[#f48637]"
        >
          ÷
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
        <Button
          onClick={handleEqualClick}
          style="active:bg-[#d9762f] bg-[#f48637]"
        >
          =
        </Button>
      </div>
    </div>
  );
}
