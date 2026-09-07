# Anuj Ghosh - Portfolio Website

A premium, highly animated personal developer portfolio website featuring a cinematic dark theme, smooth scroll animations, and a professional ATS-friendly resume page. Built with modern web technologies including Next.js 16.3.4, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Overview

This portfolio showcases my work as a Software Development Engineer and Full-Stack Developer with expertise in Python, React.js, Node.js, and secure web application development. The design features a futuristic engineering aesthetic with subtle grid effects, blue/purple accent lighting, glassmorphism, and professional animations that create an immersive user experience.

### Key Highlights

- **Premium Visual Design**: Dark navy/black background with subtle grid and glow effects
- **Professional Resume**: ATS-friendly, A4-sized resume with print support
- **Smooth Animations**: GPU-accelerated scroll-triggered animations using Framer Motion
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper metadata, Open Graph tags, and semantic HTML structure
- **Accessible**: ARIA labels, keyboard navigation, and reduced motion support
- **Performance**: Optimized rendering with Turbopack and lazy loading

## ✨ Features

### Core Features

- **Hero Section**: Animated text with rotating titles, terminal-style code display, and call-to-action buttons
- **About Section**: Developer profile card with skills overview and personal introduction
- **Experience Timeline**: Interactive timeline showing professional history with company details and responsibilities
- **Projects Showcase**: Grid of projects with modal details, technology tags, and links to GitHub/live demos
- **Skills Visualization**: Categorized skills with animated technology nodes and progress indicators
- **Cybersecurity Section**: Security-focused content highlighting network security, vulnerability assessment, and penetration testing concepts
- **Education Timeline**: Academic background with institution details and periods
- **Certifications**: Professional certifications with issuing organizations and skills
- **GitHub Integration**: Direct links to GitHub profile and repositories
- **Contact Section**: Contact information with social media links
- **Resume Page**: Dedicated `/resume` route with A4-sized, ATS-friendly resume view and print support

### Design Features

- **Dark Theme**: Cinematic, futuristic engineering aesthetic with navy/black gradients
- **Glassmorphism**: Subtle glass effects on cards and navigation
- **Background Effects**: Animated grid patterns, glow effects, and particle systems
- **Typography**: Modern sans-serif fonts with strong hierarchy
- **Color Palette**: Dark backgrounds with blue/purple accents (#3b82f6 primary)
- **Smooth Transitions**: Hover effects, scroll animations, and page transitions
- **Responsive Layout**: Mobile-first design with breakpoints for all screen sizes

### Technical Features

- **TypeScript**: Full type safety across the application
- **Component Architecture**: Modular, reusable components with clear separation of concerns
- **Data-Driven**: Content managed through centralized TypeScript data files
- **State Management**: React hooks for local state and interactivity
- **Animation Library**: Framer Motion for complex animations and gestures
- **CSS Framework**: Tailwind CSS for utility-first styling
- **Build System**: Next.js with Turbopack for fast development builds
- **Static Generation**: Optimized for static site deployment

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx              # Root layout with metadata and fonts
│   ├── page.tsx                # Main portfolio page component
│   ├── globals.css             # Global styles and Tailwind directives
│   ├── resume/
│   │   ├── layout.tsx          # Resume page metadata
│   │   └── page.tsx            # Resume page with A4 document and print support
│   └── favicon.ico             # Site favicon
├── components/
│   ├── About.tsx               # About section with profile card
│   ├── AnimatedText.tsx        # Animated text with typing effect
│   ├── BackgroundEffects.tsx   # Animated grid and glow effects
│   ├── Button.tsx              # Reusable button component with variants
│   ├── Card.tsx                # Reusable card component
│   ├── Certifications.tsx      # Certifications section
│   ├── Contact.tsx             # Contact section with social links
│   ├── Cybersecurity.tsx       # Cybersecurity skills section
│   ├── Education.tsx            # Education timeline
│   ├── Experience.tsx          # Experience timeline with details
│   ├── Footer.tsx              # Footer with social links and copyright
│   ├── GitHubSection.tsx       # GitHub profile integration
│   ├── Hero.tsx                # Hero section with animated content
│   ├── Navbar.tsx              # Navigation bar with scroll effects
│   ├── ProjectModal.tsx         # Modal for project details
│   ├── Projects.tsx            # Projects grid with filtering
│   ├── ResumeDocument.tsx      # Web-viewable resume component
│   ├── ResumePDF.tsx           # PDF generation component (@react-pdf/renderer)
│   ├── SectionHeading.tsx      # Reusable section heading component
│   └── Skills.tsx              # Skills visualization
├── lib/
│   └── data/
│       ├── certifications.ts   # Certification data structure
│       ├── cybersecurity.ts    # Cybersecurity skills data
│       ├── education.ts        # Education data structure
│       ├── experience.ts       # Work experience data
│       ├── personal.ts         # Personal information and contact details
│       ├── projects.ts         # Project data with features and tech stack
│       └── skills.ts           # Skills categorized by domain
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   └── vercel.svg
├── .gitignore                  # Git ignore rules
├── AGENTS.md                   # Agent-specific instructions
├── CLAUDE.md                   # Claude AI instructions
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── postcss.config.mjs          # PostCSS configuration for Tailwind
├── README.md                   # This file
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **Package Manager**: npm, yarn, pnpm, or bun
- **Git**: For version control (optional but recommended)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/anujghosh1220/Portfolio.git
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
```

Or using other package managers:

```bash
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server**

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## 🎨 Customization Guide

### Personal Information

Edit `lib/data/personal.ts` to update your personal details:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  tagline: "Your professional tagline",
  rotatingTitles: [
    "Title 1",
    "Title 2",
    "Title 3"
  ],
  location: "Your Location",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  focus: "Your primary focus",
  currentRole: "Your current role",
  primaryLanguages: "Your primary languages",
  interests: [
    "Interest 1",
    "Interest 2"
  ]
};
```

### Projects

Edit `lib/data/projects.ts` to add or modify projects:

```typescript
export const projects: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Short description",
    longDescription: "Detailed project description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    features: [
      "Feature 1",
      "Feature 2"
    ],
    engineering: [
      "Engineering detail 1",
      "Engineering detail 2"
    ],
    github: "https://github.com/username/repo",
    liveDemo: "https://demo-url.com"
  }
];
```

### Skills

Edit `lib/data/skills.ts` to update skill categories:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    category: "Category Name",
    skills: ["Skill1", "Skill2", "Skill3"]
  }
];
```

