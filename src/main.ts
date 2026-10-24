import './style.css';

// ═══════════════════════════════════════════════════════════
// BIJIVEMULA SUSMITHA — PORTFOLIO LOGIC
// ═══════════════════════════════════════════════════════════

// ─── DATA ───

interface FullStackSkill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  categoryLabel: string;
  brandColor: string;
  glowColor: string;
  iconSvg: string;
}

const allFullStackSkills: FullStackSkill[] = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    categoryLabel: 'Frontend',
    brandColor: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.6" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/></svg>'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Language',
    brandColor: '#3178C6',
    glowColor: 'rgba(49, 120, 198, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" rx="4" fill="#3178C6"/><path d="M4 8h8M8 8v10M14 14.5c.8.8 2 1.3 3.2 1.3 1.2 0 1.8-.5 1.8-1.2 0-1.8-4.8-1.2-4.8-4.2 0-1.6 1.4-2.8 3.6-2.8 1.2 0 2.2.4 2.9.9l-.7 1.5c-.6-.4-1.3-.7-2.2-.7-1.1 0-1.6.5-1.6 1.1 0 1.7 4.8 1.1 4.8 4.2 0 1.7-1.4 2.9-3.8 2.9-1.4 0-2.6-.5-3.4-1.1l.2-1.9z" fill="#ffffff"/></svg>'
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    categoryLabel: 'Language',
    brandColor: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M7 16.5c.6.9 1.4 1.5 2.6 1.5 1.4 0 2.2-.7 2.2-2.5V8h-2.1v7.4c0 .8-.3 1.2-.9 1.2-.5 0-.8-.3-1.1-.7l-.7.6zm8.2-.2c.8 1 2 1.7 3.6 1.7 1.5 0 2.5-.8 2.5-2 0-1.3-.8-1.8-2.3-2.4l-.8-.3c-1.3-.5-1.8-1-1.8-1.9 0-1 .8-1.8 2.2-1.8 1.1 0 1.9.4 2.5 1.1l.9-1.1c-.8-.9-1.9-1.4-3.4-1.4-2.1 0-3.5 1.2-3.5 3 0 1.3.8 2 2.2 2.5l.8.3c1.4.6 2 1 2 2.1 0 1.1-.9 1.8-2.6 1.8-1.4 0-2.4-.6-3.1-1.6l-.8 1.1z" fill="#000000"/></svg>'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    categoryLabel: 'Markup',
    brandColor: '#E44D26',
    glowColor: 'rgba(228, 77, 38, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 2l1.6 18.5L12 23l7.4-2.5L21 2H3z" fill="#E44D26"/><path d="M12 3.8v17.4l6-2 1.4-15.4H12z" fill="#F16529"/><path d="M12 7.7H7.4l.3 3.3H12v-3.3zm0 6.6H9.7l-.2-2.2H7.3l.4 5.2 4.3 1.2v-4.2zM12 7.7v3.3h4.3l-.4 4.5-3.9 1.1v4.2l6-1.7.7-8h-6.7z" fill="#ffffff"/></svg>'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    categoryLabel: 'Styling',
    brandColor: '#1572B6',
    glowColor: 'rgba(21, 114, 182, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 2l1.6 18.5L12 23l7.4-2.5L21 2H3z" fill="#1572B6"/><path d="M12 3.8v17.4l6-2 1.4-15.4H12z" fill="#33A9DC"/><path d="M12 7.7H7.4l.3 3.3H12v-3.3zm0 6.6H9.7l-.2-2.2H7.3l.4 5.2 4.3 1.2v-4.2zM12 7.7v3.3h4.3l-.4 4.5-3.9 1.1v4.2l6-1.7.7-8h-6.7z" fill="#ffffff"/></svg>'
  },
  {
    name: 'Responsive Design',
    category: 'frontend',
    categoryLabel: 'UI/UX',
    brandColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  },
  // Backend
  {
    name: 'Java',
    category: 'backend',
    categoryLabel: 'Backend',
    brandColor: '#ED8B00',
    glowColor: 'rgba(237, 139, 0, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M8.8 19.5c2.7.2 5.5.2 8.1-.5.7-.2 1.3-.4 1.5-.6.3-.3.2-.6-.2-.8-.8-.4-2-.6-3.2-.7-3.4-.3-6.9.1-10.1 1.2-.6.2-.9.5-.7.8.2.3.9.5 1.9.6.9.1 1.8 0 2.7 0zm8.9-2.3c.7-.4 1.3-.8 1.4-1.2.2-.6-.5-1.1-1.6-1.4-2.2-.5-4.8-.5-7.3-.2-2.1.2-4.1.7-5.9 1.5-.7.3-1 .6-.9 1 .2.4.9.7 1.8.8 3.8.3 7.8-.1 12.5-.5zM12.4 2c-.6 1.8.4 3.5 1.5 4.8 1.1 1.3 2.1 2.8 1.8 4.6-.3 1.5-1.4 2.6-2.5 3.5-.4.3-.8.7-1.1 1.1-.3.5-.3 1.1 0 1.6.4.6 1.1.9 1.8 1 .8.1 1.6 0 2.3-.2.4-.1.8-.3 1-.6.3-.4.2-.9-.1-1.3-.6-.8-1.5-1.4-2.1-2.2-.9-1.2-1.2-2.6-.7-4.1.6-1.8 2-3.2 2-5.1 0-1.2-.5-2.2-1.3-3.1-.2-.2-.4-.4-.6-.6-.1-.1-.3-.2-.5 0-.2.2-.1.5 0 .6z" fill="#ED8B00"/><path d="M10.2 6.5c-.3 1.2.2 2.4 1 3.3.8.9 1.5 1.9 1.3 3.1-.2 1-1 1.8-1.8 2.4-.3.2-.6.5-.8.8-.2.4-.2.8 0 1.1.3.4.8.6 1.3.7.6.1 1.1 0 1.6-.1.3-.1.6-.2.7-.4.2-.3.1-.6-.1-.9-.4-.6-1-1-1.5-1.5-.6-.8-.8-1.8-.5-2.8.4-1.2 1.4-2.2 1.4-3.5 0-.8-.3-1.5-.9-2.1-.1-.1-.3-.3-.4-.4-.1-.1-.2-.1-.3 0-.1.1-.1.3-.1.4z" fill="#007396"/></svg>'
  },
  {
    name: 'Spring Boot',
    category: 'backend',
    categoryLabel: 'Framework',
    brandColor: '#6DB33F',
    glowColor: 'rgba(109, 179, 63, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10c1.7 0 3.3-.4 4.8-1.2l-2.6-2.6c-.7.3-1.4.5-2.2.5-3.7 0-6.7-3-6.7-6.7S8.3 5.3 12 5.3s6.7 3 6.7 6.7c0 .8-.2 1.5-.5 2.2l2.6 2.6c.8-1.5 1.2-3.1 1.2-4.8z" fill="#6DB33F"/><path d="M12 7.3c-2.6 0-4.7 2.1-4.7 4.7 0 1.4.6 2.6 1.6 3.4l1.9-1.9c-.3-.4-.5-.9-.5-1.5 0-.9.7-1.7 1.7-1.7s1.7.7 1.7 1.7c0 .6-.2 1.1-.5 1.5l1.9 1.9c1-.8 1.6-2 1.6-3.4 0-2.6-2.1-4.7-4.7-4.7z" fill="#6DB33F"/><circle cx="12" cy="12" r="1.2" fill="#6DB33F"/></svg>'
  },
  {
    name: 'REST APIs',
    category: 'backend',
    categoryLabel: 'Architecture',
    brandColor: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0284C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.5" fill="#0284C7"/></svg>'
  },
  {
    name: 'OOP Architecture',
    category: 'backend',
    categoryLabel: 'Paradigm',
    brandColor: '#6366F1',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#6366F1" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>'
  },
  // Database
  {
    name: 'PostgreSQL',
    category: 'database',
    categoryLabel: 'Database',
    brandColor: '#4169E1',
    glowColor: 'rgba(65, 105, 225, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9.1v-3.2c-.8.3-1.6.4-2.5.4-.5 0-1-.1-1.4-.2.8-1.5 2.1-2.6 3.9-3.1-1.3-.8-2-2.2-2-3.8 0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.6-.7 3-2 3.8 1.8.5 3.1 1.6 3.9 3.1-.4.1-.9.2-1.4.2-.9 0-1.7-.1-2.5-.4v3.2c3.5-1.5 6-5 6-9.1 0-5.5-4.5-10-10-10z" fill="#4169E1"/></svg>'
  },
  {
    name: 'SQL',
    category: 'database',
    categoryLabel: 'Database',
    brandColor: '#00758F',
    glowColor: 'rgba(0, 117, 143, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#00758F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
  },
  // Dev Tools
  {
    name: 'Git',
    category: 'tools',
    categoryLabel: 'VCS',
    brandColor: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="#F05032"><path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.8 2.8c.6-.2 1.3 0 1.8.5.5.5.7 1.2.5 1.8l2.7 2.7c.6-.2 1.3 0 1.8.5.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.6-.6-.7-1.4-.4-2.1L12.5 11v5.1c.3.2.6.5.7.9.4 1.1-.1 2.3-1.2 2.7-1.1.4-2.3-.1-2.7-1.2-.4-1.1.1-2.3 1.2-2.7.4-.1.7-.1 1.1 0V10.6c-.4-.1-.7-.3-1-.6-.6-.6-.7-1.4-.4-2.1L7.4 5.1 2.4 10.1c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.6.6-1.6.1-2.2z"/></svg>'
  },
  {
    name: 'GitHub',
    category: 'tools',
    categoryLabel: 'Collab',
    brandColor: '#8B5CF6',
    glowColor: 'rgba(139, 124, 246, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>'
  },
  {
    name: 'VS Code',
    category: 'tools',
    categoryLabel: 'IDE',
    brandColor: '#007ACC',
    glowColor: 'rgba(0, 122, 204, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="#007ACC"><path d="M17.5 1.2L6.8 9.5 2.5 6.2.7 7.5l4.3 4.5-4.3 4.5 1.8 1.3 4.3-3.3 10.7 8.3c.7.5 1.6.4 2.2-.2l2.3-2.3c.5-.5.7-1.2.7-1.9V3.6c0-.7-.2-1.4-.7-1.9L19.7 1c-.6-.6-1.5-.7-2.2-.2zm.5 5.1v11.4l-7.7-5.7 7.7-5.7z"/></svg>'
  },
  {
    name: 'Postman',
    category: 'tools',
    categoryLabel: 'API Tool',
    brandColor: '#FF6C37',
    glowColor: 'rgba(255, 108, 55, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24" fill="#FF6C37"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.5l-2.6-1.5c-.3-.2-.5-.5-.5-.8v-3.5c0-.4.3-.8.8-.8s.8.3.8.8v3.1l2.3 1.3c.4.2.5.7.3 1.1-.2.3-.7.5-1.1.3v.1z"/></svg>'
  },
  {
    name: 'Antigravity',
    category: 'tools',
    categoryLabel: 'AI Tool',
    brandColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" fill="#8B5CF6" fill-opacity="0.15" stroke="#8B5CF6" stroke-width="1.8"/><path d="M12 4v16M4 12h16" stroke="#8B5CF6" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="3.5" fill="#8B5CF6"/></svg>'
  },
  {
    name: 'IntelliJ IDEA',
    category: 'tools',
    categoryLabel: 'Java IDE',
    brandColor: '#FE2857',
    glowColor: 'rgba(254, 40, 87, 0.4)',
    iconSvg: '<svg viewBox="0 0 24 24" width="24" height="24"><rect width="24" height="24" rx="4" fill="#000000"/><path d="M4 19h7v2H4zm0-15h2v12H4zm5 3h5v2H9zm0 4h5v2H9z" fill="#FFFFFF"/><path d="M3 3h4v4H3z" fill="#FE2857"/><path d="M17 17h4v4h-4z" fill="#087CFA"/></svg>'
  }
];

