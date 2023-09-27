import { useState } from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function changeThemeHandler() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div
      className={`${
        darkMode ? "dark bg-[#282D35] bg-icon-dark" : "bg-icon-white"
      } bg-no-repeat bg-right-center overflow-hidden h-screen text-white relative`}
    >
      <Navbar onChangeTheme={changeThemeHandler} />
      <Main />
    </div>
  );
}
