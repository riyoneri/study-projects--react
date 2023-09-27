import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="bg-[#282D35] bg-icon-dark bg-no-repeat bg-right-center overflow-hidden h-screen text-white relative">
      <Navbar />
      <Main />
    </div>
  );
}
