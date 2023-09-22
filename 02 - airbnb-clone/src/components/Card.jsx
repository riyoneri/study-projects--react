import starIcon from "../images/star.svg";

export default function Card(props) {
  return (
    <div className="flex flex-col mt-10 w-56">
      <img src={props.info.img} className="w-full object-cover" />
      <div className="flex items-center gap-2 mt-1">
        <img src={starIcon} />
        <span className="flex items-center gap-1">
          <span>{props.info.rating}</span>
          <span className="text-neutral-500">
            {`(${props.info.reviewCount})`} • {props.info.country}
          </span>
        </span>
      </div>
      <p className="text-sm mt-1">{props.info.title}</p>
      <p className="text-sm">
        <span className="font-bold mt-1">From ${props.info.price} </span>
        <span>/ person</span>
      </p>
    </div>
  );
}