### Experience

Edit `lib/data/experience.ts` to update work history:

```typescript
export const experiences: Experience[] = [
  {
    id: "experience-id",
    title: "Job Title",
    company: "Company Name",
    location: "Location",
    period: "Start Date – End Date",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2"
    ],
    technologies: ["Tech1", "Tech2"]
  }
];
```

### Education

Edit `lib/data/education.ts` to update academic background:

```typescript
export const education: Education[] = [
  {
    id: "education-id",
    degree: "Degree Name",
    institution: "Institution Name",
    period: "Start Date – End Date"
  }
];
```

### Certifications

Edit `lib/data/certifications.ts` to update certifications:

```typescript
export const certifications: Certification[] = [
  {
    id: "cert-id",
    title: "Certification Title",
    issuer: "Issuing Organization",
    skills: ["Skill1", "Skill2"]
  }
];
```

### Resume Customization

The resume page (`/resume`) uses data from the same data files. To customize the resume:

1. Update the relevant data files (personal, experience, skills, education, certifications, projects)
2. The resume automatically reflects changes
3. For visual customization, edit:
   - `components/ResumeDocument.tsx` - Web-viewable resume styling
   - `components/ResumePDF.tsx` - PDF generation styling

### Theme Customization

To modify colors and styling:

1. **Tailwind Configuration**: The project uses Tailwind CSS v4 with the PostCSS plugin
2. **Custom Colors**: Edit component styles directly or extend Tailwind theme in `app/globals.css`
3. **Animation Timing**: Adjust Framer Motion transition durations in individual components

## 🏗️ Architecture

### Component Architecture

The application follows a modular component architecture:

- **Layout Components**: Root layout, page layouts
- **Section Components**: Major page sections (Hero, About, Experience, etc.)
- **UI Components**: Reusable components (Button, Card, SectionHeading)
- **Feature Components**: Specialized components (ProjectModal, AnimatedText, BackgroundEffects)

### Data Flow

- **Centralized Data**: All content data stored in `lib/data/` directory
- **Type Safety**: TypeScript interfaces define data structures
- **Component Props**: Data passed through props with type checking
- **No External API**: All data is static, no database required

### Animation Strategy

- **Framer Motion**: Primary animation library
- **Scroll Animations**: `whileInView` and `viewport` props for scroll-triggered effects
- **Hover Effects**: CSS transitions and Framer Motion hover states
- **Performance**: GPU-accelerated animations with `transform` and `opacity`
- **Reduced Motion**: Respects `prefers-reduced-motion` media query

### Resume Page Architecture

The resume page has a dual-rendering approach:

1. **Web View**: `ResumeDocument.tsx` - HTML/CSS version for browser viewing
2. **PDF Generation**: `ResumePDF.tsx` - React-PDF version for downloadable PDFs
3. **Shared Data**: Both components use the same data files
4. **Print Support**: CSS `@media print` rules for clean A4 output

## 🛠️ Technologies Used

### Core Framework

- **Next.js 16.3.4**: React framework with App Router and Turbopack
- **React 19.2.8**: UI library
- **TypeScript 5**: Type-safe JavaScript

### Styling & UI

- **Tailwind CSS 4**: Utility-first CSS framework
- **Tailwind PostCSS Plugin**: PostCSS integration for Tailwind v4
- **Framer Motion 13.2.0**: Animation library for React
- **react-icons 5.7.0**: Icon library (Font Awesome, GitHub, LinkedIn, etc.)

### PDF Generation

- **@react-pdf/renderer**: PDF generation library for React

### Development Tools

