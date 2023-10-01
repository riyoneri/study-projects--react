export default function Card({ setup, punchline }) {
  return (
    <div className="px-5 py-8 cursor-pointer shadow-md bg-white rounded-lg w-full">
      <p className="sm:text-xl font-bold text-center">{setup}</p>
      <p className="mt-2 sm:mt-5 sm:text-base text-sm text-center">
        {punchline}
      </p>
    </div>
  );
}
