import { useState } from "react";

export default function Button({ alerted, index }) {
  const [clickedAmount, setClickedAmount] = useState(0);

  const handleClick = () => {
    if (alerted) alert(`Alert from button ${index}`);
    setClickedAmount((prevClickedAmount) => prevClickedAmount + 1);
  };
  return (
    <div className="flex flex-col gap-5 items-center">
      <p>Button has been clicked: {`${clickedAmount}`}</p>
      <button className="bg-green-500 py-1 px-4 rounded-md" onClick={handleClick}>Button {`${++index}`}</button>
    </div>
  );
}
