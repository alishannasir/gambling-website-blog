"use client";
import React, { useState, useMemo } from 'react';
import { games } from '../data/games';
import Link from 'next/link';

export default function GamesPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(24);

    // Extract unique categories from games
    const categories = useMemo(() => {
        const allTags = games.flatMap(game => game.tags);
        return ["All", ...Array.from(new Set(allTags))].sort();
    }, []);

    const filteredGames = useMemo(() => {
        if (activeFilter === "All") return games;
        return games.filter(game => game.tags.includes(activeFilter));
    }, [activeFilter]);

    const visibleGames = filteredGames.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount(prev => Math.min(prev + 12, filteredGames.length));
    };

    return (
        <main className="min-h-screen bg-background text-secondary pb-20 overflow-x-hidden pt-24">

            {/* Hero Section */}
            <section className="relative px-4 mb-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="relative overflow-hidden text-center p-8 md:p-16">
                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-primary font-bold uppercase leading-none mb-6 text-secondary">
                                Let's Play<br />
                            </h1>
                            <p className="text-xl md:text-2xl font-secondary font-medium text-secondary/70 max-w-2xl mx-auto mb-10">
                                Explore our massive collection of premium games.
                            </p>
                            <div className="w-24 h-2 bg-secondary mx-auto rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-7xl">

                {/* Filters */}
                <div className="mb-12 overflow-x-auto pb-4 custom-scrollbar">
                    <div className="flex gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveFilter(category);
                                    setVisibleCount(24); // Reset pagination on filter change
                                }}
                                className={`
                            px-6 py-2 rounded-full font-bold uppercase tracking-wider border-2 border-secondary whitespace-nowrap transition-all duration-300
                            ${activeFilter === category
                                        ? 'bg-secondary text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-1 translate-y-1 shadow-none'
                                        : 'bg-white text-secondary hover:bg-secondary/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1'
                                    }
                        `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                    {visibleGames.map((game) => (
                        <div
                            key={game.id}
                            className="group cursor-pointer flex flex-col h-full bg-white"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-[4/3] border-2 border-secondary rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-all duration-300">
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    loading="lazy"
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

                {visibleGames.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold font-primary text-secondary/50 uppercase">No games found for this category</h3>
                    </div>
                )}

                {/* Show More Button */}
                {visibleCount < filteredGames.length && (
                    <div className="flex justify-center">
                        <button
                            onClick={handleShowMore}
                            className="group relative inline-block"
                        >
                            <span className="absolute inset-0 bg-secondary translate-x-2 translate-y-2 rounded-lg transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></span>
                            <span className="relative inline-block border-2 border-secondary bg-white px-12 py-4 text-xl font-bold uppercase tracking-widest text-secondary hover:bg-gray-50 rounded-lg transition-colors">
                                Show More Games
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
