import Navbar from "./components/Navbar";
import Form from "./components/Form";

export default function App() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="max-w-2xl px-2 mx-auto mt-10">
        <Form />
      </div>
    </main>
  );
}
