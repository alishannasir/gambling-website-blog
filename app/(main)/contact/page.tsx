import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Gambling Blog',
    description: 'Get in touch with our team for questions, partnerships, or feedback.',
};

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen text-secondary pt-24 pb-16">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
                    <p className="text-neutral-600">
                        Have questions or suggestions? We'd love to hear from you.
                    </p>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 shadow-lg">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-neutral-600 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-primary focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-primary focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-600 mb-2">Subject</label>
                            <select className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-primary focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors">
                                <option>General Inquiry</option>
                                <option>Advertising / Partnership</option>
                                <option>Report an Issue</option>
                                <option>Feedback</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-600 mb-2">Message</label>
                            <textarea
                                rows={6}
                                className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-primary focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-neutral-800 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
