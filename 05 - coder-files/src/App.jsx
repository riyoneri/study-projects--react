import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [counts, seCounts] = useState(0);

  const incrementCount = () => seCounts((prevCounts) => ++prevCounts);

  return (
    <div className="flex flex-col h-screen gap-5 justify-center items-center">
      <p className="sm:text-2xl">Button has been clicked: {counts} times</p>
      <Button onClick={incrementCount}>Click Me</Button>
    </div>
  );
}
