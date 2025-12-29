import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/app/data/articles'; // Adjust path
import Sidebar from '@/app/components/Sidebar'; // Adjust path
import AdSense from '@/app/components/AdSense';
import AffiliateButton from '@/app/components/AffiliateButton';

interface PageProps {
    params: {
        slug: string;
        category: string;
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug, category } = await params;

    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return notFound();
    }

    return (
        <main className="bg-black min-h-screen text-white">
            {/* Article Header */}
            <div className="relative h-[60vh] min-h-[400px] w-full">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                        <Link href={`/${category}`} className="bg-purple-600/80 backdrop-blur px-3 py-1 rounded text-white hover:bg-purple-500 transition-colors uppercase tracking-wider">
                            {article.category}
                        </Link>
                        <span className="text-neutral-300">{article.date}</span>
                        <span className="text-neutral-400">•</span>
                        <span className="text-neutral-300">{article.author}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-5xl drop-shadow-xl">
                        {article.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <article className="lg:col-span-8">
                    <div className="prose prose-invert prose-lg max-w-none prose-purple">
                        <p className="lead text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed mb-8">
                            {article.description}
                        </p>

                        <AdSense slotId="article-top" />

                        <div className="whitespace-pre-line text-neutral-300">
                            {article.content}
                        </div>

                        {article.refLink && (
                            <div className="my-12 p-8 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl border border-neutral-700 text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Ready to Play?</h3>
                                <p className="text-neutral-400 mb-6">Claim your exclusive bonus and start playing today.</p>
                                <AffiliateButton href={article.refLink}>
                                    Play Now & Get Bonus
                                </AffiliateButton>
                            </div>
                        )}
                    </div>

                    <AdSense slotId="article-bottom" className="mt-8" />

                    {/* Author Bio */}
                    <div className="mt-12 pt-8 border-t border-neutral-800 flex items-center gap-4">
                        <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-2xl">
                            ✏️
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Written by {article.author}</h4>
                            <p className="text-neutral-400 text-sm">Expert gaming analyst and content creator.</p>
                        </div>
                    </div>
                </article>

                <div className="lg:col-span-4">
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
