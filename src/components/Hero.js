import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Introduction */}
        <div className="hero-content">
          <div className="hero-status-badge">
            <span className="status-dot">
              <span className="status-dot-ping"></span>
            </span>
            <span>Available for Mobile & Software Roles</span>
          </div>

          <h1 className="hero-headline">
            Flutter & Mobile{' '}
            <span className="gradient-text">Application Engineer</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Prince Tewatia</strong>. I build fluid, high-performance cross-platform
            applications with <strong>Flutter</strong> & <strong>Dart</strong>, combining pixel-perfect
            responsive UI with scalable backend architecture and modern web systems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download="Prince_Tewatia_Resume.pdf">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Resume</span>
            </a>
          </div>

          {/* Quick tech stack tags */}
          <div className="hero-tech-preview">
            <span className="tech-label">Primary Stack:</span>
            <div className="tech-tags-list">
              <span className="tech-tag highlight">Flutter</span>
              <span className="tech-tag highlight">Dart</span>
              <span className="tech-tag">Cross-Platform</span>
              <span className="tech-tag">REST APIs</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">WebSockets</span>
              <span className="tech-tag">Java</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Developer Terminal / Code Card */}
        <div className="hero-terminal-wrapper">
          <div className="developer-terminal">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot close"></span>
                <span className="control-dot minimize"></span>
                <span className="control-dot expand"></span>
              </div>
              <div className="terminal-title">prince-profile.json</div>
              <div className="terminal-actions">
                <span className="terminal-badge">JSON</span>
              </div>
            </div>

            <div className="terminal-body">
              <pre className="code-block">
                <code>
                  <span className="token-bracket">{'{'}</span>{'\n'}
                  {'  '}<span className="token-key">"name"</span>: <span className="token-string">"Prince Tewatia"</span>,{'\n'}
                  {'  '}<span className="token-key">"role"</span>: <span className="token-string">"Flutter & Mobile Engineer"</span>,{'\n'}
                  {'  '}<span className="token-key">"specialization"</span>: <span className="token-string">"Cross-Platform & Modern Web"</span>,{'\n'}
                  {'  '}<span className="token-key">"primaryStack"</span>: <span className="token-bracket">{'['}</span>{'\n'}
                  {'    '}<span className="token-string">"Flutter & Dart (Android, iOS, Web, TV)"</span>,{'\n'}
                  {'    '}<span className="token-string">"State Management & Offline Persistence"</span>,{'\n'}
                  {'    '}<span className="token-string">"REST APIs & Real-time WebSockets"</span>,{'\n'}
                  {'    '}<span className="token-string">"Modern Next.js Web Systems"</span>{'\n'}
                  {'  '}<span className="token-bracket">{']'}</span>,{'\n'}
                  {'  '}<span className="token-key">"agenticTooling"</span>: <span className="token-string">"Google Antigravity & Codex (High-Velocity Delivery)"</span>,{'\n'}
                  {'  '}<span className="token-key">"status"</span>: <span className="token-string active">"Ready to build high-impact apps 🚀"</span>{'\n'}
                  <span className="token-bracket">{'}'}</span>
                </code>
              </pre>
            </div>

            {/* Quick Metrics Footer */}
            <div className="terminal-footer">
              <div className="terminal-stat">
                <span className="stat-val">6+</span>
                <span className="stat-name">Supported Platforms</span>
              </div>
              <div className="terminal-stat-divider"></div>
              <div className="terminal-stat">
                <span className="stat-val">92%</span>
                <span className="stat-name">ML Model Accuracy</span>
              </div>
              <div className="terminal-stat-divider"></div>
              <div className="terminal-stat">
                <span className="stat-val">20%</span>
                <span className="stat-name">Efficiency Gain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
