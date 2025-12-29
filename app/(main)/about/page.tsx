import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Us | Gambling Blog',
    description: 'Learn more about our mission to provide the best gambling guides and reviews.',
};

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen text-secondary">
            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-black/60 z-10"></div>
                <Image
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&h=900&fit=crop"
                    alt="About Us Background"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-md">
                        About Us
                    </h1>
                    <p className="text-xl text-neutral-100 max-w-2xl mx-auto drop-shadow-sm">
                        Your trusted source for expert gambling reviews, strategies, and industry news.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-secondary prose-strong:text-primary">
                    <h2 className="text-purple-600">Our Mission</h2>
                    <p>
                        We started this platform with a single goal: to bring transparency and expertise to the online gambling world. With thousands of casinos and games available, finding safe and entertaining options can be overwhelming. We do the heavy lifting so you don't have to.
                    </p>

                    <h3 className="text-primary mt-12 mb-6">What We Do</h3>
                    <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
                        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
                            <h4 className="text-xl font-bold text-primary mb-2">Unbiased Reviews</h4>
                            <p className="text-neutral-600">We test verified casinos and games with real money to give you honest feedback.</p>
                        </div>
                        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
                            <h4 className="text-xl font-bold text-primary mb-2">Expert Guides</h4>
                            <p className="text-neutral-600">From blackjack strategies to bankroll management, we help you play smarter.</p>
                        </div>
                        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
                            <h4 className="text-xl font-bold text-primary mb-2">Industry News</h4>
                            <p className="text-neutral-600">Stay updated with the latest trends, regulations, and game releases.</p>
                        </div>
                        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
                            <h4 className="text-xl font-bold text-primary mb-2">Safety First</h4>
                            <p className="text-neutral-600">We only promote licensed and regulated platforms that prioritize player safety.</p>
                        </div>
                    </div>

                    <h2 className="text-purple-600">Responsible Gambling</h2>
                    <p>
                        Gambling should always be about entertainment, not a way to make money. We are committed to promoting responsible gambling practices and providing resources for those who may need help.
                    </p>
                </div>
            </div>
        </main>
    );
}
