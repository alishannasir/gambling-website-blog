"use client";

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function CategoriesPage() {
    const [categories, setCategories] = useState<any[]>([]);
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const fetchCategories = () => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const res = await fetch('/api/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                reset();
                fetchCategories();
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Manage Categories</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-neutral-950 text-neutral-400 text-xs uppercase">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Slug</th>
                                <th className="px-6 py-4">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            {categories.map(cat => (
                                <tr key={cat._id} className="hover:bg-neutral-800/30">
                                    <td className="px-6 py-4 font-medium">{cat.name}</td>
                                    <td className="px-6 py-4 text-sm text-neutral-400">{cat.slug}</td>
                                    <td className="px-6 py-4 text-sm text-neutral-500">{cat.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl h-fit">
                    <h2 className="text-xl font-bold mb-4">Add Category</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1">Name</label>
                            <input {...register('name', { required: true })} className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-white" />
                        </div>
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1">Slug</label>
                            <input {...register('slug', { required: true })} className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-white" />
                        </div>
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1">Description</label>
                            <textarea {...register('description')} className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-white rows=2" />
                        </div>
                        <button type="submit" disabled={loading} className="w-full bg-white text-black font-bold py-2 rounded-lg hover:bg-neutral-200">
                            {loading ? 'Adding...' : 'Add Category'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
