import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { personalInfo } from '../../../../config/personalInfo';

const Skills = () => {
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

        const element = document.getElementById('skills');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const skillCategories = [
        {
            title: t('skills.categories.frontend.title'),
            icon: '💻',
            skills: personalInfo.skills.frontend.map((skill: string, index: number) => ({
                name: skill,
                level: 95 - (index * 5),
                color: ['from-blue-400 to-cyan-400', 'from-blue-500 to-blue-700', 'from-gray-600 to-gray-800', 'from-green-400 to-green-600', 'from-red-400 to-red-600', 'from-yellow-400 to-orange-500'][index] || 'from-gray-400 to-gray-600'
            }))
        },
        {
            title: t('skills.categories.styling.title'),
            icon: '🎨',
            skills: personalInfo.skills.styling.map((skill: string, index: number) => ({
                name: skill,
                level: 95 - (index * 5),
                color: ['from-blue-400 to-blue-600', 'from-cyan-400 to-blue-500', 'from-pink-400 to-pink-600', 'from-purple-400 to-purple-600', 'from-purple-500 to-pink-500', 'from-pink-500 to-purple-500'][index] || 'from-gray-400 to-gray-600'
            }))
        },
        {
            title: t('skills.categories.tools.title'),
            icon: '🛠️',
            skills: personalInfo.skills.tools.map((skill: string, index: number) => ({
                name: skill,
                level: 90 - (index * 5),
                color: ['from-orange-400 to-red-500', 'from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-red-400 to-orange-500', 'from-green-400 to-green-600', 'from-blue-500 to-blue-700'][index] || 'from-gray-400 to-gray-600'
            }))
        },
        {
            title: t('skills.categories.backend.title'),
            icon: '⚙️',
            skills: personalInfo.skills.backend.map((skill: string, index: number) => ({
                name: skill,
                level: 80 - (index * 5),
                color: ['from-green-500 to-green-700', 'from-gray-500 to-gray-700', 'from-green-400 to-green-600', 'from-blue-500 to-blue-700', 'from-yellow-400 to-orange-500', 'from-pink-500 to-purple-500'][index] || 'from-gray-400 to-gray-600'
            }))
        }
    ];

    const softSkills = personalInfo.skills.soft.map((skill: string, index: number) => ({
        name: skill,
        level: 95 - (index * 3)
    }));

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('skills.title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('skills.titleHighlight')}</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {t('skills.subtitle')}
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {skillCategories.map((category, categoryIndex) => (
                            <div 
                                key={categoryIndex}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-center mb-6">
                                    <span className="text-3xl mr-4">{category.icon}</span>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                
                                <div className="space-y-4">
                                    {category.skills.map((skill: any, skillIndex: number) => (
                                        <div key={skillIndex} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                    {skill.name}
                                                </span>
                                                <span className="text-gray-500 dark:text-gray-400 text-sm">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                                <div 
                                                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                                    style={{ 
                                                        width: isVisible ? `${skill.level}%` : '0%',
                                                        transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Soft Skills */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                {t('skills.softSkills.title')} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t('skills.softSkills.titleHighlight')}</span>
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('skills.softSkills.subtitle')}
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {softSkills.map((skill: any, index: number) => (
                                <div 
                                    key={index}
                                    className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:scale-105 transition-all duration-300"
                                >
                                    <div className="relative w-24 h-24 mx-auto mb-4">
                                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="none"
                                                className="text-gray-200 dark:text-gray-600"
                                            />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="none"
                                                strokeDasharray={`${2 * Math.PI * 40}`}
                                                strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                                                className="text-purple-500 transition-all duration-1000 ease-out"
                                                style={{
                                                    strokeDashoffset: isVisible ? `${2 * Math.PI * 40 * (1 - skill.level / 100)}` : `${2 * Math.PI * 40}`,
                                                    transitionDelay: `${index * 200}ms`
                                                }}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {skill.name}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                            {t('skills.certifications.title')}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {personalInfo.certifications.map((cert: string, index: number) => (
                                <div 
                                    key={index}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300"
                                >
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Skills };
