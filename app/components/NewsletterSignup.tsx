"use client";

import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <div className="bg-white border-2 border-secondary rounded-xl p-6 relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <h3 className="text-xl font-bold text-secondary mb-2">Join the Inner Circle</h3>
                <p className="text-neutral-600 text-sm mb-4">
                    Get exclusive game tips, bonus codes, and industry news delivered to your inbox.
                </p>

                {status === 'success' ? (
                    <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm text-center font-medium border-2 border-green-500">
                        Thanks for subscribing! Check your email.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full bg-white border-2 border-secondary rounded-lg px-4 py-2 text-secondary placeholder-neutral-400 focus:outline-none focus:border-purple-600 focus:ring-0 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-secondary text-white font-bold py-2 rounded-lg border-2 border-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0"
                        >
                            {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                        </button>
                    </form>
                )}

                <p className="text-xs text-neutral-500 mt-4 text-center">
                    No spam, unsubscribe anytime.
                </p>
            </div>
        </div>
    );
};

export default NewsletterSignup;
