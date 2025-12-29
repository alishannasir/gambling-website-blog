import Link from 'next/link';
import { categories } from '@/app/data/categories';

const CategoryNav = () => {
    return (
        <div className="bg-white/80 backdrop-blur border-b border-neutral-200 sticky top-16 z-30 overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-1 py-3 min-w-max">
                    {categories.slice(0, 6).map((category) => (
                        <Link
                            key={category.id}
                            href={`/games?category=${category.name.split(' ')[0]}`}
                            className="px-4 py-1.5 text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-full transition-colors whitespace-nowrap"
                        >
                            {category.name.split(' ')[0]}
                        </Link>
                    ))}
                    <Link
                        href="/games"
                        className="px-4 py-1.5 text-sm font-medium text-purple-600 hover:text-purple-800 hover:bg-purple-50 rounded-full transition-colors whitespace-nowrap"
                    >
                        All Categories
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryNav;
