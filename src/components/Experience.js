import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'App Developer',
      subtitle: 'Flutter & API Integration',
      company: 'Intellisync Company',
      period: 'March 2025 – Present',
      location: 'Remote',
      type: 'Internship',
      points: [
        'Architected and deployed TV Dashboard Apps — an industrial monitoring suite for textile & garment manufacturing tracking Cutting, Stitching, and Finishing processes in real-time.',
        'Engineered an offline-resilient caching layer using SharedPreferences and WebSocket/REST APIs, ensuring uninterrupted metrics display during shop-floor connectivity drops.',
        'Built a single unified Flutter codebase delivering optimized, auto-rotating dashboard layouts across Android, iOS, Web, Windows, macOS, and Linux smart displays.',
      ],
      technologies: ['Flutter', 'Dart', 'REST APIs', 'SharedPreferences', 'Cross-Platform', 'TV Layouts'],
    },
    {
      role: 'Java Developer Trainee',
      subtitle: 'Java Backend Development',
      company: 'Appwars Technologies Pvt Ltd',
      period: 'June 2022 – September 2022',
      location: 'Noida, UP, India',
      type: 'Internship',
      points: [
        'Developed modular backend services leveraging Java and OOP principles to streamline business application logic.',
        'Conducted rigorous performance profiling and query optimizations, boosting system response efficiency by 20%.',
        'Participated across all stages of the Software Development Life Cycle (SDLC) including technical design, component testing, and build packaging.',
      ],
      technologies: ['Java', 'OOP', 'REST APIs', 'MySQL', 'SDLC'],
    },
  ];

  return (
    <section id="experience" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on professional experience delivering production-grade applications and optimized backends.
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="experience-item">
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              {/* Experience Card */}
              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-role">
                      {exp.role}{' '}
                      <span className="experience-subtitle">({exp.subtitle})</span>
                    </h3>
                    <div className="experience-company-row">
                      <span className="company-name">{exp.company}</span>
                      <span className="location-dot">•</span>
                      <span className="company-location">{exp.location}</span>
                    </div>
                  </div>
                  <div className="experience-badges">
                    <span className="period-badge">{exp.period}</span>
                    <span className="type-badge">{exp.type}</span>
                  </div>
                </div>

                <div className="experience-body">
                  <h4 className="achievements-heading">Key Contributions:</h4>
                  <ul className="achievements-list">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="achievement-item">
                        <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tech-footer">
                  <span className="tech-footer-label">Tech Used:</span>
                  <div className="experience-tech-tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="exp-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
