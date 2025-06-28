import { useState } from 'react';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <section className="max-w-2xl mx-auto px-4 py-16 text-center bg-pink-50 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-pink-800 mb-4">Let's Connect</h2>
            <p className="text-md text-gray-700 mb-6">
                If you're a brand or agency looking to collaborate on wholesome, vibrant content that resonates with real families — I'm your creator.
                Let’s bring your story to life with authentic, heartfelt visuals.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
                <a href="https://instagram.com/duniaimara" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:underline font-semibold">
                    Instagram
                </a>
                <a href="https://tiktok.com/@duniaimara" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:underline font-semibold">
                    TikTok
                </a>
            </div>

            {!isSubmitted ? (
                <form
                    action="https://formspree.io/f/xzzgyakq"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4 text-left"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-md transition"
                    >
                        Send Message
                    </button>
                </form>
            ) : (
                <div className="text-3xl font-bold text-pink-800 mb-4">
                    Thank you for reaching out! I'll be in touch soon. 💌
                </div>
            )}
        </section>
    );
};

export default Contact;
