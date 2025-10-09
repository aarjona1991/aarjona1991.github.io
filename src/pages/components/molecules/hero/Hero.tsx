import React, { useEffect, useState } from 'react';
import { Avatar } from '../../atoms';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { personalInfo } from '../../../../config/personalInfo';

const Hero = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const texts = t('hero.professions');

    useEffect(() => {
        setIsVisible(true);
        
        const typeWriter = () => {
            if (currentIndex < texts.length) {
                const currentTextToType = texts[currentIndex];
                if (currentText.length < currentTextToType.length) {
                    setCurrentText(currentTextToType.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => {
                        setCurrentText('');
                        setCurrentIndex((prev) => (prev + 1) % texts.length);
                    }, 2000);
                }
            }
        };

        const timer = setTimeout(typeWriter, 100);
        return () => clearTimeout(timer);
    }, [currentText, currentIndex, texts]);

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
            itemScope 
            itemType="https://schema.org/Person"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <header className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                <span className="block text-gray-900 dark:text-white">{t('hero.greeting')}</span>
                                <span 
                                    className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                                    itemProp="name"
                                >
                                    {personalInfo.fullName}
                                </span>
                            </h1>
                            
                            <div className="h-16 flex items-center">
                                <span 
                                    className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300"
                                    itemProp="jobTitle"
                                    aria-label="Professional title"
                                >
                                    {currentText}
                                    <span className="animate-pulse text-blue-500" aria-hidden="true">|</span>
                                </span>
                            </div>
                        </div>

                        <p 
                            className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
                            itemProp="description"
                        >
                            {personalInfo.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToContact}
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                            >
                                <span className="relative z-10">{t('hero.contactButton')}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            
                            <button
                                onClick={scrollToProjects}
                                className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:scale-105 hover:shadow-lg"
                            >
                                {t('hero.projectsButton')}
                                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                        {/* Social Links */}
                        <nav className="flex space-x-6" aria-label="Social media links">
                            {personalInfo.social.github && (
                                <a 
                                    href={personalInfo.social.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                                    aria-label="Visit GitHub profile"
                                    itemProp="sameAs"
                                >
                                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            )}
                            
                            {personalInfo.social.linkedin && (
                                <a 
                                    href={personalInfo.social.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                                    aria-label="Visit LinkedIn profile"
                                    itemProp="sameAs"
                                >
                                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            )}
                            
                            {personalInfo.social.email && (
                                <a 
                                    href={personalInfo.social.email} 
                                    className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                                    aria-label="Send email"
                                    itemProp="email"
                                >
                                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            )}
                        </nav>
                    </header>

                    {/* Avatar Section */}
                    <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-1000" aria-hidden="true"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-2000" aria-hidden="true"></div>
                            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-3000" aria-hidden="true"></div>
                            
                            {/* Main Avatar */}
                            <div className="relative z-10">
                                <Avatar
                                    classnames="w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-gray-800 hover:scale-105 transition-transform duration-500"
                                    url={personalInfo.avatarUrl}
                                    alt={`${personalInfo.name} - Frontend Developer`}
                                />
                            </div>
                            
                            {/* Decorative Ring */}
                            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin" style={{animationDuration: '10s'}} aria-hidden="true"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export { Hero };