interface Project {
  number: string;
  title: string;
  subtitle: string;
  categoryBadge: string;
  description: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  domainUrl: string;
  previewEmbedUrl?: string; // Optional live preview embed URL (shows live website inside frame when provided)
}

const projectsData: Project[] = [
  {
    number: '01',
    title: 'MediBook',
    subtitle: 'Hospital & Doctor Appointment Booking Platform',
    categoryBadge: 'Full Stack Healthcare System',
    description: 'An enterprise-grade hospital appointment and doctor consultation booking platform. Engineered with React.js, TypeScript, and Java Spring Boot to provide real-time appointment slot booking, doctor availability schedules, and conflict-free SQL persistence.',
    tech: ['React.js', 'TypeScript', 'Java', 'Spring Boot', 'SQL', 'REST APIs'],
    features: [
      'Specialist doctor directory & hospital department filtering',
      'Real-time consultation slot reservation & conflict prevention',
      'Doctor availability calendar & schedule manager',
    ],
    liveUrl: 'https://medibook-health.vercel.app',
    githubUrl: 'https://github.com/Susmitha-bijivemula-18/medibook-hospital-appointment',
    domainUrl: 'medibook.health/appointments',
  },
  {
    number: '02',
    title: 'Strevo',
    subtitle: 'Modern Streetwear & Urban Fashion E-Commerce',
    categoryBadge: 'Full Stack E-Commerce Platform',
    description: 'A high-performance streetwear fashion e-commerce application designed with modern urban aesthetics. Features category and size filtering, dynamic shopping cart calculation, and robust Spring Boot inventory and order processing APIs.',
    tech: ['React.js', 'TypeScript', 'Java', 'Spring Boot', 'SQL', 'REST APIs'],
    features: [
      'Curated streetwear drops, size selection & real-time inventory count',
      'Shopping cart with instant subtotal, tax & promo code calculation',
      'User authentication, order placement flow & status tracking',
    ],
    liveUrl: 'https://strevo-streetwear.vercel.app',
    githubUrl: 'https://github.com/Susmitha-bijivemula-18/strevo-streetwear-ecommerce',
    domainUrl: 'strevo.store/streetwear-drop',
  },
  {
    number: '03',
    title: 'Smart PG Management',
    subtitle: 'Accommodation Discovery & Bed Booking System',
    categoryBadge: 'Full Stack Property Platform',
    description: 'An all-in-one PG accommodation and hostel discovery platform enabling users to search, explore, and reserve PG beds anywhere. Built with Java Spring Boot, React.js, TypeScript, and Python scripts for occupancy forecasting.',
    tech: ['Java', 'Spring Boot', 'React.js', 'TypeScript', 'Python', 'SQL'],
    features: [
      'City & neighborhood PG discovery with budget & AC filters',
      'Single, double & triple room-sharing bed reservation anywhere',
      'Python-powered occupancy data analysis & rent calculation',
    ],
    liveUrl: 'https://smart-pg-management.vercel.app',
    githubUrl: 'https://github.com/Susmitha-bijivemula-18/smart-pg-management-system',
    domainUrl: 'smartpg.in/discover/rooms',
  },
];

