const ANIMALS = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

export default function App() {
  return (
    <div className="flex gap-10 justify-center flex-wrap px-10 mt-10">
      <ul className="list-disc">
        {ANIMALS.map((animal) => (
          <li key={new Date().getTime() + animal}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}
