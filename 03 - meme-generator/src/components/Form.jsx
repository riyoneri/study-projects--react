import { useState } from "react";
import memesData from "../memesData";

export default function Form() {
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const random = Math.trunc(Math.random() * allMemeImages.data.memes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemeImages.data.memes[random].url,
    }));

    // fetch("https://api.imgflip.com/get_memes")
    //   .then((res) => res.json())
    //   .then((data) => {
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <form
      action=""
      method=""
      onSubmit={handleSubmit}
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
      <img src={meme.randomImage} className="h-32 object-contain" />
    </form>
  );
}
