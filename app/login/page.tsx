"use client";

import { Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function LoginContent() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-secondary mb-2">Admin Login</h1>
                <p className="text-neutral-500 mb-8">Access the content management dashboard</p>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 mb-6 p-3 rounded-lg text-sm">
                        Authentication failed. Please try again.
                    </div>
                )}

                <button
                    onClick={() => signIn('google', { callbackUrl: '/admin' })}
                    className="w-full bg-secondary text-white font-bold py-3 px-6 rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    Continue with Google
                </button>

                <div className="mt-8 pt-6 border-t border-neutral-200 text-sm text-neutral-500">
                    <Link href="/" className="hover:text-black transition-colors">← Back to Website</Link>
                </div>
            </div>
        </div>
    );
}

export default function AdminLogin() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center text-secondary">Loading...</div>}>
            <LoginContent />
        </Suspense>
    );
}
