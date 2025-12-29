import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserMenu from "./ui/UserMenu";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-secondary">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-secondary border-2 border-secondary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                <span className="text-background font-primary font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-primary font-bold text-secondary uppercase tracking-tight">
                GambleGuide
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/games"
                className="text-secondary font-primary font-bold text-base uppercase tracking-wider hover:text-primary transition-colors duration-300 relative group"
              >
                Games
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/articles"
                className="text-secondary font-primary font-bold text-base uppercase tracking-wider hover:text-primary transition-colors duration-300 relative group"
              >
                Articles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              {(session?.user as any)?.role === 'admin' && (
                <Link
                  href="/admin"
                  className="text-secondary font-primary font-bold text-base uppercase tracking-wider hover:text-primary transition-colors duration-300 relative group"
                >
                  Admin
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
              <Link
                href="/about"
                className="text-secondary font-primary font-bold text-base uppercase tracking-wider hover:text-primary transition-colors duration-300 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-secondary font-primary font-bold text-base uppercase tracking-wider hover:text-primary transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <UserMenu user={session?.user} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

