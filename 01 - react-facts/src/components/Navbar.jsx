import reactIcon from "../logo.svg";

export default function Navbar(props) {
  return (
    <nav className="dark:bg-[#21222A] border-b bg-[#ffffff] flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between px-12 py-4">
      <div className="flex gap-1 items-center">
        <img src={reactIcon} className="w-20" />
        <p className="text-[#61DAFB] font-bold text-xl sm:text-3xl">
          React Facts
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-black dark:text-white">Light</p>
        <div
          onClick={props.onChangeTheme}
          className="bg-black transition-all dark:bg-white w-12 flex items-center rounded-full cursor-pointer"
        >
          <div className=" bg-white dark:bg-black transition-all h-5 w-5 relative dark:left-1/2 left-1 rounded-full"></div>
        </div>
        <p className="text-black dark:text-white">Dark</p>
      </div>
    </nav>
  );
}
