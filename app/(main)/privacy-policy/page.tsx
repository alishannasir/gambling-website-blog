import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Gambling Blog',
    description: 'Our privacy policy outlining how we collect and use your data.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-white min-h-screen text-secondary pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>

                <div className="prose prose-lg prose-headings:text-primary prose-p:text-secondary prose-strong:text-primary prose-li:text-secondary max-w-none">
                    <p className="lead text-xl text-neutral-600">
                        Last updated: December 26, 2025
                    </p>

                    <p>
                        At Gambling Blog, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Gambling Blog and how we use it.
                    </p>

                    <h3>Log Files</h3>
                    <p>
                        Gambling Blog follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                    </p>

                    <h3>Cookies and Web Beacons</h3>
                    <p>
                        Like any other website, Gambling Blog uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                    </p>

                    <h3>Google DoubleClick DART Cookie</h3>
                    <p>
                        Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
                    </p>

                    <h3>Our Advertising Partners</h3>
                    <p>
                        Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data.
                    </p>

                    <h3>CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
                    <p>
                        Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                    </p>

                    <h3>GDPR Data Protection Rights</h3>
                    <p>
                        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                    </p>
                    <ul>
                        <li>The right to access – You have the right to request copies of your personal data.</li>
                        <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                        <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                    </ul>

                    <p>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    </p>
                </div>
            </div>
        </main>
    );
}
