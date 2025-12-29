"use client";
import React, { useState } from 'react';
import { games } from '../data/games';

export default function GamesList() {
  const [visibleCount, setVisibleCount] = useState(24);

  const visibleGames = games.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, games.length));
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-background border-t-2 border-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-primary font-bold uppercase text-secondary mb-6 md:mb-0 relative inline-block">
            Top Rated Games
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary transform rotate-1"></span>
          </h2>

          <div className="flex gap-4">
            <button className="px-4 py-2 border-2 border-secondary font-bold uppercase hover:bg-secondary hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Filter
            </button>
            <button className="px-4 py-2 border-2 border-secondary font-bold uppercase hover:bg-secondary hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Sort
            </button>
          </div>
        </div>

        {/* Games Grid - 4 Columns on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {visibleGames.map((game) => (
            <div
              key={game.id}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-[4/3] border-2 border-secondary rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-all duration-300">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300"></div>

                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-white border-2 border-secondary px-2 py-1 font-bold font-mono text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  ★ {game.rating}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold font-primary uppercase leading-tight group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {game.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold border border-secondary/20 px-1.5 py-0.5 rounded text-secondary/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < games.length && (
          <div className="flex justify-center">
            <button
              onClick={handleShowMore}
              className="group relative inline-block"
            >
              <span className="absolute inset-0 bg-secondary translate-x-2 translate-y-2 rounded-lg transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></span>
              <span className="relative inline-block border-2 border-secondary bg-white px-12 py-4 text-xl font-bold uppercase tracking-widest text-secondary hover:bg-gray-50 rounded-lg transition-colors">
                Show More Games (+12)
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
