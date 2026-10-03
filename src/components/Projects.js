import React, { useState } from 'react';

const projectsData = [
  {
    id: 'fuevo-platform',
    title: 'FUEVO — Local SEO & Discovery Platform',
    category: 'Web Platforms',
    tagline: 'Live business discovery engine & zero-website local SEO platform',
    description:
      'Engineered and launched a live production digital platform (fuevo.in) that enables local businesses to establish an immediate digital presence and capture neighborhood demand without needing a dedicated website. Built with Next.js, featuring real-time geolocation discovery, dynamic view switching, and automated SEO indexing.',
    stack: ['Next.js', 'React', 'Geolocation API', 'Local SEO', 'Cloudinary', 'Responsive UI'],
    features: [
      'Live in production serving real queries at fuevo.in',
      'Real-time GPS locality detection and nearby shop search',
      'Triple view presentation: Tile View, List View, and Map View',
      'High-speed SSR architecture with Cloudinary media acceleration',
    ],
    liveUrl: 'https://fuevo.in',
    github: 'https://github.com/kilwish1997',
    badgeColor: '#00eaff',
  },
  {
    id: 'perplexity-bot',
    title: 'Perplexity Bot App',
    category: 'Flutter & Mobile',
    tagline: 'Real-time conversational AI app with RAG & streaming',
    description:
      'A cross-platform mobile AI assistant built in Flutter & Dart inspired by Perplexity AI. Powered by a FastAPI backend with bidirectional WebSockets for low-latency text streaming, Google Gemini AI integration, and a RAG (Retrieval-Augmented Generation) pipeline using cosine similarity.',
    stack: ['Flutter', 'Dart', 'FastAPI', 'WebSockets', 'Gemini AI', 'RAG'],
    features: [
      'Low-latency WebSocket streaming chat channel',
      'RAG pipeline with vector similarity embeddings',
      'Markdown rendering with code syntax highlights',
      'Clean state management and chat session history',
    ],
    github: 'https://github.com/kilwish1997',
    badgeColor: '#6366f1',
  },
  {
    id: 'tv-dashboard',
    title: 'TV Dashboard Apps',
    category: 'Flutter & Mobile',
    tagline: 'Industrial manufacturing real-time monitoring suite',
    description:
      'High-reliability TV dashboard application for textile & garment manufacturing plants. Delivers real-time telemetry across Cutting, Stitching, and Finishing assembly lines with auto-rotating display cycles and offline fault tolerance.',
    stack: ['Flutter', 'Dart', 'REST APIs', 'SharedPreferences', 'Cross-Platform'],
    features: [
      'Multi-process industrial metrics visualization',
      'Auto-rotating scheduled dashboard views',
      'Offline-first caching via local persistence',
      'Optimized TV screen resolutions and 10ft UI',
    ],
    github: 'https://github.com/kilwish1997',
    badgeColor: '#8b5cf6',
  },
  {
    id: 'hr-time-system',
    title: 'HR & Time Management System',
    category: 'Flutter & Mobile',
    tagline: 'Employee Self-Service (ESS) with automated geofencing',
    description:
      'Enterprise workforce mobility app streamlining attendance and field-staff operations. Features real-time GPS geofenced check-in/out, live attendance charts, leave request flows, digital pay slips, and visitor pass generation.',
    stack: ['Flutter', 'Dart', 'Geofencing', 'REST APIs', 'Mobile Architecture'],
    features: [
      'Automated GPS boundary geofencing',
      'Interactive workforce attendance dashboard',
      'Digital pay slip viewer and leave management',
      'Field-staff duty logging & visitor check-in',
    ],
    github: 'https://github.com/kilwish1997',
    badgeColor: '#10b981',
  },
  {
    id: 'machine-maintenance-app',
    title: 'Machine Maintenance & Breakdown App',
    category: 'Flutter & Mobile',
    tagline: 'QR-powered maintenance tracking suite for supervisors & mechanics',
    description:
      'Industrial machine maintenance and breakdown management application designed for factory floor operations. Enables supervisors and mechanics to scan machine QR codes, create instant breakdown tickets, track repair workflows in real time, and monitor equipment downtime metrics.',
    stack: ['Flutter', 'Dart', 'QR Scanner', 'REST APIs', 'SharedPreferences', 'Downtime Analytics'],
    features: [
      'High-speed QR code scanning for instant machine lookup & ticket creation',
      'Role-tailored interfaces for factory supervisors and field mechanics',
      'End-to-end repair status lifecycle tracking (Open, Accepted, In-Progress, Repaired)',
      'Downtime duration analysis and preventive maintenance scheduling',
    ],
    github: 'https://github.com/kilwish1997',
    badgeColor: '#f59e0b',
  },
  {
    id: 'cafe-management',
    title: 'Café Management System',
    category: 'Web Platforms',
    tagline: 'Desktop Point of Sale (POS) and inventory tracker',
    description:
      'Desktop commercial management application developed in Java Swing & JFrame with MySQL relational database integration. Features cashier workflows, product catalog, inventory tracking, and daily sales report generation.',
    stack: ['Java', 'Swing/JFrame', 'MySQL', 'OOP', 'NetBeans'],
    features: [
      'Role-based staff authentication',
      'Real-time order checkout and bill calculation',
      'Inventory depletion and restock threshold alerts',
      'Structured relational MySQL queries and reports',
    ],
    github: 'https://github.com/kilwish1997',
    badgeColor: '#ec4899',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Flutter & Mobile', 'Web Platforms'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production web platforms, cross-platform Flutter applications, and intelligent systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-header">
                <span
                  className="project-category-badge"
                  style={{ borderColor: `${project.badgeColor}40`, color: project.badgeColor }}
                >
                  {project.category}
                </span>
                
                <div className="project-header-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-indicator-badge"
                      title="Open Live Website"
                    >
                      <span className="live-dot"></span>
                      <span>Live Site</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View on GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>

              {/* Key Features */}
              <div className="project-features-block">
                <span className="features-label">Technical Highlights:</span>
                <ul className="project-features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="project-feature-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="project-tech-stack">
                {project.stack.map((t) => (
                  <span key={t} className="project-tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Footer Link */}
              <div className="project-card-footer">
                <div className="project-action-buttons">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-btn"
                    >
                      <span>Visit Live Platform</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn"
                  >
                    <span>View Repository</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
