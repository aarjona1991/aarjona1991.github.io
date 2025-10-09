// Personal Information Configuration
// Update these values to customize your portfolio

export const personalInfo = {
  // Basic Information
  name: process.env.REACT_APP_NAME || 'aarjona1991',
  fullName: process.env.REACT_APP_FULL_NAME || 'Aarjona Developer',
  title: process.env.REACT_APP_TITLE || 'Frontend Developer',
  subtitle: process.env.REACT_APP_SUBTITLE || 'Creating exceptional digital experiences',
  description: process.env.REACT_APP_DESCRIPTION || 'Frontend Developer specialized in React, TypeScript and modern web technologies. Creating exceptional digital experiences.',
  
  // Contact Information
  email: process.env.REACT_APP_EMAIL || 'aarjona1991@gmail.com',
  phone: process.env.REACT_APP_PHONE || null,
  location: process.env.REACT_APP_LOCATION || 'Madrid, Spain',
  avatarUrl: process.env.REACT_APP_AVATAR_URL || './images/me/portfolio_image_black_white.jpg',
  
  // Social Media Links
  social: {
    github: process.env.REACT_APP_GITHUB_URL || null,
    linkedin: process.env.REACT_APP_LINKEDIN_URL || null,
    twitter: process.env.REACT_APP_TWITTER_URL || null,
    email: process.env.REACT_APP_EMAIL_URL || null
  },
  
  // Skills Configuration
  skills: {
    frontend: (process.env.REACT_APP_SKILLS_FRONTEND || 'React,TypeScript,Next.js,Vue.js,Angular,JavaScript').split(','),
    styling: (process.env.REACT_APP_SKILLS_STYLING || 'CSS3,Tailwind CSS,SASS/SCSS,Styled Components,Figma,Adobe XD').split(','),
    tools: (process.env.REACT_APP_SKILLS_TOOLS || 'Git,Webpack,Vite,Jest,Cypress,Docker').split(','),
    backend: (process.env.REACT_APP_SKILLS_BACKEND || 'Node.js,Express.js,MongoDB,PostgreSQL,Firebase,GraphQL').split(','),
    soft: (process.env.REACT_APP_SOFT_SKILLS || 'Communication,Teamwork,Problem Solving,Adaptability,Creativity,Leadership').split(',')
  },
  
  // Experience Data
  experience: [
    {
      year: process.env.REACT_APP_EXPERIENCE_1_YEAR || '2024',
      title: process.env.REACT_APP_EXPERIENCE_1_TITLE || 'Senior Frontend Developer',
      company: process.env.REACT_APP_EXPERIENCE_1_COMPANY || 'Tech Solutions',
      description: process.env.REACT_APP_EXPERIENCE_1_DESCRIPTION || 'Leading the development of modern React applications and optimizing user experience.',
      technologies: (process.env.REACT_APP_EXPERIENCE_1_TECH || 'React,TypeScript,Next.js,Tailwind CSS').split(',')
    },
    {
      year: process.env.REACT_APP_EXPERIENCE_2_YEAR || '2022',
      title: process.env.REACT_APP_EXPERIENCE_2_TITLE || 'Frontend Developer',
      company: process.env.REACT_APP_EXPERIENCE_2_COMPANY || 'Digital Agency',
      description: process.env.REACT_APP_EXPERIENCE_2_DESCRIPTION || 'Developing responsive user interfaces and reusable components.',
      technologies: (process.env.REACT_APP_EXPERIENCE_2_TECH || 'React,JavaScript,SASS,Webpack').split(',')
    },
    {
      year: process.env.REACT_APP_EXPERIENCE_3_YEAR || '2020',
      title: process.env.REACT_APP_EXPERIENCE_3_TITLE || 'Junior Developer',
      company: process.env.REACT_APP_EXPERIENCE_3_COMPANY || 'Startup Inc',
      description: process.env.REACT_APP_EXPERIENCE_3_DESCRIPTION || 'Starting my career in frontend development with HTML, CSS and vanilla JavaScript.',
      technologies: (process.env.REACT_APP_EXPERIENCE_3_TECH || 'HTML5,CSS3,JavaScript,jQuery').split(',')
    }
  ],
  
  // Projects Configuration
  projects: [
    {
      id: 1,
      title: process.env.REACT_APP_PROJECT_1_TITLE || 'E-Commerce Platform',
      description: process.env.REACT_APP_PROJECT_1_DESCRIPTION || 'Complete e-commerce platform built with React, TypeScript and Node.js. Includes shopping cart, payments, user management and admin panel.',
      technologies: (process.env.REACT_APP_PROJECT_1_TECH || 'React,TypeScript,Node.js,MongoDB,Stripe').split(','),
      category: process.env.REACT_APP_PROJECT_1_CATEGORY || 'web',
      featured: process.env.REACT_APP_PROJECT_1_FEATURED === 'true',
      image: process.env.REACT_APP_PROJECT_1_IMAGE || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      demoUrl: process.env.REACT_APP_PROJECT_1_DEMO || 'https://example.com',
      githubUrl: process.env.REACT_APP_PROJECT_1_GITHUB || 'https://github.com/aarjona1991/ecommerce'
    },
    {
      id: 2,
      title: process.env.REACT_APP_PROJECT_2_TITLE || 'Task Management App',
      description: process.env.REACT_APP_PROJECT_2_DESCRIPTION || 'Task management application with drag & drop, real-time collaboration and push notifications. Built with Next.js and Socket.io.',
      technologies: (process.env.REACT_APP_PROJECT_2_TECH || 'Next.js,Socket.io,PostgreSQL,Prisma,Tailwind CSS').split(','),
      category: process.env.REACT_APP_PROJECT_2_CATEGORY || 'web',
      featured: process.env.REACT_APP_PROJECT_2_FEATURED === 'true',
      image: process.env.REACT_APP_PROJECT_2_IMAGE || 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      demoUrl: process.env.REACT_APP_PROJECT_2_DEMO || 'https://example.com',
      githubUrl: process.env.REACT_APP_PROJECT_2_GITHUB || 'https://github.com/aarjona1991/taskapp'
    },
    {
      id: 3,
      title: process.env.REACT_APP_PROJECT_3_TITLE || 'Weather Dashboard',
      description: process.env.REACT_APP_PROJECT_3_DESCRIPTION || 'Interactive weather dashboard with maps, charts and forecasts. Integrates multiple weather APIs and displays real-time data.',
      technologies: (process.env.REACT_APP_PROJECT_3_TECH || 'Vue.js,Chart.js,OpenWeather API,Leaflet,SCSS').split(','),
      category: process.env.REACT_APP_PROJECT_3_CATEGORY || 'web',
      featured: process.env.REACT_APP_PROJECT_3_FEATURED === 'false',
      image: process.env.REACT_APP_PROJECT_3_IMAGE || 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      demoUrl: process.env.REACT_APP_PROJECT_3_DEMO || 'https://example.com',
      githubUrl: process.env.REACT_APP_PROJECT_3_GITHUB || 'https://github.com/aarjona1991/weather'
    },
    {
      id: 4,
      title: process.env.REACT_APP_PROJECT_4_TITLE || 'Portfolio Website',
      description: process.env.REACT_APP_PROJECT_4_DESCRIPTION || 'Personal portfolio website with modern design, smooth animations and SEO optimization. Built with React and deployed on Vercel.',
      technologies: (process.env.REACT_APP_PROJECT_4_TECH || 'React,Framer Motion,Tailwind CSS,Vercel,SEO').split(','),
      category: process.env.REACT_APP_PROJECT_4_CATEGORY || 'web',
      featured: process.env.REACT_APP_PROJECT_4_FEATURED === 'false',
      image: process.env.REACT_APP_PROJECT_4_IMAGE || 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      demoUrl: process.env.REACT_APP_PROJECT_4_DEMO || 'https://example.com',
      githubUrl: process.env.REACT_APP_PROJECT_4_GITHUB || 'https://github.com/aarjona1991/portfolio'
    },
    {
      id: 5,
      title: process.env.REACT_APP_PROJECT_5_TITLE || 'Mobile Banking App',
      description: process.env.REACT_APP_PROJECT_5_DESCRIPTION || 'Mobile banking application with biometric authentication, secure transfers and account management. Developed with React Native.',
      technologies: (process.env.REACT_APP_PROJECT_5_TECH || 'React Native,Redux,Firebase,Biometric Auth,JWT').split(','),
      category: process.env.REACT_APP_PROJECT_5_CATEGORY || 'mobile',
      featured: process.env.REACT_APP_PROJECT_5_FEATURED === 'true',
      image: process.env.REACT_APP_PROJECT_5_IMAGE || 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      demoUrl: process.env.REACT_APP_PROJECT_5_DEMO || 'https://example.com',
      githubUrl: process.env.REACT_APP_PROJECT_5_GITHUB || 'https://github.com/aarjona1991/banking'
    },
    {
      id: 6,
      title: process.env.REACT_APP_PROJECT_6_TITLE || 'AI Chat Assistant',
      description: process.env.REACT_APP_PROJECT_6_DESCRIPTION || 'AI-powered chat assistant that answers questions and helps with tasks. Integrates OpenAI API and natural language processing.',
      technologies: (process.env.REACT_APP_PROJECT_6_TECH || 'React,OpenAI API,Node.js,WebSocket,NLP').split(','),
      category: process.env.REACT_APP_PROJECT_6_CATEGORY || 'ai',
      featured: process.env.REACT_APP_PROJECT_6_FEATURED === 'false',
      image: process.env.REACT_APP_PROJECT_6_IMAGE || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      demoUrl: process.env.REACT_APP_PROJECT_6_DEMO || 'https://example.com',
      githubUrl: process.env.REACT_APP_PROJECT_6_GITHUB || 'https://github.com/aarjona1991/chatbot'
    }
  ],
  
  // Statistics
  stats: {
    projects: process.env.REACT_APP_STATS_PROJECTS || '50+',
    experience: process.env.REACT_APP_STATS_EXPERIENCE || '3+',
    satisfaction: process.env.REACT_APP_STATS_SATISFACTION || '100%',
    availability: process.env.REACT_APP_STATS_AVAILABILITY || '24/7'
  },
  
  // Certifications
  certifications: (process.env.REACT_APP_CERTIFICATIONS || 'React Developer Certification,TypeScript Fundamentals,AWS Cloud Practitioner,Google UX Design Certificate').split(','),
  
  // Default Language
  defaultLanguage: process.env.REACT_APP_DEFAULT_LANGUAGE || 'en'
};
