import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicyEN = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <div className="mb-8">
                        <a 
                            href="/" 
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                            </svg>
                            Back to Portfolio
                        </a>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                        Last updated: {new Date().toLocaleDateString('en-US')}
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-8">
                        <p className="text-blue-800 dark:text-blue-200">
                            <strong>Summary:</strong> This personal portfolio does not collect personal data. 
                            We only use essential technical cookies for site functionality.
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            1. Information We Collect
                        </h2>
                        
                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            1.1 Technical Data
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Technical cookies:</strong> To remember your theme preference (dark/light)</li>
                            <li><strong>Anonymous usage data:</strong> Information about how you interact with the site</li>
                            <li><strong>Device information:</strong> Browser type and operating system to optimize experience</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            1.2 What We DON'T Collect
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Names, email addresses or personal information</li>
                            <li>Contact form data (we don't have forms)</li>
                            <li>Location information or sensitive data</li>
                            <li>Tracking data for advertising</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            2. How We Use Your Information
                        </h2>
                        
                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            2.1 Site Functionality
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Remember your theme preference (dark/light)</li>
                            <li>Improve navigation experience</li>
                            <li>Optimize site performance</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            2.2 Anonymous Analytics
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Understand which pages are most visited</li>
                            <li>Identify technical errors</li>
                            <li>Improve site structure</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            3. Data Storage
                        </h2>
                        
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-6">
                            <p className="text-green-800 dark:text-green-200">
                                <strong>Local Storage:</strong> All data is stored only on your device 
                                through browser localStorage. We don't use external servers to store personal data.
                            </p>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            4. Cookies
                        </h2>
                        
                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            4.1 Types of Cookies We Use
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Essential technical cookies:</strong> For basic site functionality</li>
                            <li><strong>Preference cookies:</strong> To remember your preferred theme</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                            4.2 Cookies We DON'T Use
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Tracking or advertising cookies</li>
                            <li>Social media cookies</li>
                            <li>Third-party analytics cookies</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            5. Sharing Information
                        </h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We do not sell, rent or share your personal information with third parties. 
                            The only data we handle is technical and processed locally on your device.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            6. Your Rights
                        </h2>
                        
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Delete data:</strong> You can clear your browser's localStorage</li>
                            <li><strong>Disable cookies:</strong> Through your browser settings</li>
                            <li><strong>Change preferences:</strong> You can change the theme at any time</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            7. Security
                        </h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We implement standard security measures to protect this website. 
                            We use secure connections (HTTPS) and follow web development best practices.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            8. Changes to This Policy
                        </h2>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            We reserve the right to update this privacy policy. 
                            Significant changes will be notified by updating the date on this page.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                            9. Contact
                        </h2>
                        
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                If you have questions about this privacy policy, you can contact me:
                            </p>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li><strong>Email:</strong> aarjona1991@gmail.com</li>
                                <li><strong>GitHub:</strong> <a href="https://github.com/aarjona1991" className="text-blue-600 dark:text-blue-400 hover:underline">@aarjona1991</a></li>
                                <li><strong>Portfolio:</strong> <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">aarjona1991.github.io</a></li>
                            </ul>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                This privacy policy is effective as of {new Date().toLocaleDateString('en-US')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PrivacyPolicyEN };
