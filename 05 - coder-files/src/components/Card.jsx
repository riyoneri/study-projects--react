export default function Card({
  first_name,
  last_name,
  employment,
  avatar,
  date_of_birth,
  address,
  username,
  gender,
  phone_number,
}) {
  return (
    <div className="h-80 w-80 xl:w-72 group">
      <div className="relative h-full rounded-xl sm:mx-1 bg-white shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute space-y-5 px-5 inset-0">
          <img src={avatar} className="h-52 mx-auto" />
          <p className="font-bold">
            {first_name} {last_name}
          </p>
          <p>{employment.title}</p>
        </div>
        <div className="absolute inset-0 rounded-xl bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="bg-black/50 text-xl gap-3 justify-center flex flex-col text-white py-5 rounded-xl w-full h-full px-5">
            <p>
              <span>Username: </span>
              <span>{username}</span>
            </p>
            <p>
              <span>Phone: </span>
              <span>{phone_number}</span>
            </p>
            <p>
              <span>Gender: </span>
              <span>{gender}</span>
            </p>
            <p>
              <span>Country: </span>
              <span>{address.country}</span>
            </p>
            <p>
              <span>City: </span>
              <span>{address.city}</span>
            </p>
            <p>
              <span>Birth date: </span>
              <span>{date_of_birth}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
