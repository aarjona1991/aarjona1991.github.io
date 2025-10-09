import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { personalInfo } from '../../../../config/personalInfo';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('about');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const experiences = personalInfo.experience.map((exp: any) => ({
        year: exp.year,
        title: exp.title,
        company: exp.company,
        description: exp.description,
        technologies: exp.technologies
    }));

    const stats = [
        { number: personalInfo.stats.projects, label: t('about.stats.projects') },
        { number: personalInfo.stats.experience, label: t('about.stats.experience') },
        { number: personalInfo.stats.satisfaction, label: t('about.stats.satisfaction') },
        { number: personalInfo.stats.availability, label: t('about.stats.availability') }
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('about.title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('about.titleHighlight')}</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {t('about.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Personal Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {t('about.storyTitle')}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                    {t('about.storyText1')}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {t('about.storyText2')}
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div 
                                        key={index}
                                        className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Preview */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('about.mainTechnologies')}
                            </h3>
                            
                            <div className="space-y-4">
                                {[
                                    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
                                    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
                                    { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
                                    { name: 'Tailwind CSS', level: 95, color: 'from-cyan-400 to-blue-500' },
                                    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
                                    { name: 'Node.js', level: 75, color: 'from-green-500 to-green-700' }
                                ].map((skill, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {skill.name}
                                            </span>
                                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div 
                                                className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 delay-${index * 200}`}
                                                style={{ 
                                                    width: isVisible ? `${skill.level}%` : '0%' 
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                            {t('about.experienceTitle')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('about.experienceTitleHighlight')}</span>
                        </h3>
                        
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                            
                            <div className="space-y-12">
                                {experiences.map((exp: any, index: number) => (
                                    <div 
                                        key={index}
                                        className={`relative flex items-center ${
                                            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                                        
                                        {/* Content */}
                                        <div className={`ml-12 md:ml-0 md:w-1/2 ${
                                            index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                                        }`}>
                                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                                                        {exp.year}
                                                    </span>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                        {exp.company}
                                                    </span>
                                                </div>
                                                
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                                    {exp.title}
                                                </h4>
                                                
                                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                    {exp.description}
                                                </p>
                                                
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech: string, techIndex: number) => (
                                                        <span 
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { About };
