"use client";
import React from 'react';
import Link from 'next/link';
import { articles } from '../data/articles';

const bestOf2026 = articles[0];
const latestArticle = articles[1];
const allArticles = articles.slice(2);
export default function ArticlesPage() {
    return (
        <main className="min-h-screen bg-background text-secondary pb-20 overflow-x-hidden">
            <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">

                {/* Header */}
                <div className="relative mb-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-primary uppercase tracking-tight relative z-10">
                        Articles
                    </h1>
                    {/* Decorative scribble line */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 border-2 border-secondary/10 rounded-full rotate-[-5deg] -z-0"></div>
                </div>
                {/* Best of 2026 Section */}
                <section className="mb-24 relative">
                    <div className="border-2 border-secondary rounded-xl p-6 md:p-10 relative bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                        <div className="absolute -top-5 left-8 bg-white px-4 py-1 border-2 border-secondary transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="text-lg md:text-xl font-bold font-primary uppercase tracking-wider">Here Best of 2026</span>
                        </div>

                        <div className="mt-6 grid md:grid-cols-2 gap-10 items-center">
                            <div className="aspect-video bg-gray-100 w-full relative group overflow-hidden border-2 border-secondary rounded-lg">
                                <div className="absolute inset-0 flex items-center justify-center text-secondary/30 font-bold text-xl uppercase tracking-widest">
                                    Feature Image
                                </div>
                                {/* Interactive overlay */}
                                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300"></div>
                            </div>

                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-bold uppercase bg-secondary text-white px-2 py-1 rounded-sm">{bestOf2026.category}</span>
                                        <span className="text-xs text-secondary/60 font-secondary">{bestOf2026.date}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold font-primary mb-4 leading-tight">{bestOf2026.title}</h2>
                                    <div className="w-16 h-1 bg-primary mb-6"></div>
                                    <p className="text-lg text-secondary/80 font-secondary mb-8 leading-relaxed">
                                        {bestOf2026.description}
                                    </p>
                                </div>
                                <div>
                                    <Link href={`/articles/${bestOf2026.id}`} className="group inline-flex items-center gap-2 text-lg font-bold uppercase tracking-wide hover:gap-4 transition-all duration-300">
                                        <span>Read Article</span>
                                        <span className="text-xl">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest Section */}
                <section className="mb-24">
                    <div className="flex items-baseline gap-4 mb-8">
                        <h2 className="text-3xl font-bold font-primary uppercase">Latest</h2>
                        <div className="h-px bg-secondary/20 flex-grow"></div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8">
                        <div className="md:col-span-5 aspect-[4/3] bg-gray-100 relative border-2 border-secondary rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            <div className="absolute inset-0 flex items-center justify-center text-secondary/30 font-bold uppercase">Image</div>
                        </div>
                        <div className="md:col-span-7 flex flex-col justify-center pl-0 md:pl-4">
                            {/* Squiggly decoration */}
                            <svg className="w-24 h-4 text-primary mb-4" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10C20 0 30 20 50 10C70 0 80 20 100 10" stroke="currentColor" strokeWidth="2" />
                            </svg>

                            <h3 className="text-2xl md:text-3xl font-bold font-primary mb-4">{latestArticle.title}</h3>
                            <p className="text-secondary/80 font-secondary mb-6 text-lg">{latestArticle.description}</p>

                            <Link href={`/articles/${latestArticle.id}`} className="inline-block border-2 border-secondary px-6 py-2 font-bold uppercase hover:bg-secondary hover:text-white transition-all duration-300 text-center w-fit">
                                Check it out
                            </Link>
                        </div>
                    </div>
                </section>
                {/* All Articles Section */}
                <section className="mb-32">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-bold font-primary uppercase">All Articles</h2>
                        <div className="hidden md:block w-1/3 h-px bg-secondary/10"></div>
                    </div>

                    <div className="space-y-6">
                        {allArticles.map((article, index) => (
                            <Link href={`/articles/${article.id}`} key={article.id} className="block group relative bg-white border-b-2 border-secondary/10 hover:border-secondary p-6 transition-all duration-300 hover:bg-gray-50">
                                <div className="grid md:grid-cols-12 gap-6 items-center">
                                    <div className="md:col-span-3 aspect-video bg-gray-100 relative border border-secondary/20 rounded-md overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center text-xs text-secondary/40">Article Img</div>
                                    </div>

                                    <div className="md:col-span-9">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold font-primary group-hover:text-primary transition-colors">{article.title}</h3>
                                            <span className="text-xs font-mono border border-secondary/20 px-2 py-0.5 rounded text-secondary/60">{article.date}</span>
                                        </div>
                                        <p className="text-secondary/70 font-secondary mb-4 line-clamp-2 max-w-2xl">{article.description}</p>

                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                            <span className="h-px w-8 bg-secondary"></span>
                                            <span className="text-sm font-bold uppercase">Read</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination dots */}
                    <div className="flex flex-col items-center gap-2 mt-16">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <div className="w-2 h-2 rounded-full bg-secondary/40"></div>
                        <div className="w-2 h-2 rounded-full bg-secondary/20"></div>
                        <div className="w-1 h-1 rounded-full bg-secondary/10"></div>
                    </div>
                </section>
                {/* Try out now CTA */}
                <section className="relative py-20 border-t-4 border-secondary">
                    {/* Background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full z-0"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-tr-full z-0"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-6xl md:text-8xl font-bold font-primary mb-12 tracking-tighter leading-none">
                            <span className="inline-block transform -rotate-3 hover:rotate-2 transition-transform duration-500 cursor-default">Try</span>
                            <span className="inline-block mx-4 text-primary transform rotate-2 hover:-rotate-1 transition-transform duration-500 cursor-default">out</span>
                            <span className="inline-block transform -rotate-1 hover:rotate-3 transition-transform duration-500 cursor-default">now</span>
                        </h2>
                        <div className="relative inline-block group">
                            <div className="absolute top-2 left-2 w-full h-full bg-secondary rounded-full"></div>
                            <button className="relative bg-white border-2 border-secondary text-secondary text-xl md:text-2xl px-12 py-5 rounded-full font-bold hover:translate-x-1 hover:translate-y-1 transition-transform duration-200 uppercase tracking-widest">
                                Get Started
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}