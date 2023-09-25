import Navbar from "./components/Navbar";
import Form from "./components/Form";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10">
        <Form />
      </div>
    </main>
  );
}
