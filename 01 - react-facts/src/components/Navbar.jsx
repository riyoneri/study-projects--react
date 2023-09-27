import reactIcon from "../logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-[#21222A] flex items-center justify-between px-12 py-4">
      <div className="flex gap-1 items-center">
        <img src={reactIcon} className="w-20" />
        <p className="text-[#61DAFB] font-bold text-3xl">React Facts</p>
      </div>
      <p className="text-[#DEEBF8]">React Course - Project 1</p>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider">
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