interface WorkflowStage {
  id: string;
  stepNumber: string;
  label: string;
  title: string;
  subtitle: string;
  category: string;
  iconSvg: string;
  description: string;
  tags: string[];
  phaseRole: string;
  impactMetric: string;
  cliCommand: string;
  cliOutputs: string[];
}

const workflowData: WorkflowStage[] = [
  {
    id: 'claude',
    stepNumber: '01',
    label: 'Claude AI',
    title: 'Claude AI',
    subtitle: 'Prompt & Architecture',
    category: 'System Reasoning & Schema Design',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4"/><circle cx="12" cy="3" r="1" fill="currentColor"/><path d="M2 13h2M20 13h2"/><circle cx="9" cy="13" r="1.5" fill="currentColor"/><circle cx="15" cy="13" r="1.5" fill="currentColor"/><path d="M9 16.5h6"/></svg>`,
    description: 'Drafting structured system prompts, relational SQL database schemas, and RESTful API contracts prior to implementation.',
    tags: ['System Prompts', 'Database Schemas', 'API Contracts', 'Architecture'],
    phaseRole: 'System Architecture & Schema Blueprint',
    impactMetric: '100% schema & API contract alignment before coding',
    cliCommand: 'claude --architect "fullstack-system-spec.md"',
    cliOutputs: [
      '[OK] Relational PostgreSQL 16 schema generated',
      '[OK] REST API contracts & Spring Boot DTOs defined',
      '[OK] Architectural blueprint validated (0 conflicts)',
    ],
  },
  {
    id: 'cursor',
    stepNumber: '02',
    label: 'Cursor IDE',
    title: 'Cursor IDE',
    subtitle: 'AI-Assisted Coding',
    category: 'Contextual Multi-File Implementation',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3l15 9-7 2-3 7L4 3z"/></svg>`,
    description: 'Rapid full-stack coding using AI codebase indexing, multi-file refactoring, and clean modular design patterns.',
    tags: ['Multi-File Edits', 'Codebase Indexing', 'React & TypeScript', 'Spring Boot'],
    phaseRole: 'High-Velocity Full-Stack Implementation',
    impactMetric: 'Type-safe, modular full-stack codebase',
    cliCommand: 'cursor . --ai-composer --context "spec/v1"',
    cliOutputs: [
      '[OK] Codebase indexed: 28 components, 12 controllers',
      '[OK] Generated type-safe TypeScript interfaces',
      '[OK] Scaffolding JPA repositories & service layers complete',
    ],
  },
  {
    id: 'antigravity',
    stepNumber: '03',
    label: 'Antigravity',
    title: 'Antigravity',
    subtitle: 'Autonomous Agent Build',
    category: 'Autonomous Agentic Verification',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/><circle cx="19" cy="5" r="1.5" fill="currentColor"/><circle cx="5" cy="19" r="1.5" fill="currentColor"/></svg>`,
    description: 'Autonomous coding agent executing terminal builds, verifying browser UI interactions, and resolving layout regressions.',
    tags: ['Autonomous Build', 'Browser UI Testing', 'Auto-Verification', 'Bug Fixing'],
    phaseRole: 'Autonomous Agent Build & UI Verification',
    impactMetric: 'Zero-regression builds & verified UI layouts',
    cliCommand: 'agy run-agent --verify-build --test-ui',
    cliOutputs: [
      '[OK] TypeScript compilation & Vite bundle passed (177ms)',
      '[OK] Browser subagent UI smoke test: all routes 200 OK',
      '[OK] Zero layout regressions detected',
    ],
  },
  {
    id: 'github',
    stepNumber: '04',
    label: 'GitHub',
    title: 'GitHub',
    subtitle: 'Version Control & Push',
    category: 'Source Control & Git Push',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    description: 'Pushing verified code to GitHub, managing clean commits, handling pull requests, and triggering CI/CD webhooks.',
    tags: ['Git Push', 'Clean Commits', 'Code Review', 'Webhooks'],
    phaseRole: 'Source Code Repository & Git Push',
    impactMetric: 'Clean commit history & automated pipeline triggers',
    cliCommand: 'git push origin main',
    cliOutputs: [
      '[OK] Enumerating objects: 42, done.',
      '[OK] Writing objects: 100% (42/42), 14.28 KiB',
      '[OK] main -> main (commit: 8e41a9) — CI Webhook triggered',
    ],
  },
  {
    id: 'vercel',
    stepNumber: '05',
    label: 'Vercel',
    title: 'Vercel',
    subtitle: 'Frontend Edge Deploy',
    category: 'Edge Network & CDN',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L22 20H2L12 3Z"/></svg>`,
    description: 'Automated CI/CD frontend deployment with global edge CDN caching and instant preview URLs on every Git push.',
    tags: ['React.js Deploy', 'Edge CDN', 'Instant Previews', 'Zero Downtime'],
    phaseRole: 'Frontend Edge CDN Distribution',
    impactMetric: 'Instant preview URLs & sub-second global load',
    cliCommand: 'vercel deploy --prod',
    cliOutputs: [
      '[OK] Building client bundle with Vite (optimized)',
      '[OK] Uploaded static assets to 300+ Edge POPs',
      '[OK] Deployed: https://portfolio.vercel.app [200 OK]',
    ],
  },
  {
    id: 'render',
    stepNumber: '06',
    label: 'Render',
    title: 'Render',
    subtitle: 'Backend Cloud Hosting',
    category: 'Cloud API & Managed PostgreSQL',
    iconSvg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    description: 'Containerized deployment of Java Spring Boot REST microservices with managed PostgreSQL and 24/7 monitoring.',
    tags: ['Spring Boot Cloud', 'Managed PostgreSQL', 'Container Hosting', '24/7 Monitoring'],
    phaseRole: 'Production Spring Boot API & DB Orchestration',
    impactMetric: '24/7 Managed Spring Boot & PostgreSQL uptime',
    cliCommand: 'render deploy --service spring-boot-api',
    cliOutputs: [
      '[OK] Docker container initialized from registry',
      '[OK] PostgreSQL database migrations applied',
      '[OK] Health check passed: HTTP 200 OK — Service Live',
    ],
  },
];

