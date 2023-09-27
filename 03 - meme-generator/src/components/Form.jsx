import { useState, useEffect } from "react";
export default function Form() {
  const [allMemes, setAllMemes] = useState([]);
  const [inputsData, setInputData] = useState({ text1: "", text2: "" });

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const random = Math.trunc(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[random].url,
    }));
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  function handleInputs(event) {
    const { name, value } = event.target;

    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex justify-stretch sm:flex-row flex-col gap-2">
        <input
          type="text"
          name="text1"
          className="border-neutral-300 rounded-md border flex-1 p-2 focus:outline-none"
          onChange={handleInputs}
          value={inputsData.text1}
        />
        <input
          type="text"
          name="text2"
          className="border-neutral-300 rounded-md border flex-1 p-2 focus:outline-none"
          onChange={handleInputs}
          value={inputsData.text2}
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r text-white from-[#672280] to-[#A626D3] rounded-md py-3"
      >
        Get a new meme image 🖼
      </button>
      <div className="relative">
        <p className="absolute left-1/2 -translate-x-1/2 top-2 text-white font-bold text-2xl text-stroke">
          {inputsData.text1}
        </p>
        <img
          src={meme.randomImage}
          className="h-[300px] object-cover mx-auto"
        />
        <p className="absolute left-1/2 -translate-x-1/2 bottom-2 text-white font-bold text-2xl text-stroke">
          {inputsData.text2}
        </p>
      </div>
    </form>
  );
}
