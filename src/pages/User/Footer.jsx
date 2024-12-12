export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto text-center">
                {/* Application Branding */}
                <h2 className="text-xl font-bold text-white mb-4">~日本~ Learn</h2>
                <p className="text-sm mb-6">
                    Expand your Japanese vocabulary and improve your language skills with ease.
                </p>

                {/* Navigation Links */}
                <div className="flex justify-center gap-6 mb-6">
                    <a
                        href="/lessons"
                        className="text-gray-300 hover:text-white transition duration-200"
                    >
                        Lessons
                    </a>
                    <a
                        href="/about"
                        className="text-gray-300 hover:text-white transition duration-200"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-300 hover:text-white transition duration-200"
                    >
                        Contact
                    </a>
                    <a
                        href="/privacy"
                        className="text-gray-300 hover:text-white transition duration-200"
                    >
                        Privacy Policy
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center gap-4 mb-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500 transition duration-200"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition duration-200"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-pink-500 transition duration-200"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

                {/* Copyright and Host Information */}
                <p className="text-sm">
                    © {new Date().getFullYear()} ~日本~ Learn. All rights reserved. Hosted on{" "}
                    <a
                        href="https://vercel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Vercel
                    </a>
                </p>
            </div>
        </footer>
    );
}
