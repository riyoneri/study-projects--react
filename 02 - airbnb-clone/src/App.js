import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}
        />
      ))}
    </main>
  );
}
