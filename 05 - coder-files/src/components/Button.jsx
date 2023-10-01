export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#FEC800] px-5 py-2 rounded-sm sm:text-xl"
    >
      {children}
    </button>
  );
}