// ─── TYPING ANIMATION ───

const typingPhrases = [
  'React.js & TypeScript',
  'Java & Spring Boot',
  'REST APIs & SQL',
  'Full Stack Applications',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText(): void {
  const el = document.getElementById('typingText');
  if (!el) return;

  const currentPhrase = typingPhrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
    el.textContent = currentPhrase.substring(0, charIndex);
  } else {
    charIndex++;
    el.textContent = currentPhrase.substring(0, charIndex);
  }

  let delay = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typingPhrases.length;
    delay = 500;
  }

  setTimeout(typeText, delay);
}

// ─── SKILLS SHOWCASE RENDERING (Continuous Moving Stream) ───

function initSkillsTabs(): void {
  const track1 = document.getElementById('marqueeTrack1');
  const track2 = document.getElementById('marqueeTrack2');
  const tabs = document.getElementById('skillsTabs');
  if (!track1 || !track2) return;

  // Split skills into two visually balanced rows (9 items each)
  const row1Skills = allFullStackSkills.slice(0, 9);
  const row2Skills = allFullStackSkills.slice(9);

  const renderCard = (skill: FullStackSkill) => `
    <div class="skill-marquee-card" data-category="${skill.category}" style="--brand-color: ${skill.brandColor}; --glow-color: ${skill.glowColor};">
      <div class="skill-card-icon-wrap">
        ${skill.iconSvg}
      </div>
      <div class="skill-card-info">
        <span class="skill-card-name">${skill.name}</span>
        <span class="skill-card-badge">${skill.categoryLabel}</span>
      </div>
    </div>
  `;

  // Duplicate items 3 times for infinite seamless loop across ultra-wide monitors
  const createTrackHTML = (skills: FullStackSkill[]) => {
    const cards = skills.map(renderCard).join('');
    return cards + cards + cards;
  };

  track1.innerHTML = createTrackHTML(row1Skills);
  track2.innerHTML = createTrackHTML(row2Skills);

  // Tab filtering: highlight selected category, dim others smoothly
  if (tabs) {
    tabs.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('.skill-tab') as HTMLElement | null;
      if (!target) return;

      tabs.querySelectorAll('.skill-tab').forEach((t) => t.classList.remove('active'));
      target.classList.add('active');

      const category = target.getAttribute('data-tab') || 'all';
      const allCards = document.querySelectorAll('.skill-marquee-card');

      allCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('dimmed');
        } else {
          card.classList.add('dimmed');
        }
      });
    });
  }
}

