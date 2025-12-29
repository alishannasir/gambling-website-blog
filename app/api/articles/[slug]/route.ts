import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';

async function isAdmin() {
    const session = await getServerSession(authOptions);
    return session?.user?.role === 'admin';
}

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    try {
        await connectToDatabase();
        const { slug } = await params; // Ensure params are awaited in Next 15

        // Try finding by slug first, then ID
        let article = await Article.findOne({ slug }).populate('category').populate('author', 'name');

        if (!article && slug.length === 24) {
            article = await Article.findById(slug).populate('category').populate('author', 'name');
        }

        if (!article) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json(article);
    } catch (error) {
        console.error('Error fetching article:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();
        const { slug } = await params;
        const body = await req.json();

        // Update logic - can be by slug or ID
        let article = await Article.findOneAndUpdate({ slug }, body, { new: true }).populate('category');

        if (!article && slug.length === 24) {
            article = await Article.findByIdAndUpdate(slug, body, { new: true }).populate('category');
        }

        if (!article) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json(article);

    } catch (error) {
        console.error('Error updating article:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    try {
        if (!(await isAdmin())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();
        const { slug } = await params;

        let article = await Article.findOneAndDelete({ slug });

        if (!article && slug.length === 24) {
            article = await Article.findByIdAndDelete(slug);
        }

        if (!article) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Article deleted successfully' });

    } catch (error) {
        console.error('Error deleting article:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
