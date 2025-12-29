import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(req: any) {
        // Check if user is accessing protected admin routes
        if (
            (req.nextUrl.pathname.startsWith('/admin/articles') ||
                req.nextUrl.pathname.startsWith('/admin/categories')) &&
            req.nextauth.token?.role !== 'admin'
        ) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }: any) => !!token, // Ensure user is logged in
        },
    }
);

export const config = {
    matcher: ['/admin/:path*'],
};
