import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { personalInfo } from '../../../../config/personalInfo';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
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

        const element = document.getElementById('projects');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const projects = personalInfo.projects.map((project: any) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        image: project.image,
        technologies: project.technologies,
        category: project.category,
        liveUrl: project.demoUrl,
        githubUrl: project.githubUrl,
        featured: project.featured
    }));

    const filters = [
        { id: 'all', label: t('projects.filters.all') },
        { id: 'web', label: t('projects.filters.web') },
        { id: 'mobile', label: t('projects.filters.mobile') },
        { id: 'ai', label: t('projects.filters.ai') }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter((project: any) => project.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('projects.title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('projects.titleHighlight')}</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                            {t('projects.subtitle')}
                        </p>
                        
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        activeFilter === filter.id
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project: any, index: number) => (
                            <div 
                                key={project.id}
                                className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                                    project.featured ? 'lg:col-span-2' : ''
                                }`}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 lg:h-64 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            ⭐ {t('common.featured')}
                                        </div>
                                    )}
                                    
                                    {/* Action Buttons */}
                                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a 
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                                        >
                                            {t('projects.actions.demo')}
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                                        >
                                            {t('projects.actions.code')}
                                        </a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech: string, techIndex: number) => (
                                            <span 
                                                key={techIndex}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex space-x-4">
                                        <a 
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            {t('projects.actions.demo')}
                                        </a>
                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            {t('projects.actions.code')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            {t('projects.cta.text')}
                        </p>
                        <a 
                            href="#contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
                        >
                            {t('projects.cta.button')}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Projects };
