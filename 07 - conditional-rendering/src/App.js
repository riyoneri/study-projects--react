import ListItem from "./components/ListItem";

const ANIMALS = ["🐶dog", "😺cat", "🐔chicken", "🐮cow", "🐏sheep", "🐴horse"];

export default function App() {
  return (
    <main className="h-screen bg-neutral-200 flex justify-center p-10">
      <ul>
        {ANIMALS.map((animal, index) => (
          <ListItem text={animal} key={index} />
        ))}
      </ul>
    </main>
  );
}
