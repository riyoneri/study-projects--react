export default function Button({ children, style, onClick }) {
  return (
    <span
      onClick={onClick}
      className={`px-5 py-3 cursor-default active:bg-[#bfbfbf] font-medium text-xl text-center bg-[#dcdbdc] ${style}`}
    >
      {children}
    </span>
  );
}