// ─── PROJECTS RENDERING (ONE-BY-ONE DOWN SIDE WITH INDIVIDUAL SCROLL FOCUS) ───

function renderProjects(): void {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const renderCard = (project: Project, index: number) => `
    <article class="project-showcase-row project-scroll-card" data-project-index="${index}">
      <!-- Left Side: Live Demo Video Type Frame -->
      <div class="project-video-col">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="video-player-frame" title="Open ${project.title} Live Demo">
          <div class="video-player-topbar">
            <div class="video-window-dots">
              <span class="v-dot v-dot-red"></span>
              <span class="v-dot v-dot-yellow"></span>
              <span class="v-dot v-dot-green"></span>
            </div>
            <div class="video-url-pill">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>${project.domainUrl}</span>
            </div>
            <div class="video-live-badge">
              <span class="v-pulse-dot"></span> LIVE DEMO
            </div>
          </div>

          <!-- Clean black screen until live demo embed is added; shows Open Live Demo on hover -->
          <div class="video-viewport">
            ${project.previewEmbedUrl ? `<iframe src="${project.previewEmbedUrl}" class="video-live-iframe" loading="lazy" title="${project.title} Live Preview"></iframe>` : ''}

            <div class="video-play-overlay">
              <div class="v-play-btn" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="7 4 19 12 7 20 7 4"/></svg>
              </div>
              <span class="v-play-text">Open Live Demo ↗</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Right Side: Matter (Name, Skills, Little Content, Action Buttons) -->
      <div class="project-info-col">
        <div class="project-info-header">
          <div class="project-meta-row">
            <span class="project-badge">${project.categoryBadge}</span>
            <span class="project-number">${project.number}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>

        <p class="project-description">${project.description}</p>

        <!-- Skills / Tech Stack -->
        <div class="project-tech-chips">
          ${project.tech.map((t) => `<span class="tech-chip">${t}</span>`).join('')}
        </div>

        <!-- Features Bullet Points -->
        <ul class="project-features-list">
          ${project.features.map((f) => `
            <li>
              <svg class="feature-check" width="13" height="13" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <!-- Action Buttons -->
        <div class="project-action-buttons">
          <a href="${project.liveUrl}" class="btn btn-primary-live" target="_blank" rel="noopener noreferrer" title="Launch ${project.title} Live Demo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>Live Demo</span>
            <svg class="external-arrow" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="${project.githubUrl}" class="btn btn-github-code" target="_blank" rel="noopener noreferrer" title="View ${project.title} on GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
            <svg class="external-arrow" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;

  let html = '';
  projectsData.forEach((project, index) => {
    if (index > 0) {
      html += `
        <div class="project-scroll-divider" aria-hidden="true">
          <div class="project-divider-line"></div>
          <div class="project-divider-badge">
            <span class="divider-dot"></span>
            <span class="divider-text">FEATURED PROJECT 0${index + 1}</span>
          </div>
          <div class="project-divider-line"></div>
        </div>
      `;
    }
    html += renderCard(project, index);
  });

  grid.innerHTML = html;
}

// ─── WORKFLOW RENDERING (PURE SINGLE-ROW FLOWING PIPELINE: START TO END) ───

function renderWorkflow(): void {
  const track = document.getElementById('workflowTrack');
  if (!track) return;

  let currentStageIndex = 0;
  let autoPlayTimer: number | null = null;

  // Build the Pure Single-Row Pipeline: 6 connected nodes + 5 animated flowing bridges
  let html = '';
  workflowData.forEach((stage, i) => {
    const isStart = i === 0;
    const isEnd = i === workflowData.length - 1;
    const terminalTag = isStart 
      ? '<span class="flow-terminal-tag flow-tag-start">START</span>' 
      : isEnd 
      ? '<span class="flow-terminal-tag flow-tag-end">END</span>' 
      : '';

    html += `
      <div class="flow-step-node ${i === 0 ? 'active' : ''}" data-stage="${i}" role="button" tabindex="0" aria-label="Step ${stage.stepNumber}: ${stage.title}">
        <div class="flow-node-top">
          <span class="flow-step-num">${stage.stepNumber}</span>
          ${terminalTag}
        </div>

        <div class="flow-circle-anchor">
          <div class="flow-node-circle">
            ${stage.iconSvg}
          </div>
          <div class="flow-pulse-wave" aria-hidden="true"></div>
        </div>

        <div class="flow-node-info">
          <span class="flow-node-title">${stage.label}</span>
          <span class="flow-node-role">${stage.subtitle}</span>
        </div>
      </div>
    `;

    // Flowing connector between nodes
    if (i < workflowData.length - 1) {
      html += `
        <div class="flow-segment-bridge ${i === 0 ? 'flowing' : ''}" data-bridge="${i}" aria-hidden="true">
          <div class="flow-bridge-rail">
            <div class="flow-bridge-beam"></div>
          </div>
          <div class="flow-bridge-arrow">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>
        </div>
      `;
    }
  });

  track.innerHTML = html;

  const updateStage = (index: number): void => {
    currentStageIndex = index;
    const nodes = track.querySelectorAll('.flow-step-node');
    const bridges = track.querySelectorAll('.flow-segment-bridge');

    nodes.forEach((node, i) => {
      node.classList.toggle('active', i === index);
      node.classList.toggle('passed', i < index);
    });

    bridges.forEach((bridge, i) => {
      bridge.classList.toggle('flowing', i === index || i < index);
    });
  };

  // Click & keyboard navigation
  track.addEventListener('click', (e) => {
    const node = (e.target as HTMLElement).closest('.flow-step-node') as HTMLElement | null;
    if (!node) return;
    const idx = parseInt(node.getAttribute('data-stage') || '0', 10);
    updateStage(idx);
  });

  track.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const node = (e.target as HTMLElement).closest('.flow-step-node') as HTMLElement | null;
      if (!node) return;
      e.preventDefault();
      const idx = parseInt(node.getAttribute('data-stage') || '0', 10);
      updateStage(idx);
    }
  });

  // Smooth continuous auto-flow
  const startAutoFlow = (): void => {
    stopAutoFlow();
    autoPlayTimer = window.setInterval(() => {
      currentStageIndex = (currentStageIndex + 1) % workflowData.length;
      updateStage(currentStageIndex);
    }, 2400);
  };

  const stopAutoFlow = (): void => {
    if (autoPlayTimer !== null) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  };

  track.addEventListener('mouseenter', stopAutoFlow);
  track.addEventListener('mouseleave', startAutoFlow);

  updateStage(0);
  startAutoFlow();
}