- **ESLint 9**: Code linting and formatting
- **ESLint Config Next**: Next.js ESLint configuration
- **TypeScript Compiler**: Type checking and compilation

### Build System

- **Turbopack**: Next.js bundler for fast development builds
- **PostCSS**: CSS processing for Tailwind

## 📊 Performance Optimization

### Implemented Optimizations

- **Static Generation**: Pages pre-rendered at build time
- **Code Splitting**: Automatic code splitting by Next.js
- **Image Optimization**: Next.js Image component (when images are added)
- **Font Optimization**: `next/font` for optimized font loading
- **Tree Shaking**: Unused code eliminated during build
- **GPU Acceleration**: Animations use `transform` and `opacity` for GPU rendering
- **Lazy Loading**: Components load as needed
- **Minification**: CSS and JavaScript minified in production

### Performance Metrics

- **Lighthouse Score**: Optimized for 90+ across all categories
- **First Contentful Paint**: Fast initial render
- **Time to Interactive**: Optimized JavaScript bundle
- **Cumulative Layout Shift**: Minimal layout shifts due to proper sizing

## ♿ Accessibility

### Implemented Accessibility Features

- **Semantic HTML**: Proper use of semantic elements (header, nav, main, section, footer)
- **ARIA Labels**: Descriptive labels for interactive elements
- **Keyboard Navigation**: Full keyboard support for navigation and interactions
- **Focus Indicators**: Visible focus states for keyboard users
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Screen Reader**: Proper heading hierarchy and descriptive text
- **Alt Text**: Alternative text for images (when added)

### Accessibility Testing

Recommended tools for accessibility testing:
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)

## 🌐 Deployment

### Vercel (Recommended)

Vercel provides the best deployment experience for Next.js applications:

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Deploy with default settings

3. **Custom Domain** (Optional)

- Add custom domain in Vercel dashboard
- Configure DNS records

### Other Platforms

The application can be deployed to any platform supporting Next.js:

#### Netlify

```bash
npm run build
# Deploy the .next folder to Netlify
```

#### Railway

```bash
railway up
```

#### Render

- Connect GitHub repository
- Configure build command: `npm run build`
- Set start command: `npm run start`

#### AWS Amplify

- Connect GitHub repository
- Configure build settings
- Deploy with Amplify console

### Environment Variables

No environment variables are required for this project. All configuration is done through code and data files.

## 🧪 Testing

### Manual Testing Checklist

- [ ] All sections render correctly
- [ ] Animations play smoothly
- [ ] Responsive design works on all breakpoints
- [ ] Navigation links work correctly
- [ ] Project modals open and close properly
- [ ] Contact links are functional
- [ ] Resume page displays correctly
- [ ] Print functionality works
- [ ] Keyboard navigation works
- [ ] Reduced motion is respected

### Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Mobile browsers:
- iOS Safari
- Chrome Mobile
- Samsung Internet

## 🐛 Troubleshooting

### Common Issues

**Issue: Development server won't start**

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

**Issue: Build fails**

```bash
# Check TypeScript errors
npm run lint

# Clear Next.js cache
rm -rf .next
npm run build
```

**Issue: Styles not applying**

```bash
# Rebuild Tailwind CSS
rm -rf .next
npm run dev
```

**Issue: Animations not working**

- Check if Framer Motion is installed
- Verify browser supports CSS transforms
- Check console for JavaScript errors

**Issue: Resume page not displaying correctly**

- Verify data files are properly formatted
- Check browser console for errors
- Ensure ResumeDocument and ResumePDF components are present

## 📝 Development Workflow

### Adding a New Section

1. Create component in `components/`
2. Add data to appropriate file in `lib/data/`
3. Import and use component in `app/page.tsx`
4. Add navigation link in `components/Navbar.tsx`
5. Test responsive behavior

### Modifying Styles

1. Use Tailwind utility classes for most styling
2. Add custom styles in component `<style jsx>` blocks
3. For global styles, edit `app/globals.css`
4. Test on multiple screen sizes

### Adding New Data

1. Create TypeScript interface in appropriate data file
2. Add data following existing patterns
3. Update components that consume the data
4. Type-check with TypeScript compiler

## 🔮 Future Enhancements

Potential improvements for the portfolio:

- [ ] Blog section with markdown support
- [ ] Dark/light theme toggle
- [ ] Internationalization (i18n)
- [ ] Advanced filtering for projects
- [ ] Search functionality
- [ ] Analytics integration
- [ ] Contact form with email sending
- [ ] Testimonials section
- [ ] Speaking engagements
- [ ] Open source contributions visualization
- [ ] PWA support for offline access

## 📄 License

This project is open source and available for personal use. Feel free to fork, modify, and use it for your own portfolio.

## 🤝 Contributing

Contributions are welcome! If you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- **Email**: anujghosh588@gmail.com
- **GitHub**: https://github.com/anujghosh1220
- **LinkedIn**: https://www.linkedin.com/in/anuj-ghosh-416964239

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for the animation library
- react-icons for the icon library
- The open source community

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
