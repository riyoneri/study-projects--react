import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Image from "./components/Image";

export default function App() {
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10">
        <Form />
        <Image />
      </div>
    </main>
  );
}