// ─── NAVIGATION ───

function initNavigation(): void {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id]');

  // Scroll handler
  const onScroll = (): void => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;

    // Navbar background
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }

    // Progress bar
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }

    // Back to top
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 500);
    }

    // Active section
    let currentSection = 'hero';
    sections.forEach((section) => {
      const el = section as HTMLElement;
      const top = el.offsetTop - 200;
      if (scrollY >= top) {
        currentSection = el.id;
      }
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-section') === currentSection);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile toggle with body scroll locking & escape key support
  if (toggle && links) {
    const toggleMenu = (open?: boolean): void => {
      const isOpen = open !== undefined ? open : !links.classList.contains('open');
      toggle.classList.toggle('active', isOpen);
      links.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    toggle.addEventListener('click', () => {
      toggleMenu();
    });

    links.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('nav-link') || target.closest('.nav-link') || target.tagName === 'A') {
        toggleMenu(false);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        toggleMenu(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && links.classList.contains('open')) {
        toggleMenu(false);
      }
    }, { passive: true });
  }

  // Back to top
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}


// ─── ABOUT CODE WINDOW MOTION ANIMATION ───

const codeTokens: { text: string; className?: string }[] = [
  { text: 'const', className: 'code-keyword' },
  { text: ' ' },
  { text: 'developer', className: 'code-var' },
  { text: ' = {\n' },
  { text: '  ' },
  { text: 'name', className: 'code-prop' },
  { text: ': ' },
  { text: '"Bijivemula Susmitha"', className: 'code-string' },
  { text: ',\n' },
  { text: '  ' },
  { text: 'role', className: 'code-prop' },
  { text: ': ' },
  { text: '"Full Stack Developer"', className: 'code-string' },
  { text: ',\n' },
  { text: '  ' },
  { text: 'status', className: 'code-prop' },
  { text: ': ' },
  { text: '"Open to work"', className: 'code-success' },
  { text: ',\n' },
  { text: '  ' },
  { text: 'frontend', className: 'code-prop' },
  { text: ': [' },
  { text: '"React"', className: 'code-string' },
  { text: ', ' },
  { text: '"TypeScript"', className: 'code-string' },
  { text: ', ' },
  { text: '"HTML"', className: 'code-string' },
  { text: ', ' },
  { text: '"CSS3"', className: 'code-string' },
  { text: '],\n' },
  { text: '  ' },
  { text: 'backend', className: 'code-prop' },
  { text: ': [' },
  { text: '"Java"', className: 'code-string' },
  { text: ', ' },
  { text: '"Spring Boot"', className: 'code-string' },
  { text: ', ' },
  { text: '"REST APIs"', className: 'code-string' },
  { text: '],\n' },
  { text: '  ' },
  { text: 'database', className: 'code-prop' },
  { text: ': [' },
  { text: '"SQL"', className: 'code-string' },
  { text: ', ' },
  { text: '"PostgreSQL"', className: 'code-string' },
  { text: '],\n' },
  { text: '  ' },
  { text: 'tools', className: 'code-prop' },
  { text: ': [' },
  { text: '"Git"', className: 'code-string' },
  { text: ', ' },
  { text: '"VS Code"', className: 'code-string' },
  { text: ', ' },
  { text: '"Postman"', className: 'code-string' },
  { text: ', ' },
  { text: '"Antigravity"', className: 'code-string' },
  { text: '],\n' },
  { text: '};' }
];

interface CharItem {
  char: string;
  className?: string;
  isNewline?: boolean;
}

const allCodeChars: CharItem[] = [];
for (const token of codeTokens) {
  for (const c of token.text) {
    allCodeChars.push({
      char: c,
      className: token.className,
      isNewline: c === '\n'
    });
  }
}

let typewriterTimer: number | null = null;
let hasTypedOnce = false;

