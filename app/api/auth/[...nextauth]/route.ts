import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';

// List of emails that are automatically granted Admin access
const ADMIN_EMAILS = [
    "alishannasir123@gmail.com", // <--- REPLACE THIS WITH YOUR EMAIL
];

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === 'google') {
                await connectToDatabase();
                try {
                    const existingUser = await User.findOne({ email: user.email });

                    // Check if this user should be an admin
                    const role = ADMIN_EMAILS.includes(user.email || '') ? 'admin' : 'user';

                    if (!existingUser) {
                        await User.create({
                            name: user.name,
                            email: user.email,
                            image: user.image,
                            googleId: account.providerAccountId,
                            role: role,
                        } as any);
                    } else if (ADMIN_EMAILS.includes(user.email || '')) {
                        // If user exists and is in the admin list, ensure they have admin role
                        if (existingUser.role !== 'admin') {
                            existingUser.role = 'admin';
                            await existingUser.save();
                        }
                    }
                    return true;
                } catch (error) {
                    console.error('Error in signIn callback:', error);
                    return false;
                }
            }
            return true;
        },
        async jwt({ token, user, trigger, session }) {
            if (user) {
                // Include role and userId in token
                await connectToDatabase();
                const dbUser = await User.findOne({ email: user.email });
                if (dbUser) {
                    token.id = dbUser._id.toString();
                    token.role = dbUser.role;
                }
            }

            // Handle updates (e.g. role change)
            if (trigger === 'update' && session) {
                token = { ...token, ...session };
            }

            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
            }
            return session;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login', // params error=...
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
