"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { articles } from '../../data/articles';

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
   const { id } = use(params);
   const article = articles.find((a) => a.id === Number(id));

   if (!article) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-background text-secondary">
            <div className="text-center">
               <h1 className="text-4xl font-primary font-bold mb-4">Article Not Found</h1>
               <Link href="/articles" className="text-lg underline">Back to Articles</Link>
            </div>
         </div>
      );
   }

   return (
      <main className="min-h-screen bg-background text-secondary pb-20 overflow-x-hidden pt-24">
         <div className="container mx-auto px-4 max-w-4xl">

            {/* Header Section */}
            <div className="mb-12 border-b-2 border-secondary/20 pb-8">
               <div className="flex items-center gap-4 mb-6">
                  <span className="bg-secondary text-background px-3 py-1 font-bold uppercase tracking-wider text-sm rounded-sm">
                     {article.category}
                  </span>
                  <span className="font-mono text-secondary/60 text-sm border border-secondary/20 px-2 py-0.5 rounded">
                     {article.date} • {article.author}
                  </span>
               </div>

               <h1 className="text-4xl md:text-6xl font-primary font-bold uppercase leading-tight tracking-tight mb-8">
                  {article.title}
               </h1>

               {/* Intro Text / Subtitle */}
               <div className="border-l-4 border-primary pl-6 py-2 bg-gray-50 rounded-r-lg">
                  <p className="text-xl md:text-2xl font-secondary italic text-secondary/80">
                     "{article.description}"
                  </p>
               </div>
            </div>

            {/* Featured Image */}
            <div className="mb-16 relative group">
               <div className="aspect-video w-full bg-gray-100 border-2 border-secondary rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
                  <img
                     src={article.image}
                     alt={article.title}
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>
               {/* Decorative Offset Box */}
               <div className="absolute top-4 left-4 w-full h-full border-2 border-secondary/20 rounded-xl -z-0"></div>
            </div>

            {/* Article Content */}
            <article className="prose prose-xl prose-gray max-w-none font-secondary text-secondary/90 leading-relaxed mb-16">
               {article.content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx} className="mb-6">{paragraph.trim()}</p>
               ))}
            </article>

            {/* Squiggle Separator */}
            <div className="flex justify-center mb-16 opacity-50">
               <svg className="w-32 h-6 text-secondary" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10C20 0 30 20 50 10C70 0 80 20 100 10" stroke="currentColor" strokeWidth="3" />
               </svg>
            </div>

            {/* CTA Section */}
            <section className="bg-white border-2 border-secondary rounded-xl p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute top-0 left-0 w-full h-2 bg-secondary/10"></div>

               <h2 className="text-4xl md:text-6xl font-primary font-bold uppercase tracking-tight mb-8">
                  Try Out Now
               </h2>
               <p className="text-lg text-secondary/70 font-secondary mb-8 max-w-md mx-auto">
                  Ready to put these strategies to the test? Join the ultimate gaming experience today.
               </p>

               <button className="bg-secondary text-background text-xl px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-200 shadow-lg">
                  Get Started
               </button>
            </section>

         </div>
      </main>
   );
}