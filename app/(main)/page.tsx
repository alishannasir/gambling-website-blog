import AdSense from '@/app/components/AdSense';
import ArticleCard from '@/app/components/ArticleCard';
import CategoryNav from '@/app/components/CategoryNav';
import Sidebar from '@/app/components/Sidebar';
import { articles } from '@/app/data/articles';
import { games } from '@/app/data/games';
import Link from 'next/link';
import Image from 'next/image';

import PromoPopup from '@/app/components/ui/PromoPopup';

export default function Home() {
  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);
  const trendingGames = games.filter(g => g.rating >= 4.8).slice(0, 4);

  return (
    <main className="bg-white min-h-screen text-secondary">
      <PromoPopup />

      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={featuredArticle.image}
          alt={featuredArticle.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto flex flex-col items-start text-white">
          <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold uppercase tracking-wider mb-4">
            Featured Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight max-w-4xl drop-shadow-lg text-white">
            <Link href={`/${featuredArticle.category.toLowerCase()}/${featuredArticle.slug}`} className="hover:text-purple-300 transition-colors">
              {featuredArticle.title}
            </Link>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl mb-8 drop-shadow-md line-clamp-2">
            {featuredArticle.description}
          </p>
          <Link
            href={`/${featuredArticle.category.toLowerCase()}/${featuredArticle.slug}`}
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-colors"
          >
            Read Now
          </Link>
        </div>
      </section>

      <CategoryNav />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8">

          {/* Trending Games Carousel / Grid */}
          <section className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
                <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                Trending Games
              </h2>
              <Link href="/games" className="text-purple-600 text-sm hover:text-purple-800 transition-colors">View All →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trendingGames.map(game => (
                <div key={game.id} className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-bold text-white text-sm line-clamp-1">{game.title}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-neutral-300 text-xs">{game.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSense slotId="home-content-top" />

          {/* Latest News */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-8 text-primary">
              <span className="w-1 h-8 bg-indigo-500 rounded-full"></span>
              Latest News & Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {latestArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-neutral-300 rounded-full text-neutral-600 hover:text-black hover:border-black transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
