export default function GamesList() {
  const games = [
    {
      id: 1,
      title: "Online Slots",
      description: "Spin to win with thousands of themed slot games",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Live Poker",
      description: "Real-time poker tournaments and cash games",
      image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Sports Betting",
      description: "Bet on your favorite teams and events",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Blackjack Tables",
      description: "Classic 21 with live dealers and variations",
      image: "https://images.unsplash.com/photo-1565270776149-c1e51235a1cb?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Roulette Wheels",
      description: "European, American, and French roulette",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Live Casino",
      description: "Immersive live dealer gaming experience",
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-background px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-primary font-bold text-secondary mb-4">
            Top Gaming Categories
          </h2>
          <p className="text-xl font-secondary text-primary max-w-2xl">
            Explore our curated selection of the best gambling platforms across all major categories
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {games.map((game) => (
            <div
              key={game.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 mb-6 aspect-[3/2]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-2xl font-primary font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                  {game.title}
                </h3>
                <p className="text-base font-secondary text-primary">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-secondary text-background font-secondary font-medium text-lg rounded-lg hover:bg-primary transition-colors duration-300">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}

