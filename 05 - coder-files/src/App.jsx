import { useState } from "react";

export default function App() {
  const [textInputs, setTextInputs] = useState({ firstName: "", lastName: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textInputs.firstName && textInputs.lastName)
      alert(`Hello ${textInputs.firstName} ${textInputs.lastName} !`);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setTextInputs((prevTextInputs) => ({ ...prevTextInputs, [name]: value }));
  };

  return (
    <div className="flex gap-10 justify-center flex-wrap px-10 mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-2xl sm:w-1/2 lg:w-1/3"
      >
        <input
          placeholder="First name"
          className="border p-3 rounded-md"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={textInputs.firstName}
        />
        <input
          placeholder="Last name"
          className="border p-3 rounded-md"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={textInputs.lastName}
        />
        <button className="bg-[#A30036] rounded-md">
          <span className="uppercase bg-[#F0003C] text-white block p-3 rounded-md -translate-y-2 active:-translate-y-1 transition font-bold">
            Greet Me
          </span>
        </button>
      </form>
    </div>
  );
}
