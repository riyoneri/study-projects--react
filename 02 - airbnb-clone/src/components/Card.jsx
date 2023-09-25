import starIcon from "../images/star.svg";

export default function Card(props) {
  return (
    <div className="flex flex-col mt-10 w-56 relative">
      {props.openSpots > 0 && (
        <span className="absolute top-5 left-5 bg-white px-5 rounded-sm">
          {props.openSpots}
        </span>
      )}
      <img src={`images/${props.img}`} className="w-full rounded-xl" />
      <div className="flex items-center gap-2 mt-1">
        <img src={starIcon} />
        <span className="flex items-center gap-1">
          <span>{props.rating}</span>
          <span className="text-neutral-500">
            {`(${props.reviewCount})`} • {props.country}
          </span>
        </span>
      </div>
      <p className="text-sm mt-1">{props.title}</p>
      <p className="text-sm">
        <span className="font-bold mt-1">From ${props.price} </span>
        <span>/ person</span>
      </p>
    </div>
  );
}
