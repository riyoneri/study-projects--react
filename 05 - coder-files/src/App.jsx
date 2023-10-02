import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [users, setUsers] = useState([]);
  const [change, setchange] = useState(false);

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=12")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, [change]);

  const displayUsers = users.map((user) => <Card key={user.id} {...user} />);

  return (
    <div className="flex justify-center min-h-screen bg-[#E1F6DC]">
      <div className="grid gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 px-5">
        <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center">
          <button
            className="bg-[#A30036] rounded-md sm:rounded-xl w-full sm:w-auto"
            onClick={() => setchange((prevChange) => !prevChange)}
          >
            <span className="bg-[#F0003C] text-white block sm:text-xl py-1 sm:py-3 px-10 rounded-md sm:rounded-xl -translate-y-2 active:-translate-y-1 transition font-bold">
              Fetch Random
            </span>
          </button>
        </div>
        {displayUsers}
      </div>
    </div>
  );
}
