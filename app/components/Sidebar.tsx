import AdSense from './AdSense';
import NewsletterSignup from './NewsletterSignup';
import Link from 'next/link';
import { games } from '@/app/data/games';
import Image from 'next/image';

const Sidebar = () => {
    // Get top rated games
    const topGames = [...games].sort((a, b) => b.rating - a.rating).slice(0, 4);

    return (
        <aside className="space-y-8">
            {/* Search Widget - Could be a separate component */}
            <div className="bg-white border-2 border-secondary rounded-xl p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-bold text-secondary mb-4">Search</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search games, guides..."
                        className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-secondary focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                    <div className="absolute right-3 top-2.5 text-neutral-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                </div>
            </div>

            <NewsletterSignup />

            <AdSense slotId="sidebar-top" className="min-h-[250px]" />

            {/* Recommended Games Widget */}
            <div className="bg-white border-2 border-secondary rounded-xl p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-bold text-secondary mb-4 border-l-4 border-purple-500 pl-3">Top Rated Games</h3>
                <div className="space-y-4">
                    {topGames.map(game => (
                        <Link key={game.id} href="#" className="flex items-start gap-3 group">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-sm border border-neutral-100">
                                <Image src={game.image} alt={game.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h4 className="text-secondary text-sm font-semibold group-hover:text-purple-600 transition-colors line-clamp-1">{game.title}</h4>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-yellow-400 text-xs">★</span>
                                    <span className="text-neutral-500 text-xs">{game.rating}</span>
                                </div>
                                <span className="text-xs text-neutral-500 mt-1 block">{game.tags[0]}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <AdSense slotId="sidebar-sticky" className="sticky top-24" />
        </aside>
    );
};

export default Sidebar;
