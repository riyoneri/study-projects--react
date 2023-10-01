import Button from "./components/Button";

export default function App() {
  const handleClick = (position) => alert(`You clicked on Button ${position}`);
  return (
    <div className="flex justify-center gap-10 sm:flex-row flex-col items-center h-screen">
      <Button onClick={handleClick} position={1}>
        Button 1
      </Button>
      <Button onClick={handleClick} position={2}>
        Button 2
      </Button>
      <Button onClick={handleClick} position={3}>
        Button 3
      </Button>
    </div>
  );
}
