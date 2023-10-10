import { useEffect, useState } from "react";

export default function NumberButton({ changeNumberToggler }) {
  const [randomNumber, setRandomNumber] = useState(
    Math.trunc(Math.random() * 7)
  );

  const [frozen, setFrozen] = useState(false);

  useEffect(() => {
    if (frozen) return;
    setRandomNumber(Math.trunc(Math.random() * 7));
  }, [changeNumberToggler]);
  return (
    <span
      onClick={() => setFrozen(!frozen)}
      className={`shadow-md px-6 text-xl text-[#2B283A] font-bold ${
        frozen ? "bg-[#59E391]" : ""
      } cursor-pointer py-3 rounded-sm`}
    >
      {randomNumber}
    </span>
  );
}
