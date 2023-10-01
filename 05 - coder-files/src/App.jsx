import { useState } from "react";

export default function App() {
  const [counts, seCounts] = useState(0);

  const handleClick = () => seCounts((prevCounts) => ++prevCounts);

  const handleClick = (position) => alert(`You clicked on Button ${position}`);
  return (
    <div className="flex flex-col h-screen gap-5 justify-center items-center">
      <p>Button has been clicked: {counts} times</p>
      <button
        onClick={handleClick}
        className="px-5 py-2 bg-[#FEC800] rounded-sm"
      >
        Click Me
      </button>
    </div>
  );
}
