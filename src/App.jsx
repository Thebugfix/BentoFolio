import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  ArrowUpRight,
  Database,
  Server,
  Code2,
  Globe,
  Sparkles,
  BriefcaseBusiness,
  Rocket,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';
import GradientText from './components/reactbits/GradientText';
import ShinyText from './components/reactbits/ShinyText';
import SpotlightCard from './components/reactbits/SpotlightCard';
import './App.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { y: 22, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14
    }
  }
};

const projects = [
  {
    title: 'TrendyCart',
    description: 'Full-stack eCommerce app with secure auth, checkout flow, and admin features.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    icon: ShoppingBag,
    url: 'https://trendy-cart-plum.vercel.app/'
  },
  {
    title: 'Yummy Restaurant',
    description: 'Responsive recipe showcase app with reusable components and modern UI.',
    tags: ['React', 'JavaScript', 'HTML', 'Bootstrap'],
    icon: Rocket,
    url: 'https://yummyproject-thebugfix1s-projects.vercel.app/'
  },
  {
    title: 'Lastara Jewellery',
    description: 'Freelance MERN project for a jewelry brand with product catalog, admin controls, and secure checkout.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Freelance'],
    icon: ShieldCheck,
    url: 'https://lastarajewellers.com/'
  }
];

const MotionDiv = motion.div;
const RESUME_DRIVE_URL = 'https://drive.google.com/file/d/1EIPgbeJ4FFFhNcHbFs1Bz4e81DusOs5A/view?usp=sharing';

