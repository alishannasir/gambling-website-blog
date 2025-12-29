"use client";

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TipTap from '@/app/components/TipTap';
import Link from 'next/link';

export default function CreateArticlePage() {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<any[]>([]);
    const router = useRouter();
    const [uploading, setUploading] = useState(false);
    const [tags, setTags] = useState<string>('');

    useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const onContentChange = (content: string) => {
        setValue('content', content);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        setUploading(true);
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.url) {
                setValue('featuredImage', data.url);
            }
        } catch (err) {
            console.error('Upload failed', err);
        } finally {
            setUploading(false);
        }
    };

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            // Parse tags from comma-separated string to array
            const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);

            const res = await fetch('/api/articles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, tags: tagsArray }),
            });

            if (res.ok) {
                router.push('/admin/articles');
            } else {
                const err = await res.json();
                alert(err.error || 'Failed to create article');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <Link
                        href="/admin/articles"
                        className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                    >
                        ← Back to Articles
                    </Link>
                    <button
                        onClick={handleSubmit(onSubmit)}
                        disabled={loading}
                        className="px-6 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Publishing...' : 'Publish'}
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Title */}
                    <div>
                        <input
                            {...register('title', { required: true })}
                            className="w-full text-5xl font-bold text-gray-900 placeholder-gray-300 border-none focus:outline-none focus:ring-0 p-0"
                            placeholder="Article Title"
                        />
                        {errors.title && <span className="text-red-500 text-sm mt-2 block">Title is required</span>}
                    </div>

                    {/* Metadata Row */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Category</label>
                            <select
                                {...register('category', { required: true })}
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:border-black focus:outline-none"
                            >
                                <option value="">Select...</option>
                                {categories.map(cat => (
                                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Status</label>
                            <select
                                {...register('status')}
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-sm focus:border-black focus:outline-none"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Featured Image</label>
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:font-medium file:bg-white file:text-gray-700 hover:file:bg-gray-50 cursor-pointer"
                            />
                            {uploading && <p className="text-xs text-gray-500 mt-1">Uploading...</p>}
                            {watch('featuredImage') && (
                                <input type="hidden" {...register('featuredImage')} />
                            )}
                        </div>
                    </div>

                    {/* Tags Input */}
                    <div className="py-4">
                        <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                            Tags <span className="text-gray-400 normal-case">(comma-separated)</span>
                        </label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="e.g. gambling, casino, slots"
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 text-sm focus:border-black focus:outline-none"
                        />
                        <p className="text-xs text-gray-400 mt-1">Separate tags with commas</p>
                    </div>

                    {/* Content Editor */}
                    <div className="pt-4">
                        <label className="block text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">Content</label>
                        <TipTap content="" onChange={onContentChange} />
                    </div>
                </form>
            </div>
        </div>
    );
}
