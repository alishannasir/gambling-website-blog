export default function ScrollingText() {
  return (
    <div className="w-full bg-secondary py-16 overflow-hidden space-y-8">
      {/* First Line - Scroll Left to Right */}
      <div className="relative flex overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll-ltr">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-6xl md:text-7xl lg:text-8xl font-primary font-bold text-background px-12">
              🎰 BEST CASINO APPS OF 2026 ⭐ EXCLUSIVE BONUSES INSIDE 🎲 TOP RATED PLATFORMS 💎 WIN BIG TODAY ✨
            </span>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-scroll-ltr absolute top-0" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-6xl md:text-7xl lg:text-8xl font-primary font-bold text-background px-12">
              🎰 BEST CASINO APPS OF 2026 ⭐ EXCLUSIVE BONUSES INSIDE 🎲 TOP RATED PLATFORMS 💎 WIN BIG TODAY ✨
            </span>
          ))}
        </div>
      </div>

      {/* Second Line - Scroll Right to Left */}
      <div className="relative flex overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll-rtl">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-6xl md:text-7xl lg:text-8xl font-primary font-bold text-background px-12">
              💰 TRUSTED REVIEWS 2026 🏆 BIGGEST JACKPOTS AWAIT 🎯 EXPERT PICKS & TIPS ⚡ PLAY RESPONSIBLY 🌟
            </span>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-scroll-rtl absolute top-0" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-6xl md:text-7xl lg:text-8xl font-primary font-bold text-background px-12">
              💰 TRUSTED REVIEWS 2026 🏆 BIGGEST JACKPOTS AWAIT 🎯 EXPERT PICKS & TIPS ⚡ PLAY RESPONSIBLY 🌟
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

