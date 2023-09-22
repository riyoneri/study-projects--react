import logo from "../images/airbnb.png";

export default function Navbar() {
  return (
    <nav className="py-5 shadow-md px-12">
      <div className="max-w-xl mx-auto">
        <img src={logo} className="block" />
      </div>
    </nav>
  );
}
