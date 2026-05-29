// Personal Information Configuration
// Update these values to customize your portfolio

export const personalInfo = {
  // Basic Information
  name: process.env.REACT_APP_NAME || 'Adrian',
  fullName: process.env.REACT_APP_FULL_NAME || 'Adrian Arjona Clavelo',
  title: process.env.REACT_APP_TITLE || 'Frontend Developer',
  subtitle: process.env.REACT_APP_SUBTITLE || 'Creating exceptional digital experiences',
  description: process.env.REACT_APP_DESCRIPTION || 'Frontend Developer specialized in React, TypeScript and modern web technologies. Creating exceptional digital experiences.',
  
  // Contact Information
  email: process.env.REACT_APP_EMAIL || 'aarjona1991@gmail.com',
  phone: process.env.REACT_APP_PHONE || null,
  location: process.env.REACT_APP_LOCATION || 'Montevideo, Uruguay',
  avatarUrl: process.env.REACT_APP_AVATAR_URL || './images/me/portfolio_image_black_white.jpg',
  
  // Social Media Links
  social: {
    github: process.env.REACT_APP_GITHUB_URL || 'https://github.com/aarjona1991',
    linkedin: process.env.REACT_APP_LINKEDIN_URL || 'https://linkedin.com/in/aarjona1991',
    twitter: process.env.REACT_APP_TWITTER_URL || null,
    email: process.env.REACT_APP_EMAIL_URL || 'mailto:aarjona1991@gmail.com'
  },
  
  // Skills Configuration
  skills: {
    frontend: (process.env.REACT_APP_SKILLS_FRONTEND || 'React,TypeScript,Next.js,Vue.js,JavaScript').split(','),
    styling: (process.env.REACT_APP_SKILLS_STYLING || 'CSS3,Tailwind CSS,SASS/SCSS,Figma,Adobe XD').split(','),
    tools: (process.env.REACT_APP_SKILLS_TOOLS || 'Git,Webpack,Vite,Jest,Cypress,Docker').split(','),
    backend: (process.env.REACT_APP_SKILLS_BACKEND || 'PostgreSQL,Firebase').split(','),
    soft: (process.env.REACT_APP_SOFT_SKILLS || 'Communication,Teamwork,Problem Solving,Adaptability,Creativity,Leadership').split(',')
  },
  
  // Experience Data
  experience: [
    {
      year: process.env.REACT_APP_EXPERIENCE_1_YEAR || '2024',
      title: process.env.REACT_APP_EXPERIENCE_1_TITLE || 'Frontend Web Developer',
      company: process.env.REACT_APP_EXPERIENCE_1_COMPANY || 'Tata Consultancy Services',
      description: process.env.REACT_APP_EXPERIENCE_1_DESCRIPTION || 'Building and maintaining modern, responsive web interfaces for enterprise clients as part of global engineering teams.',
      technologies: (process.env.REACT_APP_EXPERIENCE_1_TECH || 'React,JavaScript,HTML5,CSS3').split(',')
    },
    {
      year: process.env.REACT_APP_EXPERIENCE_2_YEAR || '2022',
      title: process.env.REACT_APP_EXPERIENCE_2_TITLE || 'Frontend Developer',
      company: process.env.REACT_APP_EXPERIENCE_2_COMPANY || 'Apuestes.com',
      description: process.env.REACT_APP_EXPERIENCE_2_DESCRIPTION || 'Developed responsive frontends for a sports betting and tipster platform with real-time predictions and data.',
      technologies: (process.env.REACT_APP_EXPERIENCE_2_TECH || 'React,JavaScript,Responsive Design').split(',')
    },
    {
      year: process.env.REACT_APP_EXPERIENCE_3_YEAR || '2018',
      title: process.env.REACT_APP_EXPERIENCE_3_TITLE || 'Frontend Developer',
      company: process.env.REACT_APP_EXPERIENCE_3_COMPANY || 'Sitios Agencia Digital',
      description: process.env.REACT_APP_EXPERIENCE_3_DESCRIPTION || 'Built custom, responsive websites for clients at a Montevideo-based web design agency.',
      technologies: (process.env.REACT_APP_EXPERIENCE_3_TECH || 'JavaScript,CSS3,Responsive Design').split(',')
    }
  ],
  
  // Projects Configuration
  projects: [
    {
      id: 1,
      title: process.env.REACT_APP_PROJECT_1_TITLE || 'Casa Trinidad Viva',
      description: process.env.REACT_APP_PROJECT_1_DESCRIPTION || 'Live booking website for a guesthouse in the colonial center of Trinidad, Cuba. Single-page experience with room showcase, local experiences, online reservation flow and strong SEO (structured data, Open Graph, multilingual metadata).',
      technologies: (process.env.REACT_APP_PROJECT_1_TECH || 'React,Vite,Tailwind CSS,SEO').split(','),
      category: process.env.REACT_APP_PROJECT_1_CATEGORY || 'web',
      featured: process.env.REACT_APP_PROJECT_1_FEATURED !== 'false',
      image: process.env.REACT_APP_PROJECT_1_IMAGE || 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&h=300&fit=crop&q=85',
      demoUrl: process.env.REACT_APP_PROJECT_1_DEMO || 'https://casapatriciacubastay.com/',
      githubUrl: process.env.REACT_APP_PROJECT_1_GITHUB || ''
    }
  ],
  
  // Statistics
  stats: {
    projects: process.env.REACT_APP_STATS_PROJECTS || '50+',
    experience: process.env.REACT_APP_STATS_EXPERIENCE || '4+',
    satisfaction: process.env.REACT_APP_STATS_SATISFACTION || '100%',
    availability: process.env.REACT_APP_STATS_AVAILABILITY || '24/7'
  },
  
  // Certifications
  certifications: (process.env.REACT_APP_CERTIFICATIONS || 'JavaScript Front-End (Talently),JavaScript Back-End (Talently),React JS (Talently),Vue JS (Talently),PHP (Talently),Braze Certified Practitioner').split(','),
  
  // Default Language
  defaultLanguage: process.env.REACT_APP_DEFAULT_LANGUAGE || 'en'
};
