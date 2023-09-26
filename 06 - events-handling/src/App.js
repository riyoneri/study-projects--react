import { useState } from "react";
import Button from "./components/Buttons";

export default function App() {
  const [alert, setAlert] = useState(false);

  const handleToggle = () => setAlert((prevAlert) => !prevAlert);

  return (
    <main className="bg-[#FEC800] h-screen text-base sm:text-2xl p-10 grid lg:grid-cols-3">
      <div className="flex flex-col gap-5 items-center lg:col-span-3">
        <div className="flex justify-center gap-3">
          <span>Alert:</span>
          <span>{`${alert}`}</span>
        </div>
        <div
          className="bg-red-500 text-base px-5 py-1 rounded-md"
          onClick={handleToggle}
        >
          <button>Toggle alert</button>
        </div>
      </div>
      <Button alerted={alert} key={0} index={0} />
      <Button alerted={alert} key={1} index={1} />
      <Button alerted={alert} key={2} index={2} />
    </main>
  );
}
