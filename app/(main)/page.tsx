import Hero from '@/app/components/Hero';
import ScrollingText from '@/app/components/ScrollingText';
import GamesList from '@/app/components/GamesList';
import Disclaimer from '@/app/components/Disclaimer';
import Sidebar from '@/app/components/Sidebar';

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollingText />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
        <GamesList />
        <div className="py-16 md:py-24">
          <Sidebar />
        </div>
      </div>

      <Disclaimer />
    </main>
  );
}
