import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { games, gameHref, getGameBySlug, slugify } from '@/app/data/games';
import Sidebar from '@/app/components/Sidebar';
import AdSense from '@/app/components/AdSense';
import AffiliateButton from '@/app/components/AffiliateButton';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return games.map(g => ({ slug: slugify(g.title) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const game = getGameBySlug(slug);
    if (!game) return { title: 'Game not found' };
    return {
        title: `${game.title} Review & Guide`,
        description: `Full review of ${game.title}: rating, features, tips and where to play.`,
    };
}

const shadow = 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]';

export default async function GamePage({ params }: PageProps) {
    const { slug } = await params;
    const game = getGameBySlug(slug);
    if (!game) return notFound();

    const [type, theme, provider] = game.tags;
    const hasPlayLink = game.link && game.link !== '#';

    const related = games
        .filter(g => g.id !== game.id && g.tags.some(t => game.tags.includes(t)))
        .sort(
            (a, b) =>
                b.tags.filter(t => game.tags.includes(t)).length -
                a.tags.filter(t => game.tags.includes(t)).length || b.rating - a.rating
        )
        .slice(0, 4);

    const gallery = [1, 2, 3].map(n => ({
        src: game.image.replace(/(\?text=.*)$/, '') + `?text=${encodeURIComponent(game.title)}+${n}`,
        alt: `${game.title} screenshot ${n}`,
    }));

    const features = [
        `${type ?? 'Game'} format with ${theme ?? 'classic'} theme`,
        provider ? `Developed by ${provider}` : null,
        `Community rating of ${game.rating} out of 5`,
        game.tags.includes('Mobile') ? 'Optimised for mobile play' : 'Playable on desktop and mobile',
        game.tags.includes('High Volatility')
            ? 'High volatility: bigger but less frequent wins'
            : 'Balanced volatility for steady sessions',
    ].filter(Boolean) as string[];

    return (
        <main className="bg-background min-h-screen text-secondary pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                <nav className="text-sm font-bold uppercase tracking-wider mb-8 text-secondary/60">
                    <Link href="/" className="hover:text-secondary">Home</Link> /{' '}
                    <Link href="/games" className="hover:text-secondary">Games</Link> /{' '}
                    <span className="text-secondary">{game.title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
                    <article className="space-y-12">
                        {/* Header */}
                        <header className="grid md:grid-cols-2 gap-8 items-center">
                            <div className={`relative border-2 border-secondary rounded-lg overflow-hidden bg-gray-100 ${shadow}`}>
                                <img src={game.image} alt={game.title} className="w-full aspect-[4/3] object-cover" />
                                <div className="absolute top-3 right-3 bg-white border-2 border-secondary px-3 py-1 font-bold font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    ★ {game.rating}
                                </div>
                            </div>
                            <div className="space-y-5">
                                <h1 className="text-4xl md:text-6xl font-primary font-bold uppercase leading-none">
                                    {game.title}
                                </h1>
                                <div className="flex flex-wrap gap-2">
                                    {game.tags.map(tag => (
                                        <span key={tag} className="text-xs uppercase font-bold border-2 border-secondary px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-lg text-secondary/80 leading-relaxed">
                                    {game.title} is a {theme?.toLowerCase()}-themed {type?.toLowerCase()} title
                                    {provider ? ` from ${provider}` : ''}, rated {game.rating}/5 by our reviewers.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {hasPlayLink ? (
                                        <AffiliateButton href={game.link}>Play {game.title}</AffiliateButton>
                                    ) : (
                                        <span className="px-6 py-3 border-2 border-secondary/30 font-bold uppercase text-secondary/50">
                                            Play link coming soon
                                        </span>
                                    )}
                                    <Link
                                        href="/games"
                                        className="px-6 py-3 border-2 border-secondary font-bold uppercase hover:bg-secondary hover:text-white transition-colors"
                                    >
                                        ← All Games
                                    </Link>
                                </div>
                            </div>
                        </header>

                        <AdSense slotId="game-top" />

                        {/* Overview */}
                        <section className="space-y-4">
                            <h2 className="text-3xl font-primary font-bold uppercase">Overview</h2>
                            <p className="text-lg leading-relaxed text-secondary/90">
                                {game.title} sits among the {game.rating >= 4.8 ? 'highest' : 'well'}-rated {type?.toLowerCase()} games
                                in our catalogue. Its {theme?.toLowerCase()} theme and {provider ? `${provider} ` : ''}
                                production give it a distinct identity, whether you are a first-time player or a regular
                                looking for something new.
                            </p>
                            <p className="text-lg leading-relaxed text-secondary/90">
                                Always check the rules, return-to-player (RTP) figure and the operator's terms before
                                you play, as these can vary between casinos and regions.
                            </p>
                        </section>

                        {/* Key features */}
                        <section className="space-y-4">
                            <h2 className="text-3xl font-primary font-bold uppercase">Key Features</h2>
                            <ul className={`bg-white border-2 border-secondary rounded-xl p-6 space-y-3 ${shadow}`}>
                                {features.map(f => (
                                    <li key={f} className="flex items-start gap-3">
                                        <span className="mt-2 w-2 h-2 bg-secondary rounded-full shrink-0" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Gallery */}
                        <section className="space-y-4">
                            <h2 className="text-3xl font-primary font-bold uppercase">Gallery</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {gallery.map(img => (
                                    <img
                                        key={img.src}
                                        src={img.src}
                                        alt={img.alt}
                                        loading="lazy"
                                        className="w-full aspect-[4/3] object-cover border-2 border-secondary rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Tips */}
                        <section className="space-y-4">
                            <h2 className="text-3xl font-primary font-bold uppercase">Tips Before You Play</h2>
                            <ol className="list-decimal pl-6 space-y-2 text-lg text-secondary/90">
                                <li>Set a budget and a time limit before your first spin or hand.</li>
                                <li>Try the demo mode, if offered, to learn the mechanics.</li>
                                <li>Check the published RTP and volatility in the game's info screen.</li>
                                <li>Never chase losses. Take breaks and stop when it stops being fun.</li>
                            </ol>
                            <p className="text-sm font-bold uppercase text-secondary/60">
                                18+ only. Gambling can be addictive. Visit{' '}
                                <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="underline">
                                    BeGambleAware.org
                                </a>{' '}
                                for support.
                            </p>
                        </section>

                        {/* Related */}
                        {related.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-3xl font-primary font-bold uppercase">Similar Games</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {related.map(g => (
                                        <Link key={g.id} href={gameHref(g)} className="group block">
                                            <img
                                                src={g.image}
                                                alt={g.title}
                                                loading="lazy"
                                                className="w-full aspect-[4/3] object-cover border-2 border-secondary rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform"
                                            />
                                            <h3 className="mt-3 font-bold uppercase text-sm group-hover:underline">{g.title}</h3>
                                            <span className="text-xs font-mono">★ {g.rating}</span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>

                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
