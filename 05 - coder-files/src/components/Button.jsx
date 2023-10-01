export default function Button({ position, children, onClick }) {
  const handleClick = () => onClick(position);

  return (
    <button
      onClick={handleClick}
      className="bg-[#FEC800] px-5 py-2 rounded-sm sm:text-xl"
    >
      {children}
    </button>
  );
}
