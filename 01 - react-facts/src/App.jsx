import Navbar from "./components/Navbar";
import Main from "./components/Main";

import logoGray from "./logo-gray.svg";

export default function App() {
  return (
    <div className="bg-[#282D35] overflow-hidden h-screen text-white relative">
      <img
        src={logoGray}
        className="absolute h-4/5 -right-1/4  top-3/4 -translate-y-3/4"
      />
      <Navbar />
      <Main />
    </div>
  );
}