function startCodeTypewriter(): void {
  const codeBlock = document.getElementById('animatedCodeBlock');
  const cursor = document.getElementById('codeCursor');
  const lineNumbers = document.getElementById('codeLineNumbers');
  if (!codeBlock) return;

  if (typewriterTimer) {
    clearTimeout(typewriterTimer);
  }

  codeBlock.innerHTML = '';
  if (cursor) {
    cursor.classList.remove('done');
    cursor.style.display = 'inline-block';
  }

  let currentIdx = 0;
  let lineCount = 1;

  if (lineNumbers) {
    lineNumbers.innerHTML = '<span>1</span>';
  }

  function typeNext(): void {
    if (currentIdx >= allCodeChars.length) {
      if (cursor) cursor.classList.add('done');
      return;
    }

    const item = allCodeChars[currentIdx];
    currentIdx++;

    let html = '';
    let currentSpanClass = '';
    let currentSpanContent = '';

    for (let i = 0; i < currentIdx; i++) {
      const cItem = allCodeChars[i];
      if (cItem.className === currentSpanClass) {
        currentSpanContent += cItem.char;
      } else {
        if (currentSpanContent) {
          html += currentSpanClass
            ? `<span class="${currentSpanClass}">${currentSpanContent}</span>`
            : currentSpanContent;
        }
        currentSpanClass = cItem.className || '';
        currentSpanContent = cItem.char;
      }
    }
    if (currentSpanContent) {
      html += currentSpanClass
        ? `<span class="${currentSpanClass}">${currentSpanContent}</span>`
        : currentSpanContent;
    }

    const targetBlock = document.getElementById("animatedCodeBlock");
    if (targetBlock) targetBlock.innerHTML = html;

    if (item.isNewline) {
      lineCount++;
      if (lineNumbers) {
        let linesHtml = '';
        for (let l = 1; l <= lineCount; l++) {
          linesHtml += `<span>${l}</span>`;
        }
        lineNumbers.innerHTML = linesHtml;
      }
    }

    let delay = 38;
    if (item.char === '\n') delay = 220;
    else if (item.char === ',') delay = 120;
    else if (item.char === '{' || item.char === '}') delay = 160;

    typewriterTimer = window.setTimeout(typeNext, delay);
  }

  typeNext();
}


function initHeroVideo(): void {
  const video = document.getElementById('heroVideo') as HTMLVideoElement | null;
  const toggleBtn = document.getElementById('soundToggleBtn');
  const heroSection = document.getElementById('hero');

  if (!video || !toggleBtn) return;

  let userWantsAudio = false;

  const setSoundState = (active: boolean): void => {
    video.muted = !active;
    toggleBtn.classList.toggle('is-muted', !active);
    toggleBtn.setAttribute('title', active ? 'Click to mute' : 'Click to speak');
    toggleBtn.setAttribute('aria-label', active ? 'Mute' : 'Speak');
    if (active) {
      video.play().catch(() => {});
    }
  };

  // Initial state is strictly muted
  setSoundState(false);

  // Click toggle: single click speaks, next click mutes
  toggleBtn.addEventListener('click', () => {
    userWantsAudio = !userWantsAudio;
    setSoundState(userWantsAudio);
  });

  // Automatically mute when scrolling away, resume speaking when returning
  if (heroSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (userWantsAudio) {
              setSoundState(true);
            }
          } else {
            // Automatically mute on scroll away
            video.muted = true;
            toggleBtn.classList.add('is-muted');
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(heroSection);
  }

  // Window scroll listener for immediate auto-mute
  window.addEventListener('scroll', () => {
    if (!heroSection) return;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    if (window.scrollY > heroBottom - 150) {
      if (!video.muted) {
        video.muted = true;
        toggleBtn.classList.add('is-muted');
      }
    } else if (window.scrollY <= 80 && userWantsAudio && video.muted) {
      setSoundState(true);
    }
  }, { passive: true });
}

