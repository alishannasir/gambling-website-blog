import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/app/data/articles'; // You might need to adjust import paths
import { categories } from '@/app/data/categories';
import ArticleCard from '@/app/components/ArticleCard'; // Adjust path if needed
import Sidebar from '@/app/components/Sidebar'; // Adjust path if needed
import AdSense from '@/app/components/AdSense';

interface PageProps {
    params: {
        category: string;
    };
}

// Ensure params are awaited in Next.js 15+
export default async function CategoryPage({ params }: PageProps) {
    const { category: categorySlug } = await params;

    // Find category info
    const categoryInfo = categories.find(c => c.slug === categorySlug) || categories.find(c => c.id === categorySlug);

    // In a real app, you'd fetch based on slug. 
    // For this mock, we filter 'articles' based on the category string loosely matching.
    // Warning: This is a robust mock approach.
    const filteredArticles = articles.filter(
        (article) =>
            article.category.toLowerCase().includes(categorySlug.replace('-games', '')) ||
            categorySlug === 'categories' // Show all if 'categories' dummy slug
    );

    if (!categoryInfo && categorySlug !== 'categories') {
        // If not a known category slug, check if it matches a generic category
        // For now, let's just proceed to show content or 404
        // return notFound(); 
    }

    const title = categoryInfo ? categoryInfo.name : categorySlug.replace('-', ' ').toUpperCase();
    const description = categoryInfo ? categoryInfo.description : `Browse our latest articles and reviews for ${title}.`;

    return (
        <main className="bg-white min-h-screen text-secondary">
            <div className="bg-neutral-50 border-b border-neutral-200 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-2 block">Category</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{title}</h1>
                    <p className="text-xl text-neutral-600 max-w-2xl">{description}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    {filteredArticles.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {filteredArticles.map(article => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-neutral-50 rounded-xl border border-neutral-200">
                            <p className="text-neutral-500 text-lg">No articles found in this category yet. Check back soon!</p>
                            <Link href="/" className="inline-block mt-4 text-purple-600 hover:text-purple-800 font-medium">
                                ← Back to Home
                            </Link>
                        </div>
                    )}

                    <AdSense slotId="category-bottom" className="mt-12" />
                </div>

                <div className="lg:col-span-4">
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
