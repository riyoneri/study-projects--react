import Button from "./components/Button";

export default function App() {
  return (
    <div className="flex justify-center gap-10 sm:flex-row flex-col items-center h-screen">
      <Button position={1} />
      <Button position={2} />
      <Button position={3} />
    </div>
  );
}