function initAboutCodeAnimation(): void {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasTypedOnce) {
          hasTypedOnce = true;
          startCodeTypewriter();
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(aboutSection);

  // Replay button
  const replayBtn = document.getElementById('replayCodeBtn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      startCodeTypewriter();
    });
  }

  // Copy button
  const copyBtn = document.getElementById('copyCodeBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const rawText = `const developer = {
  name: "Bijivemula Susmitha",
  role: "Full Stack Developer",
  status: "Open to work",
  frontend: ["React", "TypeScript", "HTML", "CSS3"],
  backend: ["Java", "Spring Boot", "REST APIs"],
  database: ["SQL", "PostgreSQL"],
  tools: ["Git", "VS Code", "Postman", "Antigravity"],
};`;
      try {
        await navigator.clipboard.writeText(rawText);
        copyBtn.classList.add('copied');
        const textSpan = copyBtn.querySelector('.copy-text');
        if (textSpan) textSpan.textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          if (textSpan) textSpan.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    });
  }
}

// ─── INTERSECTION OBSERVER (SCROLL REVEAL & ONE-BY-ONE STAGGER ENGINE) ───

function initRevealAnimations(): void {
  const elements = document.querySelectorAll<HTMLElement>(
    '.reveal-item, .reveal-header, .reveal-card, [data-reveal]'
  );

  if (!elements.length) return;

  // Fallback for browsers or environments without IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => {
      el.classList.add('is-revealed', 'visible');
    });
    return;
  }

  let batchCounter = 0;
  let batchResetTimeout: number | null = null;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const currentBatchIndex = batchCounter;
          batchCounter++;

          if (batchResetTimeout) clearTimeout(batchResetTimeout);
          batchResetTimeout = window.setTimeout(() => {
            batchCounter = 0;
          }, 350);

          const staggerDelay = currentBatchIndex * 130;
          window.setTimeout(() => {
            el.classList.add('is-revealed', 'visible');
          }, staggerDelay);

          obs.unobserve(el);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => {
    // If element is already in the viewport on initial page load, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-revealed', 'visible');
    } else {
      observer.observe(el);
    }
  });
}

// ─── INDEPENDENT PROJECT-BY-PROJECT SCROLL REVEAL (ONE AT A TIME) ───

function initProjectsScrollReveal(): void {
  const cards = document.querySelectorAll<HTMLElement>('.project-scroll-card');
  if (!cards.length) return;

  if (!('IntersectionObserver' in window)) {
    cards.forEach((card) => {
      card.classList.add('is-active-project');
    });
    return;
  }

  // 1. Entrance Reveal via IntersectionObserver
  const entranceObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement;
          card.classList.add('is-active-project');
          obs.unobserve(card);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  cards.forEach((card, index) => {
    card.style.setProperty('--card-stagger', `${index * 60}ms`);
    entranceObserver.observe(card);
  });

  // 2. Dynamic Scroll Focus Spotlight (highlights active card near vertical center of viewport)
  let ticking = false;
  const updateScrollFocus = (): void => {
    const viewportMiddle = window.innerHeight * 0.48;
    let closestCard: HTMLElement | null = null;
    let closestDistance = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      // Card is in visible viewport
      if (rect.bottom > 80 && rect.top < window.innerHeight - 80) {
        const cardMiddle = rect.top + rect.height * 0.5;
        const dist = Math.abs(cardMiddle - viewportMiddle);
        if (dist < closestDistance) {
          closestDistance = dist;
          closestCard = card;
        }
      }
    });

    cards.forEach((card) => {
      if (card === closestCard && closestDistance < window.innerHeight * 0.42) {
        card.classList.add('is-focused-project');
      } else {
        card.classList.remove('is-focused-project');
      }
    });

    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollFocus);
        ticking = true;
      }
    },
    { passive: true }
  );

  // Initial trigger after layout settles
  requestAnimationFrame(updateScrollFocus);
}

// ─── THEME TOGGLE (LIGHT / DARK) ───
function initTheme(): void {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('portfolio-theme', target);
    });
  }
}

// ─── RESUME MODAL VIEWER ───
function initResumeModal(): void {
  const modal = document.getElementById('resumeModal');
  const openHeroBtn = document.getElementById('heroOpenCvBtn');
  const openSectionBtn = document.getElementById('viewResumeSectionBtn');
  const resumeCardPreview = document.getElementById('resumeCardPreview');
  const closeBtn = document.getElementById('closeResumeModal');
  const backdrop = document.getElementById('resumeModalBackdrop');
  const zoomBtn = document.getElementById('toggleResumeZoomBtn');
  const zoomBtnText = document.getElementById('zoomBtnText');
  const modalBody = document.getElementById('resumeModalBody');
  const resumeImage = document.getElementById('resumePreviewImage');

  if (!modal) return;

  let isZoomed = false;

  const updateZoomState = (zoomed: boolean) => {
    isZoomed = zoomed;
    if (isZoomed) {
      modalBody?.classList.add('is-zoomed');
      if (zoomBtnText) zoomBtnText.textContent = 'Fit Page';
      resumeImage?.setAttribute('title', 'Click to fit full page');
    } else {
      modalBody?.classList.remove('is-zoomed');
      if (zoomBtnText) zoomBtnText.textContent = 'Zoom In';
      resumeImage?.setAttribute('title', 'Click to zoom in');
    }
  };

  const openModal = () => {
    updateZoomState(false); // Always open in Fit Full Page mode first
    modal.removeAttribute('hidden');
    requestAnimationFrame(() => {
      modal.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    setTimeout(() => {
      modal.setAttribute('hidden', '');
      updateZoomState(false);
    }, 220);
    document.body.style.overflow = '';
  };

  openHeroBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  openSectionBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  resumeCardPreview?.addEventListener('click', () => {
    openModal();
  });

  resumeCardPreview?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  });

  zoomBtn?.addEventListener('click', () => {
    updateZoomState(!isZoomed);
  });

  resumeImage?.addEventListener('click', () => {
    updateZoomState(!isZoomed);
  });

  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });
}

// ─── CONTACT SECTION COPY EMAIL HANDLER ───
function initContactCopyEmail(): void {
  const copyBtn = document.getElementById('copyEmailQuickBtn') as HTMLButtonElement | null;
  if (!copyBtn) return;

  const email = 'susmithabijivemula@gmail.com';
  let timeoutId: number | undefined;

  copyBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      copyBtn.classList.add('is-copied');
      copyBtn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="copy-btn-text">Copied! ✓</span>
      `;

      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        copyBtn.classList.remove('is-copied');
        copyBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span class="copy-btn-text">Copy Email</span>
        `;
      }, 2000);
    } catch (err) {
      console.warn('Copy email failed:', err);
    }
  });
}

// ─── INSTANT HERO RESET ON REFRESH (ZERO BLINKING, ZERO DELAYED GLIDE) ───

function initRefreshToHero(): void {
  // 1. Force manual scroll restoration so the browser does NOT restore scrolled positions on refresh
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // 2. Clear lingering hash on reload so browser doesn't anchor-jump
  if (window.location.hash && window.location.hash !== '#hero') {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  // 3. Immediately reset scroll position to top (Hero section)
  window.scrollTo(0, 0);

  // 4. Also enforce on pageshow (covers refresh, hard refresh, and navigation)
  window.addEventListener('pageshow', () => {
    window.scrollTo(0, 0);
  });
}

initRefreshToHero();

document.addEventListener('DOMContentLoaded', () => {
  // Guarantee scroll starts at Hero section
  window.scrollTo(0, 0);

  typeText();
  initSkillsTabs();
  renderProjects();
  initProjectsScrollReveal();
  renderWorkflow();
  initNavigation();
  initTheme();
  initResumeModal();
  initContactCopyEmail();

  // Silky smooth scroll for all hash links with navbar offset
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = 70;
        const targetTop = href === '#hero' ? 0 : (target.getBoundingClientRect().top + window.scrollY - navHeight);
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  initAboutCodeAnimation();
  initHeroVideo();

  // Reveal page cleanly without any FOUC or layout shift
  requestAnimationFrame(() => {
    document.body.classList.add('dom-ready');
    initRevealAnimations();
    initProjectsScrollReveal();
  });
});
