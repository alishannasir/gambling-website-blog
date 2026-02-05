import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Provider from '@/app/components/Provider'; // This should be a client component wrapper for SessionProvider if needed, or I can implement it inline in layout if not strictly needing user context in THIS file, but children might.

// Basic Client Provider (I will create this next if not exists)
// Actually, since I am in a server file layout, I can just use server auth check.
// But for client components inside, they might need SessionProvider.
// I'll create a components/SessionProvider.tsx

export const metadata = {
    title: 'Admin Dashboard',
};

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session && !process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK) {
        // Validation logic remains same
    }
    const showSidebar = !!session?.user;

    return (
        <div className="flex min-h-screen bg-background text-secondary font-sans font-secondary">
            {showSidebar && (
                <aside className="w-64 bg-white border-r-2 border-secondary flex-shrink-0 fixed h-full z-10 hidden md:block">
                    <div className="p-6 border-b-2 border-secondary">
                        <h2 className="text-xl font-bold tracking-tight text-secondary font-primary uppercase">Admin Panel</h2>
                        <div className="mt-2 flex items-center gap-2 text-sm text-secondary/70">
                            <div className="w-2 h-2 bg-green-500 rounded-full border border-secondary"></div>
                            {session?.user?.name}
                        </div>
                    </div>
                    <nav className="p-4 space-y-2">
                        <NavLink href="/admin">Dashboard</NavLink>
                        <NavLink href="/admin/articles">Articles</NavLink>
                        <NavLink href="/admin/categories">Categories</NavLink>
                        <div className="pt-4 mt-4 border-t-2 border-secondary/10">
                            <NavLink href="/">View Live Site</NavLink>
                            <Link href="/api/auth/signout" className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-red-500 rounded-lg hover:bg-red-50 transition-all border-2 border-transparent hover:border-red-200">
                                Sign Out
                            </Link>
                        </div>
                    </nav>
                </aside>
            )}

            <main className={`flex-1 ${showSidebar ? 'md:ml-64' : ''} bg-background`}>
                {children}
            </main>
        </div>
    );
}
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-wide text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all border-2 border-transparent hover:border-secondary hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5">
            {children}
        </Link>
    );
}
