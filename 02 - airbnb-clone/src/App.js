import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Card
        img="../images/img1.png"
        rating="5.0"
        reviewCount={6}
        country="Rwanda"
        title="Life lesson with Katie Zaferes"
        price={136}
      />
    </main>
  );
}
