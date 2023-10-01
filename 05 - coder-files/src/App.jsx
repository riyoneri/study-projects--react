export default function App() {
  const handleClick = () => {
    alert("Clicked!");
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={handleClick}
        className="bg-[#FEC800] px-5 py-2 rounded-sm text-xl"
      >
        Click Me
      </button>
    </div>
  );
}
