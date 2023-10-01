export default function Button({ position }) {
  const handleClick = () => {
    alert(`You clicked on Button ${position}`);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-[#FEC800] px-5 py-2 rounded-sm sm:text-xl"
    >
      Button {position}
    </button>
  );
}
