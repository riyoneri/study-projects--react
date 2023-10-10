import { useEffect, useState } from "react";

export default function NumberButton({
  changeNumberToggler,
  index,
  onToggleFreeze,
  gameOver,
  resetGame,
}) {
  const [randomNumber, setRandomNumber] = useState(
    Math.trunc(Math.random() * 7)
  );

  const [frozen, setFrozen] = useState(false);

  useEffect(() => {
    if (resetGame && !gameOver) {
      setFrozen(false);
      setRandomNumber(Math.trunc(Math.random() * 7));
    }
    if (frozen) return;
    setRandomNumber(Math.trunc(Math.random() * 7));
  }, [changeNumberToggler, resetGame]);

  const toggleFreeze = (event) => {
    if (frozen) {
      onToggleFreeze(index, "pop");
    } else {
      onToggleFreeze(index, "push", +event.target.textContent);
    }
    setFrozen(gameOver ? true : !frozen);
  };

  return (
    <span
      onClick={toggleFreeze}
      className={`shadow-md px-6 text-xl text-[#2B283A] font-bold ${
        frozen ? "bg-[#59E391]" : ""
      } cursor-pointer py-3 rounded-sm`}
    >
      {randomNumber}
    </span>
  );
}
