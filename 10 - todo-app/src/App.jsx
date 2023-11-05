import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValue = inputValue.trim();

    if (!formValue) {
      setFormError(true);
      return;
    }
  };

  const handleInputChange = (e) => {
    setFormError(false);
    setInputValue(e.target.value);
  };

  return (
    <div className="bg-[#7AB8E1] min-h-screen flex text-sm sm:text-base px-5 sm:px-10 items-center justify-center">
      <div className="py-10 px-5 sm:px-10 bg-[#312F58] w-full md:w-1/2 xl:w-1/3 rounded-lg flex flex-col">
        <form onSubmit={handleSubmit}>
          <label
            className={classNames([
              "bg-[#27264D] px-1 pl-4 py-1 rounded-full text-white flex gap-2 items-center",
              formError && "border-red-400 border-2",
            ])}
          >
            <input
              type="text"
              name="text"
              className="flex-1 bg-transparent focus:outline-none"
              onChange={handleInputChange}
            />
            <button className="text-xl sm:text-3xl font-bold bg-[#3276A6] p-1 sm:p-2 flex items-center justify-center rounded-full">
              <FontAwesomeIcon
                icon={faPlus}
                className="h-5 w-5 cursor-pointer"
              />
            </button>
          </label>
        </form>
        <div className="mt-10 text-white">
          <h3>TO DO</h3>
          <div className="mt-3">
            <div className="flex items-center gap-2 bg-[#414166] p-3 rounded-md">
              <span className="h-5 w-5 bg-white rounded-full grid place-content-center cursor-pointer">
                <FontAwesomeIcon icon={faCheck} className="h-4 text-black" />
              </span>
              <p className="flex-1 line-through">
                This is my todoThis is my todo
              </p>
              <FontAwesomeIcon
                icon={faTrash}
                className="h-4 cursor-pointer hover:text-red-400 transition"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 text-white">
          <h3>COMPLETED</h3>
          <div className="mt-3">
            <div className="flex items-center gap-2 bg-[#414166] p-3 rounded-md">
              <span className="h-5 w-5 bg-white rounded-full grid place-content-center cursor-pointer">
                <FontAwesomeIcon icon={faCheck} className="h-4 text-black" />
              </span>
              <p className="flex-1 line-through">
                This is my todoThis is my todo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
