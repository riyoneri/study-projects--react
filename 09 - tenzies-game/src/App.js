import { useState } from "react";

import NumberButton from "./components/NumberButton";

const buttons = Array.from({ length: 10 }, (_, i) => i + 1);

export default function App() {
  const [changeNumbers, setChangeNumbers] = useState(false);

  const displayButtons = buttons.map((button) => (
    <NumberButton changeNumberToggler={changeNumbers} key={button} />
  ));

  const handleChangeNumbers = () => {
    setChangeNumbers(!changeNumbers);
  };

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
            onClick={handleChangeNumbers}
            className="bg-[#5035FF] text-white px-14 py-2 rounded-md"
          >
            Roll
          </button>
        </div>
      </div>
    </main>
  );
}
