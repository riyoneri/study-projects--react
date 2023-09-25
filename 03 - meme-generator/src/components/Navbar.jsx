import logoImage from "../images/logo.svg";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r py-5 text-white from-[#672280] to-[#A626D3]">
      <div className="flex justify-between max-w-2xl flex-col sm:flex-row items-center mx-auto">
        <div className="flex items-center gap-2 px-3 sm:px-0 sm:text-2xl">
          <img src={logoImage} />
          <span className=" font-semibold">Meme Generator</span>
        </div>
        <p>React Course - Project 3</p>
      </div>
    </div>
  );
}
