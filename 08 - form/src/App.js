export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const secondName = e.target[1].value;
    if (!firstName || !secondName) return;

    alert(`Hello ${firstName} ${secondName}!`);
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex xl:w-1/4 lg:w-1/3 md:w-1/2 w-full mx-auto flex-col p-10 gap-8 items-center"
      >
        <input
          type="text"
          className="border-2 border-neutral-400 p-2 w-full rounded-md"
          placeholder="First name"
        />
        <input
          type="text"
          className="border-2 border-neutral-400 p-2 w-full rounded-md"
          placeholder="Last name"
        />
        <div className="bg-[#A30036] rounded-md w-full">
          <button className="w-full uppercase font-bold bg-[#F0003C] py-3 -translate-y-2 transition text-white active:-translate-y-1 rounded-md">
            Greet me
          </button>
        </div>
      </form>
    </main>
  );
}
