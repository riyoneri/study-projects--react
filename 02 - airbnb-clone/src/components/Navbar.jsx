import logo from "../images/airbnb.png";

export default function Navbar() {
  return (
    <nav className="py-5 shadow-md px-12">
      <img src={logo} className="block"/>
    </nav>
  );
}
