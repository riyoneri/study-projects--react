import heroImage from "../images/grid.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center mt-10 px-5 sm:px-12">
      <div className="max-w-xl mx-auto">
        <img src={heroImage} className="mx-auto" />

        <h3 className="text-3xl self-start font-semibold mt-10">
          Online Experiences
        </h3>
        <p className="text-xl mt-5">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
