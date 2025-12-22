import Hero from "./component/Hero";
import ScrollingText from "./component/ScrollingText";
import GamesList from "./component/GamesList";
import Disclaimer from "./component/Disclaimer";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollingText />
      <GamesList />
      <Disclaimer />
      <Footer />
    </main>
  );
}
