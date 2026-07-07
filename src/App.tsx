import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  GraduationCap,
  Code2,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Calendar,
  Award,
  BookOpen,
  ChevronDown,
  Github,
  Linkedin,
  Facebook,
} from 'lucide-react';

const IMG_1 = '/myportfolio/images/image1.png';
const IMG_2 = '/myportfolio/images/image2.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="font-display text-xl font-bold text-white">
              RM<span className="text-gold-500">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link pb-0.5 ${
                    activeSection === item.id ? 'nav-link-active !text-gold-400' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-sm">
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-800">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-base font-medium transition-colors ${
                  activeSection === item.id ? 'text-gold-400' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-black"
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-6rem)]">
            {/* Left — Text */}
            <div className="flex flex-col justify-center lg:pr-12">
              <div className="opacity-0 animate-fade-in">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-500 mb-6">
                  <span className="w-8 h-px bg-gold-500" />
                  Available for Opportunities
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-6 opacity-0 animate-slide-up animate-delay-100">
                Ramonito
                <br />
                <span className="gold-text-shimmer">Mahilum Jr</span>
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed mb-4 max-w-lg opacity-0 animate-slide-up animate-delay-200">
                Web Application Developer &amp;{' '}
                <span className="text-gold-400 font-medium">WordPress/SEO Specialist</span>
              </p>
              <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-lg opacity-0 animate-slide-up animate-delay-300">
                Crafting fast, scalable, and secure digital solutions using Vue.js, Laravel, and
                MySQL — turning complex challenges into intuitive, data-driven experiences.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-12 opacity-0 animate-slide-up animate-delay-400">
                <a href="#projects" className="btn-primary">
                  View My Work
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Ramonito-Mahilum-Resume.pdf"
                  className="btn-secondary"
                >
                  Resume/CV
                </a>
              </div>

              {/* Social Links - MOVED INSIDE LEFT COLUMN */}
              <div className="flex items-center gap-5 opacity-0 animate-fade-in animate-delay-500">
                <span className="text-xs uppercase tracking-widest text-zinc-600">Follow</span>
                <div className="w-8 h-px bg-zinc-800" />
                {[
                  { icon: Github, label: 'GitHub', url: 'https://github.com/shuntwo1' },
                  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ramonito-mahilum-610463420/' },
                  { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/ramonitomahilumjr' },
                ].map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-gold-400 hover:border-gold-500/50 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Two Portrait Images */}
            <div className="relative flex items-end justify-center gap-3 lg:gap-4 h-[520px] md:h-[620px] lg:h-[780px] opacity-0 animate-slide-in-right animate-delay-200">
              {/* Glow behind images */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
              </div>

              {/* Image 1 — slightly lower */}
              <div className="relative w-[46%] h-[88%] mt-auto rounded-2xl overflow-hidden shadow-2xl shadow-black group">
                <img
                  src={IMG_1}
                  alt="Ramonito Mahilum Jr"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Image 2 — taller, starts from top */}
              <div className="relative w-[46%] h-full rounded-2xl overflow-hidden shadow-2xl shadow-black group">
                <img
                  src={IMG_2}
                  alt="Ramonito Mahilum Jr"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating badge on second image */}
                <div className="absolute bottom-5 left-5 right-5 bg-black/70 backdrop-blur-md border border-zinc-700/60 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">WordPress Developer</p>
                    <p className="text-xs text-zinc-400">Vue.js · Laravel</p>
                  </div>
                </div>
              </div>

              {/* Thin gold line accent */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-600 opacity-0 animate-fade-in animate-delay-600">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Stats Card Side */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '4+', label: 'Years Learning' },
                  { value: '5', label: 'Projects' },
                  { value: '1', label: 'Published Thesis' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="dark-card p-6 hover:border-zinc-700 transition-colors duration-300"
                  >
                    <p className="text-3xl font-bold font-display gold-text mb-1">{stat.value}</p>
                    <p className="text-sm text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              {/* Decorative line */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
            </div>

            {/* Content Side */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
                <span className="w-6 h-px bg-gold-500" />
                About Me
              </span>
              <h2 className="heading-2 text-white mb-6">
                Turning Ideas Into{' '}
                <span className="gold-text">Digital Reality</span>
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I'm a Web Application Developer and WordPress/SEO Specialist dedicated to
                  building fast, scalable, and secure digital solutions. Leveraging modern
                  technologies like Vue.js, Laravel, and MySQL, alongside expert WordPress
                  optimization, I turn complex business challenges into intuitive, data-driven
                  applications.
                </p>
                <p>
                  From seamless API integrations to driving organic traffic through SEO, my focus
                  is always on delivering real-world results and exceptional user experiences.
                  I believe in writing clean, maintainable code that stands the test of time.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {['Vue.js', 'Laravel', 'MySQL', 'WordPress', 'SEO', 'PHP'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm text-gold-400 bg-gold-500/10 border border-gold-500/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION SECTION ===== */}
      <section id="education" className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4 justify-center">
              <span className="w-6 h-px bg-gold-500" />
              My Journey
              <span className="w-6 h-px bg-gold-500" />
            </span>
            <h2 className="heading-2 text-white">
              Education &amp; <span className="gold-text">Background</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* College */}
            <div className="relative dark-card p-8 hover:border-zinc-700 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-600 rounded-l-2xl" />
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors duration-300">
                    <GraduationCap className="w-7 h-7 text-gold-400" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Bachelor of Science in Information Technology
                      </h3>
                      <p className="text-gold-400 font-medium text-sm mt-0.5">
                        Davao Del Norte State College
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 bg-zinc-800 px-3 py-1.5 rounded-full w-fit shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Jun 2022 – Jul 2026</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-400 text-sm">
                        <span className="text-zinc-200 font-medium">Thesis: </span>
                        "Diagnostic Analytics For Recovery And Post-Operative Assessment Using the
                        Dentatrack Intelligent Monitoring System"
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <BookOpen className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-400 text-sm">
                        <span className="text-zinc-200 font-medium">Relevant Coursework: </span>
                        Programming, Web Development, Database Management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior High */}
            <div className="relative dark-card p-8 hover:border-zinc-700 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-zinc-500 to-zinc-700 rounded-l-2xl" />
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:border-zinc-600 transition-colors duration-300">
                    <GraduationCap className="w-7 h-7 text-zinc-400" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Information and Communication Technology
                      </h3>
                      <p className="text-zinc-400 font-medium text-sm mt-0.5">
                        Northlink Technological College
                      </p>
                      <p className="text-xs text-zinc-600 mt-0.5">Senior High School</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 bg-zinc-800 px-3 py-1.5 rounded-full w-fit shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Jun 2019 – Aug 2020</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                    <p className="text-zinc-400 text-sm">
                      <span className="text-zinc-200 font-medium">Relevant Coursework: </span>
                      Computer Systems Servicing, Networking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4 justify-center">
              <span className="w-6 h-px bg-gold-500" />
              What I Do
              <span className="w-6 h-px bg-gold-500" />
            </span>
            <h2 className="heading-2 text-white">
              My <span className="gold-text">Skills</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Code2, title: 'Frontend Development', desc: 'Vue.js, React, TypeScript, Tailwind CSS', color: 'text-gold-400', bg: 'bg-gold-500/10 border-gold-500/20' },
              { icon: Briefcase, title: 'Backend Development', desc: 'Laravel, Node.js, PHP, REST APIs', color: 'text-zinc-300', bg: 'bg-zinc-800 border-zinc-700' },
              { icon: Code2, title: 'Database Management', desc: 'MySQL, PostgreSQL, MongoDB', color: 'text-zinc-300', bg: 'bg-zinc-800 border-zinc-700' },
              { icon: Code2, title: 'WordPress Development', desc: 'Custom Themes, Plugins, Performance', color: 'text-gold-400', bg: 'bg-gold-500/10 border-gold-500/20' },
              { icon: Code2, title: 'SEO Optimization', desc: 'Technical SEO, Analytics, Core Web Vitals', color: 'text-zinc-300', bg: 'bg-zinc-800 border-zinc-700' },
              { icon: Code2, title: 'API Integration', desc: 'RESTful APIs, Third-party Services', color: 'text-gold-400', bg: 'bg-gold-500/10 border-gold-500/20' },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className={`group p-6 rounded-2xl border ${bg} hover:border-gold-500/40 transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center mb-4">
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

                {/* ===== PROJECTS SECTION ===== */}
          <section id="projects" className="section-padding bg-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4 justify-center">
                  <span className="w-6 h-px bg-gold-500" />
                  Portfolio
                  <span className="w-6 h-px bg-gold-500" />
                </span>
                <h2 className="heading-2 text-white">
                  My <span className="gold-text">Projects</span>
                </h2>
                <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
                  A selection of real-world applications I've designed and developed.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {[
                    { title: 'Jimenez Dental Clinic', category: 'Web Application', img: `${import.meta.env.BASE_URL}images/dentas.png`, imgFit: 'object-center' },
                    { title: 'Jimenez Dental Clinic', category: 'Web Application', img: `${import.meta.env.BASE_URL}images/dentas1.png`, imgFit: 'object-center' },
                    { title: 'Jimenez Dental Clinic', category: 'Web Application', img: `${import.meta.env.BASE_URL}images/dentas2.png`, imgFit: 'object-top' },
                    { title: 'E-Learning Platform',   category: 'Mobile App',       img: `${import.meta.env.BASE_URL}images/elearning.png`, imgFit: 'object-center' },
                    { title: 'Halo Fitness',           category: 'Web Application', img: `${import.meta.env.BASE_URL}images/haloooo.png`, imgFit: 'object-top' },
                    { title: 'SeaLearn',               category: 'Mobile App',       img: `${import.meta.env.BASE_URL}images/sealearnsite.png`, imgFit: 'object-top' },
                    { title: 'Task Manager App',       category: 'Mobile App',       img: `${import.meta.env.BASE_URL}images/todo.png`, imgFit: 'object-center' },
                  ].map((project) => (
                  <div
                    key={project.title}
                    className="group rounded-2xl overflow-hidden border border-zinc-800 hover:border-gold-500/30 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5"
                  >
                    {/* Screenshot */}
                    <div className="overflow-hidden bg-zinc-800" style={{ aspectRatio: '16/9' }}>
                      <img
                        src={project.img}
                        alt={project.title}
                        className={`w-full h-full object-cover ${project.imgFit} transition-transform duration-500 group-hover:scale-105`}
                        onError={(e) => {
                          // Fallback if image doesn't load - shows a placeholder
                          const target = e.currentTarget;
                          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Crect x='3' y='3' width='18' height='18' rx='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpath d='M21 15l-5-5L5 21'/%3E%3C/svg%3E`;
                          target.className = 'w-full h-full object-contain p-8 bg-zinc-800';
                          target.alt = `${project.title} (image not found)`;
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="px-5 py-4">
                      <p className="text-xs font-semibold text-gold-500 uppercase tracking-wider mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-semibold text-white text-base">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a href="#contact" className="btn-secondary">
                  Interested in working together?
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
                <span className="w-6 h-px bg-gold-500" />
                Get In Touch
              </span>
              <h2 className="heading-2 text-white mb-6">
                Let's Work{' '}
                <span className="gold-text">Together</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 max-w-md">
                Have a project in mind or just want to say hello? I'd love to hear from you.
                Let's discuss how we can bring your ideas to life.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'mahilum.r213@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+63 951 844 4077' },
                  { icon: MapPin, label: 'Location', value: 'Panabo City, Davao del Norte, Philippines' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600 uppercase tracking-wider">{label}</p>
                      <p className="text-zinc-200 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="dark-card p-8">
              <form
              action="https://formspree.io/f/mnjkrodb"
              method="POST"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gold-500 text-black font-semibold rounded-xl hover:bg-gold-400 transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-display text-xl font-bold text-white">
              RM<span className="text-gold-500">.</span>
            </span>
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Ramonito Mahilum Jr. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-sm text-zinc-600">
              <a href="https://github.com/shuntwo1" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/ramonito-mahilum-610463420/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">LinkedIn</a>
              <a href="https://www.facebook.com/ramonitomahilumjr" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;