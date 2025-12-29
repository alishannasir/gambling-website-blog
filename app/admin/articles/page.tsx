"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IArticle } from '@/models/Article';

export default function ArticlesList() {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/articles?limit=100')
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles || []);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-8 text-neutral-400">Loading articles...</div>;

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Articles</h1>
                <Link href="/admin/articles/new" className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-neutral-200 transition-colors">
                    + Create Article
                </Link>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-neutral-950 text-neutral-400 text-xs uppercase font-semibold">
                        <tr>
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Views</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800">
                        {articles.map((article) => (
                            <tr key={article._id} className="hover:bg-neutral-800/30 transition-colors">
                                <td className="px-6 py-4 font-medium max-w-xs truncate">{article.title}</td>
                                <td className="px-6 py-4 text-sm text-neutral-400">{article.category?.name || '-'}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${article.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                        {article.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-neutral-400">{article.views}</td>
                                <td className="px-6 py-4 text-sm text-neutral-400">{new Date(article.createdAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <Link href={`/admin/articles/${article.slug}/edit`} className="text-purple-400 hover:text-white text-sm font-medium">
                                        Edit
                                    </Link>
                                    <button onClick={() => {/* Handle delete */ }} className="text-red-400 hover:text-red-300 text-sm font-medium">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
