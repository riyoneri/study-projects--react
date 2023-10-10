import { useState } from "react";

import NumberButton from "./components/Die";

const buttons = Array.from({ length: 10 }, (_, i) => i + 1);

export default function App() {
  const initialFrozenNumbers = buttons.map((button, index) => ({
    index,
    button,
  }));

  const [changeNumbers, setChangeNumbers] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [frozenNumbers, setFrozenNumbers] = useState(initialFrozenNumbers);

  console.table(frozenNumbers);

  const displayButtons = buttons.map((button) => (
    <NumberButton
      changeNumberToggler={changeNumbers}
      index={button - 1}
      key={button}
      onToggleFreeze={toggleFrozenNumber}
    />
  ));

  const handleRoll = () => {
    setChangeNumbers(!changeNumbers);
  };

  function toggleFrozenNumber(index, action, newNumber) {
    if (action === "push") {
      setFrozenNumbers((prevFrozenNumbers) => {
        prevFrozenNumbers[index] = newNumber;
        return prevFrozenNumbers;
      });
    } else {
      setFrozenNumbers((prevFrozenNumbers) => {
        prevFrozenNumbers[index] = {
          index,
          button: prevFrozenNumbers[index],
        };

        return prevFrozenNumbers;
      });
    }
  }

  return (
    <main className="grid h-screen place-content-center px-5">
      <div className="shadow-md bg-white rounded-lg p-14 grid gap-5 justify-items-center">
        <p className="text-[#2B283A] font-semibold text-2xl">Tenzies</p>
        <p className="text-[#4A4E74] text-sm sm:text-base">
          Roll until all dice are the same. Click each die to freeze it current
          value between rolls.
        </p>
        <div className="grid grid-cols-5 gap-5">{displayButtons}</div>
        <div className="text-center mt-5">
          <button
            onClick={handleRoll}
            className="bg-[#5035FF] text-white px-14 py-2 rounded-md"
          >
            {gameOver ? "Reset Game" : "Roll"}
          </button>
        </div>
      </div>
    </main>
  );
}
