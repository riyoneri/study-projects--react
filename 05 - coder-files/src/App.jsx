import Card from "./components/Card";

const DATA = [
  {
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit",
  },
  {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#",
  },
];

export default function App() {
  const dataElements = DATA.map((item) => <Card key={item.id} {...item} />);
  return (
    <div className="flex justify-center items-center px-5 sm:px-10 bg-[#E0F8DB] h-screen">
      <div className="max-w-7xl mx-auto flex justify-center gap-10 items-stretch flex-col lg:flex-row">
        {dataElements}
      </div>
    </div>
  );
}
