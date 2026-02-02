import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }
    await connectToDatabase();

    const totalArticles = await Article.countDocuments({});
    const publishedArticles = await Article.countDocuments({ status: 'published' });
    const draftArticles = await Article.countDocuments({ status: 'draft' });
    const totalViews = await Article.aggregate([
        { $group: { _id: null, total: { $sum: "$views" } } }
    ]);

    const stats = [
        { label: 'Total Articles', value: totalArticles, color: 'text-blue-400' },
        { label: 'Published', value: publishedArticles, color: 'text-green-400' },
        { label: 'Drafts', value: draftArticles, color: 'text-orange-400' },
        { label: 'Total Views', value: totalViews[0]?.total || 0, color: 'text-purple-400' },
    ];

    const recentArticles = await Article.find({}).sort({ createdAt: -1 }).limit(5);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
                        <p className="text-neutral-400 text-sm font-medium mb-1">{stat.label}</p>
                        <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Recent Articles</h2>
                <Link href="/admin/articles/new" className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-neutral-200 transition-colors">
                    + Create New
                </Link>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-neutral-800 text-neutral-400 text-xs uppercase">
                        <tr>
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Views</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800">
                        {recentArticles.map(article => (
                            <tr key={article._id.toString()} className="hover:bg-neutral-800/50 transition-colors">
                                <td className="px-6 py-4 font-medium">{article.title}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${article.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                        {article.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-neutral-400 text-sm">
                                    {new Date(article.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-neutral-400">{article.views}</td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/admin/articles/${article.slug}/edit`} className="text-purple-400 hover:text-white text-sm font-medium">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
