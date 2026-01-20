import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-background border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section with "lets play." */}
        <div className="pt-20 pb-12 border-b-2 border-gray-700">
          <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-primary font-bold leading-none uppercase tracking-tighter text-outline-white hover:text-white transition-colors duration-500 cursor-default select-none">
            lets play.
          </h2>
        </div>
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-primary font-bold uppercase tracking-wider border-b-2 border-white/20 pb-2 inline-block">About GambleGuide</h3>
            <p className="text-sm font-secondary text-gray-300 leading-relaxed max-w-xs">
              Your trusted source for gambling platform reviews, expert insights,
              and exclusive bonuses. We help you find the best gaming experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-primary font-bold uppercase tracking-wider border-b-2 border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 font-secondary text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/route/articles" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase font-bold">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/route/terms" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase font-bold">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block uppercase font-bold">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-primary font-bold uppercase tracking-wider border-b-2 border-white/20 pb-2 inline-block">Categories</h3>
            <ul className="space-y-3 font-secondary text-sm">
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer uppercase font-medium">Online Slots</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer uppercase font-medium">Live Poker</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer uppercase font-medium">Sports Betting</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer uppercase font-medium">Live Casino</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer uppercase font-medium">Blackjack</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer uppercase font-medium">Roulette</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-primary font-bold uppercase tracking-wider border-b-2 border-white/20 pb-2 inline-block">Connect</h3>
            <p className="text-sm font-secondary text-gray-300">
              Stay updated with the latest reviews.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-12 h-12 border-2 border-white hover:bg-white hover:text-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl font-bold">𝕏</span>
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white hover:bg-white hover:text-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl font-bold">f</span>
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white hover:bg-white hover:text-secondary rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl font-bold">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t-2 border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-secondary text-gray-400 font-medium">
              © 2026 GambleGuide.
            </p>
            <p className="text-sm font-secondary text-gray-400 font-bold uppercase tracking-wider border border-gray-600 px-3 py-1 rounded">
              18+ Only. Gamble Responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

