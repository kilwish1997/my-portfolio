import React from 'react';

const Education = () => {
  const educationList = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'MVN University',
      institutionLink: 'https://mvn.edu.in/',
      period: '2020 – 2024',
      badge: 'CGPA: 7.5 / 10',
      description:
        'In-depth study of computer science fundamentals including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Artificial Intelligence.',
      coursework: ['Data Structures & Algorithms', 'Database Systems (MySQL)', 'Software Engineering', 'Computer Networks', 'Java & Web Development'],
    },
    {
      degree: 'Senior Secondary Education (Class XII)',
      institution: 'JD Public School, Lalpura, Palwal',
      affiliation: 'Affiliated with CBSE',
      period: '2018 – 2020',
      badge: 'Score: 70%',
      description:
        'Rigorous curriculum focusing on Mathematics, Physics, and Chemistry, laying a strong foundation in analytical problem solving and scientific reasoning.',
      coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science Fundamentals'],
    },
  ];

  return (
    <section id="education" className="section-wrapper">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Academics</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal engineering foundations and coursework in computer science.
          </p>
        </div>

        {/* Education Cards */}
        <div className="education-grid">
          {educationList.map((item) => (
            <div key={item.degree} className="education-card">
              <div className="education-card-top">
                <div className="education-icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="education-meta-badges">
                  <span className="education-badge score">{item.badge}</span>
                  <span className="education-badge period">{item.period}</span>
                </div>
              </div>

              <h3 className="education-degree-title">{item.degree}</h3>

              <div className="education-inst-row">
                {item.institutionLink ? (
                  <a
                    href={item.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-inst-link"
                  >
                    <span>{item.institution}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                ) : (
                  <span className="education-inst-name">{item.institution}</span>
                )}
                {item.affiliation && <span className="education-affiliation">({item.affiliation})</span>}
              </div>

              <p className="education-description">{item.description}</p>

              <div className="education-coursework">
                <span className="coursework-label">Key Topics:</span>
                <div className="coursework-tags">
                  {item.coursework.map((topic) => (
                    <span key={topic} className="coursework-tag">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
