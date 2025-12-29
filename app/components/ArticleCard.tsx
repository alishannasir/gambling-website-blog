import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/app/data/articles';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
    return (
        <div className="group bg-white border-2 border-secondary rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium uppercase tracking-wider">
                    {article.category}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-neutral-500 mb-2 space-x-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                </div>

                <Link href={`/${article.category.toLowerCase()}/${article.slug}`} className="block mb-2">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-purple-600 transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                </Link>

                <p className="text-neutral-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {article.description}
                </p>

                <div className="mt-auto pt-4 border-t border-neutral-200 flex justify-between items-center">
                    <Link
                        href={`/${article.category.toLowerCase()}/${article.slug}`}
                        className="text-purple-600 text-sm font-medium hover:text-purple-800 flex items-center gap-1 group/link"
                    >
                        Read Article
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
