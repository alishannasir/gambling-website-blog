import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';
import User from '@/models/User';
import Category from '@/models/Category';

// Helper to check admin role
async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === 'admin';
}

export async function GET(req: Request) {
    try {
        await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const categorySlug = searchParams.get('category');
        const status = searchParams.get('status'); // 'published' or 'draft' (admin only)
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        const query: any = {};

        // Filter by category
        if (categorySlug) {
            const category = await Category.findOne({ slug: categorySlug });
            if (category) {
                query.category = category._id;
            }
        }

        // Filter by status (public can only see published)
        const admin = await isAdmin();
        if (!admin) {
            query.status = 'published';
        } else if (status) {
            query.status = status;
        }

        const articles = await Article.find(query)
            .populate('category', 'name slug')
            .populate('author', 'name')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Article.countDocuments(query);

        return NextResponse.json({
            articles,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit)
            }
        });

    } catch (error) {
        console.error('Error fetching articles:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();
        const body = await req.json();

        // Generate slug from title if not provided
        if (!body.slug && body.title) {
            body.slug = body.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
        }

        // Validate Slug Uniqueness
        const existing = await Article.findOne({ slug: body.slug });
        if (existing) {
            return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
        }

        // Get current user as author if not provided
        if (!body.author) {
            const session = await getServerSession(authOptions);
            body.author = session?.user.id;
        }

        const article = await Article.create(body);

        return NextResponse.json(article, { status: 201 });

    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
