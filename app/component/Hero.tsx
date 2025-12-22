export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-6 py-20 pt-32 overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Main Hero Content */}
        <div className="space-y-8 text-center md:text-left">
          {/* Hero Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-primary font-bold text-secondary leading-[0.9] tracking-tighter uppercase relative inline-block">
            Discover the Best
            <br />
            <span className="text-transparent bg-clip-text bg-secondary stroke-text relative z-10" style={{ WebkitTextStroke: '2px var(--color-secondary)' }}>
              Gambling
            </span>
            <span className="text-secondary ml-4">
              Platforms
            </span>
            <br />
            for Your Entertainment
            {/* Crown Icon or similar decoration */}
            <div className="absolute -top-10 -right-10 w-24 h-24 border-4 border-secondary rounded-full hidden lg:block opacity-20"></div>
          </h1>

          {/* Hero Description */}
          <p className="text-xl md:text-2xl font-secondary text-secondary/80 max-w-3xl leading-relaxed mx-auto md:mx-0">
            We review top-rated casino apps, sports betting platforms, poker rooms,
            and gaming sites. Find trusted reviews, exclusive bonuses, and expert
            insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center md:justify-start">
            <button className="px-10 py-5 bg-secondary text-background font-primary font-bold text-xl uppercase tracking-widest border-2 border-secondary shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
              Browse Casino Apps
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-secondary text-secondary font-primary font-bold text-xl uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,0)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
              Read Reviews
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap gap-8 items-center justify-center md:justify-start border-t-2 border-secondary/10 mt-8">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-4xl font-primary font-bold text-secondary tracking-tighter">500+</p>
              <p className="text-sm font-bold uppercase tracking-wider text-secondary/60">Platforms Reviewed</p>
            </div>
            <div className="w-px h-12 bg-secondary/20 hidden md:block"></div>
            <div className="space-y-1 text-center md:text-left">
              <p className="text-4xl font-primary font-bold text-secondary tracking-tighter">1M+</p>
              <p className="text-sm font-bold uppercase tracking-wider text-secondary/60">Monthly Readers</p>
            </div>
            <div className="w-px h-12 bg-secondary/20 hidden md:block"></div>
            <div className="space-y-1 text-center md:text-left">
              <p className="text-4xl font-primary font-bold text-secondary tracking-tighter">24/7</p>
              <p className="text-sm font-bold uppercase tracking-wider text-secondary/60">Updated Content</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 border-2 border-secondary bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-2xl">
          <p className="text-base font-secondary text-secondary">
            <strong className="text-secondary font-bold uppercase block mb-1">18+ Only. Responsible Gambling.</strong>
            Gambling can be addictive. Please play responsibly. Visit BeGambleAware.org for support.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border-2 border-secondary rounded-full opacity-10 hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 border-2 border-secondary rounded-full opacity-5 hidden lg:block"></div>

      {/* Scribble Element */}
      <svg className="absolute top-1/4 right-1/4 w-32 h-32 text-secondary/10 -z-0 rotate-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10C30 40 70 10 90 90" stroke="currentColor" strokeWidth="2" />
      </svg>
    </section>
  );
}