const App = () => {
  return (
    <div className="app-shell relative min-h-screen overflow-hidden px-3 py-6 text-slate-100 sm:px-4 md:px-8 md:py-8 lg:px-10">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-1/3 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-52 w-[20rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl sm:h-60 sm:w-[32rem]" />

      <MotionDiv
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionDiv variants={itemVariants} className="glass-card col-span-2 p-5 sm:p-6 md:col-span-8 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="status-chip mb-2 inline-flex items-center gap-2 px-3 py-1 text-xs font-medium tracking-wide">
                <Sparkles size={14} />
                <ShinyText text="Open for freelance and full-time" speed={4.5} className="text-cyan-100" />
              </p>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                <GradientText
                  colors={['#67e8f9', '#f9a8d4', '#fbbf24', '#67e8f9']}
                  animationSpeed={7}
                  className="font-semibold"
                >
                  Naved Shaikh
                </GradientText>
              </h1>
              <h2 className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base md:text-lg">
                MERN Stack Developer focused on responsive UI, API integration, and production-ready web apps.
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
                7410508683 | shaikhnaved6133@gmail.com | Pune, India
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:mt-7 sm:grid-cols-2">
            <a
              href="mailto:shaikhnaved6133@gmail.com"
              className="primary-btn inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn inline-flex w-full items-center justify-center px-5 py-2.5 text-sm font-semibold"
            >
              Download Resume
            </a>
          </div>
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="col-span-2 grid grid-cols-2 gap-3 sm:gap-4 md:col-span-4 md:grid-cols-1">
          <a
            href="https://www.linkedin.com/in/naved-shaikh-a89392262"
            target="_blank"
            rel="noreferrer"
            className="social-card linkedin-card group p-5 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <Linkedin size={30} />
              <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="mt-8 text-sm text-white/85">Connect on LinkedIn</p>
          </a>
          <a
            href="https://github.com/Thebugfix"
            target="_blank"
            rel="noreferrer"
            className="social-card github-card group p-5 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <Github size={30} />
              <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="mt-8 text-sm text-slate-300">View GitHub projects</p>
          </a>
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="glass-card col-span-2 p-5 sm:p-6 md:col-span-4">
          <h3 className="mb-4 text-lg font-semibold text-white">Tech Stack</h3>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-1">
            <StackItem icon={<Code2 className="text-cyan-300" />} name="React.js" desc="Frontend" />
            <StackItem icon={<div className="font-bold text-slate-100">N</div>} name="Next.js" desc="React Framework" />
            <StackItem icon={<Server className="text-emerald-300" />} name="Node.js" desc="Runtime" />
            <StackItem icon={<Globe className="text-sky-300" />} name="Express" desc="Framework" />
            <StackItem icon={<Database className="text-orange-300" />} name="MongoDB" desc="Database" />
            <StackItem icon={<div className="font-bold text-yellow-300">JS</div>} name="JavaScript" desc="ES6+" />
            <StackItem icon={<div className="font-bold text-indigo-300">SQL</div>} name="SQL" desc="Database Querying" />
          </div>
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="col-span-2 grid grid-cols-2 gap-3 sm:gap-4 md:col-span-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="edu-card col-span-1 p-5 text-center sm:p-6 md:col-span-4">
          <div className="mx-auto mb-3 w-fit rounded-full border border-orange-200/40 bg-orange-200/20 p-3 text-orange-200">
            <GraduationCap size={24} />
          </div>
          <h3 className="font-semibold text-orange-100">Education</h3>
          <p className="mt-2 text-sm text-orange-100/90">BCA (Science), Dr. D.Y. Patil College</p>
          <p className="text-xs text-orange-100/75">09/2021 - 04/2024 | Pune, India</p>
          <p className="mt-2 text-sm text-orange-100/90">HSC, Dr. D.Y. Patil College</p>
          <p className="text-xs text-orange-100/75">03/2020 - 07/2021 | Pune, India</p>
        </MotionDiv>

        <MotionDiv variants={itemVariants} className="glass-card col-span-1 p-5 sm:p-6 md:col-span-8">
          <div className="mb-4 flex items-center gap-2 text-white">
            <BriefcaseBusiness size={18} className="text-cyan-300" />
            <h3 className="text-lg font-semibold">Experience</h3>
          </div>
          <div className="space-y-4">
            <ExperienceItem role="Associate Frontend Engineer" company="Repos Energy | Pune" date="01/2026 - Present" />
            <div className="h-px bg-slate-700/70" />
            <ExperienceItem
              role="MERN Stack Developer (Intern)"
              company="ASK Innovations | Remote"
              date="12/2024 - 02/2025"
            />
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

const Tag = ({ children, className = '' }) => (
  <span className={`tag-chip px-3 py-1 text-xs max-sm:px-2 max-sm:text-[11px] ${className}`}>{children}</span>
);

const StackItem = ({ icon, name, desc }) => (
  <div className="stack-card flex h-full flex-col items-start gap-2 p-2.5 sm:flex-row sm:items-center sm:gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900">{icon}</div>
    <div>
      <p className="text-sm font-medium text-slate-100">{name}</p>
      <p className="text-xs text-slate-400">{desc}</p>
    </div>
  </div>
);

const projectCardThemes = [
  {
    container: 'from-cyan-900/90 via-slate-900 to-slate-950 border-cyan-300/30',
    description: 'text-cyan-100/80'
  },
  {
    container: 'from-emerald-900/90 via-slate-900 to-slate-950 border-emerald-300/30',
    description: 'text-emerald-100/80'
  },
  {
    container: 'from-orange-900/90 via-slate-900 to-slate-950 border-orange-300/30',
    description: 'text-orange-100/80'
  }
];

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;
  const theme = projectCardThemes[index % projectCardThemes.length];

  return (
    <SpotlightCard
      className={`project-card col-span-1 border bg-gradient-to-br p-4 max-sm:col-span-2 max-sm:aspect-[4/3] max-sm:p-2.5 sm:p-5 ${theme.container}`}
      spotlightColor="rgba(125, 211, 252, 0.22)"
    >
      <div className="relative z-10 flex h-full flex-col justify-between max-sm:justify-start max-sm:gap-1.5">
        <div className="mb-3 flex items-start justify-between gap-3 max-sm:mb-1.5">
          <div>
            <div className="mb-2 inline-flex rounded-full border border-white/20 bg-white/10 p-2 text-white max-sm:mb-1 max-sm:p-1.5">
              <Icon size={14} />
            </div>
            <h3 className="text-lg font-semibold text-white sm:text-xl max-sm:text-sm">{project.title}</h3>
            <p className={`project-desc-mobile-clamp mt-1 text-xs ${theme.description} max-sm:text-[11px] max-sm:leading-4 sm:text-sm`}>
              {project.description}
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/10 p-2 transition hover:bg-white/20 max-sm:p-1.5"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex flex-wrap gap-1 text-xs max-sm:mt-0.5 sm:gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Tag key={`${project.title}-${tag}`} className={tagIndex > 2 ? 'hidden sm:inline-flex' : ''}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      <MotionDiv
        className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-white/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      />
    </SpotlightCard>
  );
};

const ExperienceItem = ({ role, company, date }) => (
  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="font-medium text-white">{role}</p>
      <p className="text-sm text-slate-400">{company}</p>
    </div>
    <span className="secondary-btn w-fit px-3 py-1 text-xs text-slate-200">{date}</span>
  </div>
);

export default App;
