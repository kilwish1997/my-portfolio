import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      value: 'Flutter',
      label: 'Core Specialization',
      desc: 'Native-speed cross-platform apps',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      value: '6',
      label: 'Platforms Supported',
      desc: 'Android, iOS, Web, Windows, macOS, Linux',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      value: '20%',
      label: 'Optimization Gain',
      desc: 'System throughput & query tuning',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 14 14" />
        </svg>
      ),
      value: '1+ Yrs',
      label: 'Experience',
      desc: 'Mobile & Software Engineering',
    },
  ];

  const pillars = [
    {
      title: 'Cross-Platform Mobile Engineering',
      description:
        'Architecting fluid, native-feel applications for mobile, tablet, and smart TV screens with Flutter & Dart. Experienced in reactive state management, offline-first local caching, and custom high-fps widget animations.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'Modern Web & Discovery Platforms',
      description:
        'Building scalable web applications such as FUEVO (Local SEO & Discovery platform) with Next.js and React. Focusing on dynamic view modes (Tile/List/Map), geolocation services, and high Core Web Vitals performance.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: 'Intelligent Systems & Real-Time Data',
      description:
        'Leveraging AI-augmented engineering workflows, RAG pipelines with vector similarity, and low-latency WebSockets to build next-generation smart apps with real-time data streaming and conversational intelligence.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12A10 10 0 0 1 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Engineering Mindset & Approach</h2>
          <p className="section-subtitle">
            Focused on Flutter development, cross-platform performance, and modern web architecture.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="about-bio-card">
          <div className="about-bio-content">
            <h3 className="about-bio-title">Crafting Native-Grade Digital Experiences</h3>
            <p>
              I am a software developer with deep specialization in <strong>Flutter</strong> & <strong>Dart</strong>,
              alongside modern web technologies like <strong>Next.js</strong> and backend integration.
              From shipping industrial TV monitoring applications for textile plants to building production platforms
              like <strong>FUEVO</strong>, I build applications that prioritize responsiveness, smooth user journeys, and robust architecture.
            </p>
            <p>
              By leveraging intelligent development workflows and modern architectural patterns, I deliver
              scalable digital products rapidly without ever compromising on stability, clean code principles, or user experience.
            </p>
          </div>
        </div>

        {/* Competency Pillars */}
        <div className="about-pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-card">
              <div className="pillar-icon">{pillar.icon}</div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights Row */}
        <div className="about-stats-grid">
          {highlights.map((item) => (
            <div key={item.label} className="stat-card">
              <div className="stat-icon-wrapper">{item.icon}</div>
              <div className="stat-number">{item.value}</div>
              <div className="stat-title">{item.label}</div>
              <div className="stat-description">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
