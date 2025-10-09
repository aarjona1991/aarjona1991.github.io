# 🎨 Portfolio Personalization Guide

This guide will help you customize your portfolio with your own information, projects, and styling.

## 📝 Quick Setup

### 1. Environment Variables

Create a `.env` file in the root directory with your personal information:

```bash
# Copy the example file
cp .env.example .env

# Edit with your information
nano .env
```

### 2. Basic Personal Information

```env
# Personal Information
REACT_APP_NAME=your-username
REACT_APP_FULL_NAME=Your Full Name
REACT_APP_TITLE=Your Professional Title
REACT_APP_SUBTITLE=Your professional subtitle
REACT_APP_DESCRIPTION=Your professional description
REACT_APP_EMAIL=your.email@example.com
REACT_APP_PHONE=+1 (555) 123-4567
REACT_APP_LOCATION=Your City, Country
REACT_APP_AVATAR_URL=./images/me/your-avatar.jpg
```

### 3. Social Media Links

```env
# Social Media Links
REACT_APP_GITHUB_URL=https://github.com/yourusername
REACT_APP_LINKEDIN_URL=https://linkedin.com/in/yourusername
REACT_APP_TWITTER_URL=https://twitter.com/yourusername
REACT_APP_EMAIL_URL=mailto:your.email@example.com
```

### 4. Skills Configuration

```env
# Skills (comma-separated)
REACT_APP_SKILLS_FRONTEND=React,TypeScript,Next.js,Vue.js,Angular,JavaScript
REACT_APP_SKILLS_STYLING=CSS3,Tailwind CSS,SASS/SCSS,Styled Components,Figma,Adobe XD
REACT_APP_SKILLS_TOOLS=Git,Webpack,Vite,Jest,Cypress,Docker
REACT_APP_SKILLS_BACKEND=Node.js,Express.js,MongoDB,PostgreSQL,Firebase,GraphQL
REACT_APP_SOFT_SKILLS=Communication,Teamwork,Problem Solving,Adaptability,Creativity,Leadership
```

### 5. Experience Data

```env
# Experience (up to 3 experiences)
REACT_APP_EXPERIENCE_1_YEAR=2024
REACT_APP_EXPERIENCE_1_TITLE=Your Current Position
REACT_APP_EXPERIENCE_1_COMPANY=Your Company
REACT_APP_EXPERIENCE_1_DESCRIPTION=Description of your current role
REACT_APP_EXPERIENCE_1_TECH=React,TypeScript,Next.js,Tailwind CSS

REACT_APP_EXPERIENCE_2_YEAR=2022
REACT_APP_EXPERIENCE_2_TITLE=Previous Position
REACT_APP_EXPERIENCE_2_COMPANY=Previous Company
REACT_APP_EXPERIENCE_2_DESCRIPTION=Description of your previous role
REACT_APP_EXPERIENCE_2_TECH=React,JavaScript,SASS,Webpack

REACT_APP_EXPERIENCE_3_YEAR=2020
REACT_APP_EXPERIENCE_3_TITLE=First Position
REACT_APP_EXPERIENCE_3_COMPANY=First Company
REACT_APP_EXPERIENCE_3_DESCRIPTION=Description of your first role
REACT_APP_EXPERIENCE_3_TECH=HTML5,CSS3,JavaScript,jQuery
```

### 6. Projects Configuration

```env
# Projects (up to 6 projects)
REACT_APP_PROJECT_1_TITLE=Project 1 Title
REACT_APP_PROJECT_1_DESCRIPTION=Project 1 description
REACT_APP_PROJECT_1_TECH=React,TypeScript,Node.js,MongoDB,Stripe
REACT_APP_PROJECT_1_CATEGORY=web
REACT_APP_PROJECT_1_FEATURED=true
REACT_APP_PROJECT_1_IMAGE=https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop
REACT_APP_PROJECT_1_DEMO=https://your-project-demo.com
REACT_APP_PROJECT_1_GITHUB=https://github.com/yourusername/project1

# Add more projects as needed (PROJECT_2, PROJECT_3, etc.)
```

### 7. Statistics and Certifications

```env
# Statistics
REACT_APP_STATS_PROJECTS=50+
REACT_APP_STATS_EXPERIENCE=3+
REACT_APP_STATS_SATISFACTION=100%
REACT_APP_STATS_AVAILABILITY=24/7

# Certifications (comma-separated)
REACT_APP_CERTIFICATIONS=React Developer Certification,TypeScript Fundamentals,AWS Cloud Practitioner,Google UX Design Certificate

# Default Language (en or es)
REACT_APP_DEFAULT_LANGUAGE=en
```

## 🎨 Customization Options

### Images

1. **Avatar**: Replace `./images/me/your-avatar.jpg` with your profile picture
2. **Project Images**: Use high-quality images (500x300px recommended)
   - Unsplash: `https://images.unsplash.com/photo-XXXXX?w=500&h=300&fit=crop`
   - Your own images: Place in `public/images/projects/`

### Colors and Styling

The portfolio uses Tailwind CSS with a predefined color scheme. To customize:

1. Edit `tailwind.config.js` to change the color palette
2. Modify `src/index.css` for custom styles
3. Update component classes for different layouts

### Content

1. **Translations**: Edit `src/locales/es.json` and `src/locales/en.json`
2. **Sections**: Add/remove sections in `src/pages/Home.tsx`
3. **Components**: Customize individual components in `src/pages/components/`

## 🚀 Deployment

### GitHub Pages

1. Push your changes to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to `gh-pages` branch or `main` branch
4. Your portfolio will be available at `https://yourusername.github.io`

### Other Platforms

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop your `build` folder
- **Firebase Hosting**: Use Firebase CLI

## 📱 Features

- ✅ Responsive design
- ✅ Dark/Light theme
- ✅ Multilanguage support (ES/EN)
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Contact form
- ✅ Project showcase
- ✅ Skills visualization
- ✅ Experience timeline

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Watch Tailwind CSS
npm run watch
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Support

If you have any questions or need help customizing your portfolio, please open an issue or contact me directly.

---

**Happy coding! 🚀**
