import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Flutter & Mobile Ecosystem',
      subtitle: 'Primary specialization for high-performance apps',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      skills: [
        { name: 'Flutter', level: 'Advanced' },
        { name: 'Dart', level: 'Advanced' },
        { name: 'Cross-Platform (Mobile, Web, TV)', level: 'Advanced' },
        { name: 'State Management (Provider / Bloc)', level: 'Advanced' },
        { name: 'Offline Storage & Caching', level: 'Advanced' },
        { name: 'GPS Geofencing & Location APIs', level: 'Proficient' },
        { name: 'Adaptive & 10ft TV UI', level: 'Advanced' },
      ],
    },
    {
      title: 'Modern Web & Discovery Systems',
      subtitle: 'Fast, responsive, SEO-ready web applications',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      skills: [
        { name: 'Next.js & SSR', level: 'Proficient' },
        { name: 'React.js', level: 'Proficient' },
        { name: 'JavaScript (ES6+)', level: 'Proficient' },
        { name: 'Modern CSS & Glassmorphism', level: 'Advanced' },
        { name: 'Local SEO & Metadata Optimization', level: 'Advanced' },
        { name: 'Media CDN (Cloudinary)', level: 'Proficient' },
      ],
    },
    {
      title: 'Intelligent Architectures & Backend',
      subtitle: 'API communications, AI integrations & services',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12A10 10 0 0 1 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      skills: [
        { name: 'RESTful API Engineering', level: 'Advanced' },
        { name: 'Duplex WebSockets (Real-time)', level: 'Proficient' },
        { name: 'Vector RAG & Gemini Integrations', level: 'Proficient' },
        { name: 'Python & FastAPI', level: 'Proficient' },
        { name: 'Java (OOP & Systems)', level: 'Proficient' },
        { name: 'MySQL & Relational Modeling', level: 'Proficient' },
      ],
    },
    {
      title: 'Engineering Tooling & Workflow',
      subtitle: 'Modern developer workflow and agile delivery',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      skills: [
        { name: 'Google Antigravity & Agentic IDEs', level: 'Advanced' },
        { name: 'AI-Assisted Development & Codex Workflows', level: 'Advanced' },
        { name: 'Rapid Prototyping & Automated Debugging', level: 'Advanced' },
        { name: 'Git & GitHub Versioning', level: 'Advanced' },
        { name: 'Android Studio / VS Code', level: 'Advanced' },
        { name: 'Postman API Debugging', level: 'Advanced' },
        { name: 'Linux & Command Line', level: 'Proficient' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core focus in Flutter & Dart development, accompanied by modern web technologies and smart workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="skills-bento-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">{cat.icon}</div>
                <div>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-subtitle">{cat.subtitle}</p>
                </div>
              </div>

              <div className="skills-pill-cloud">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span className="skill-pill-name">{skill.name}</span>
                    <span className="skill-pill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
