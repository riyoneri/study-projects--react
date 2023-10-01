export default function Card({
  first_name,
  last_name,
  employment,
  avatar,
  username,
}) {
  return (
    <div className="h-80 w-80 group [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl bg-white shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute space-y-5 px-5 inset-0 ">
          <img src={avatar} className="h-52 mx-auto" />
          <p className="font-bold">
            {first_name} {last_name}
          </p>
          <p>{employment.title}</p>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-white  text-center [transform:rotateY(180deg)]  [backface-visibility:hidden]">
          <div className="bg-black/50 flex flex-col py-5 rounded-xl w-full h-full px-12">
            <p>
              <span>Username: </span>
              <span>{username}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="flip-card w-[200px]">
    //   <div className="relative h-[100px] block transition duration-500 shadow-md flip-card-inner">
    //     <div className="w-full absolute bg-red-500 flip-card-front rounded-lg">
    // <img src={avatar} className="" />
    // <p className="font-bold">
    //   {first_name} {last_name}
    // </p>
    // <p>{employment.title}</p>
    //     </div>
    //     <div className="w-full bg-red-700 h-full absolute flip-card-back">
    //       Lion
    //     </div>
    //   </div>
    // </div>
  );
}
