export default function Form() {
  return (
    <form
      action=""
      method=""
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-4"
    >
      <div className="flex justify-stretch gap-2">
        <input
          type="text"
          className="border-neutral-300 rounded-md border flex-1 p-2 focus:outline-none"
        />
        <input
          type="text"
          className="border-neutral-300 rounded-md border flex-1 p-2 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r text-white from-[#672280] to-[#A626D3] rounded-md py-3"
      >
        Get a new meme image 🖼
      </button>
    </form>
  );
}
