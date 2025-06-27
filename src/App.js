import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailjs-config';
import './App.css';

const projects = [
  {
    icon: '☕',
    title: 'Café Management System',
    description:
      'Developed a Cafe Management System in NetBeans using Java Swing and JFrame, with a user-friendly interface for staff. Integrated MySQL for efficient data handling, streamlining daily operations.',
    stack: [
      { name: 'Java', color: '#7b61ff' },
      { name: 'Swing/JFrame', color: '#6c63ff' },
      { name: 'MySQL', color: '#4caf50' },
    ],
  },
  {
    icon: '✈️',
    title: 'Image Classification- Car vs. Aeroplane',
    description:
      'Engineered a CNN for image classification of cars and aeroplanes, leveraging transfer learning and fine-tuning with a pre-trained VGG model to achieve 92% test accuracy. Applied advanced data augmentation to boost generalization and model performance.',
    stack: [
      { name: 'Python', color: '#3776ab' },
      { name: 'CNN', color: '#7b61ff' },
      { name: 'VGG', color: '#6c63ff' },
      { name: 'Data Augmentation', color: '#ffd600' },
    ],
  },
  {
    icon: '🤖',
    title: 'Perplexity Bot App',
    description:
      'Developed a mobile AI chat app in Flutter and Dart, inspired by Perplexity AI. Built a FastAPI backend with real-time WebSocket chat and Gemini AI integration for smart, responsive conversations. Implemented RAG with cosine similarity for relevant source retrieval, and designed a clean, markdown-supported UI with real-time streaming chat',
    stack: [
      { name: 'Flutter', color: '#42a5f5' },
      { name: 'Dart', color: '#0175c2' },
      { name: 'WebSocket', color: '#7b61ff' },
      { name: 'Gemini AI', color: '#ffd600' },
    ],
  },
];

// Animated background component
function AnimatedBackground({ darkMode }) {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const particles = useRef([]);
  const PARTICLE_COUNT = Math.max(32, Math.floor(dimensions.width / 32));

  // Initialize particles
  useEffect(() => {
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 16 + Math.random() * 18,
      dx: (Math.random() - 0.5) * 0.0008,
      dy: (Math.random() - 0.5) * 0.0008,
      baseAlpha: 0.12 + Math.random() * 0.18,
      color: [
        [123, 97, 255], // purple
        [0, 234, 255],  // cyan
        [225, 75, 123], // pink
        [255, 94, 174], // magenta
        [14, 48, 173],  // blue
      ][Math.floor(Math.random() * 5)]
    }));
  }, [PARTICLE_COUNT, dimensions.width, dimensions.height]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse move handler
  useEffect(() => {
    const handleMouse = (e) => {
      mouse.current.x = e.clientX / dimensions.width;
      mouse.current.y = e.clientY / dimensions.height;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [dimensions.width, dimensions.height]);

  // Animation loop
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    let running = true;
    function draw() {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      // Gradient background
      const grad = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height);
      grad.addColorStop(0, darkMode ? '#181a2b' : '#f7f8fa');
      grad.addColorStop(1, darkMode ? '#23244d' : '#e6f7ff');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      // Draw particles
      for (let p of particles.current) {
        // Parallax offset
        const px = p.x * dimensions.width + (mouse.current.x - 0.5) * 80 * (0.5 + p.r / 36);
        const py = p.y * dimensions.height + (mouse.current.y - 0.5) * 60 * (0.5 + p.r / 36);
        // Glow
        ctx.save();
        ctx.globalAlpha = p.baseAlpha + 0.08 * Math.sin(Date.now() * 0.0007 + p.x * 10);
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.shadowColor = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},0.5)`;
        ctx.shadowBlur = 32 + p.r * 1.5;
        ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},0.18)`;
        ctx.fill();
        ctx.restore();
        // Animate
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > 1) p.dx *= -1;
        if (p.y < 0 || p.y > 1) p.dy *= -1;
      }
      if (running) requestAnimationFrame(draw);
    }
    draw();
    return () => { running = false; };
  }, [darkMode, dimensions.width, dimensions.height]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'background 0.6s',
      }}
      aria-hidden="true"
    />
  );
}

function App() {
  const [navSolid, setNavSolid] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'light' ? false : true;
  });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  
  // EmailJS form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [emailError, setEmailError] = useState(''); // For email validation errors

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = EMAILJS_CONFIG.SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = EMAILJS_CONFIG.TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = EMAILJS_CONFIG.PUBLIC_KEY;

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    
    // Check if it's an allowed email provider
    const domain = email.split('@')[1]?.toLowerCase();
    const allowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    
    if (!allowedDomains.includes(domain)) {
      return 'Only Gmail, Yahoo, Hotmail, and Outlook addresses are allowed';
    }
    
    return '';
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear email error when user starts typing
    if (name === 'email') {
      setEmailError('');
    }
  };

  // Handle email blur (when user leaves the email field)
  const handleEmailBlur = (e) => {
    const email = e.target.value;
    if (email) {
      const error = validateEmail(email);
      setEmailError(error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email before submission
    const emailValidationError = validateEmail(formData.email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setEmailError('');

    try {
      // Check if credentials are configured
      if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
          EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
          EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS credentials not configured. Please set up your EmailJS account first.');
      }

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Prince Tewatia',
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      
      // Show more specific error messages
      let errorMessage = 'Failed to send message. Please try again or contact me directly.';
      
      if (error.message.includes('credentials not configured')) {
        errorMessage = 'EmailJS not configured. Please set up your EmailJS account first.';
      } else if (error.message.includes('Service not found')) {
        errorMessage = 'EmailJS Service ID is incorrect. Please check your configuration.';
      } else if (error.message.includes('Template not found')) {
        errorMessage = 'EmailJS Template ID is incorrect. Please check your configuration.';
      } else if (error.message.includes('Invalid public key')) {
        errorMessage = 'EmailJS Public Key is incorrect. Please check your configuration.';
      }
      
      setSubmitStatus('error');
      console.error('Detailed error:', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for navbar links
  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.tagName === 'A' && e.target.hash) {
        const section = document.querySelector(e.target.hash);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    const nav = document.querySelector('nav');
    nav && nav.addEventListener('click', handleNavClick);
    return () => nav && nav.removeEventListener('click', handleNavClick);
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Parallax effect for 3D numbers
  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = document.getElementById('home');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
      setParallax({ x, y });
    };
    const hero = document.getElementById('home');
    if (hero) hero.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (hero) hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Parallax transforms for each number
  const parallaxTransforms = [
    `translate3d(${parallax.x * 48}px, ${parallax.y * 32}px, 0)`, // 2
    `translate3d(${parallax.x * 32}px, ${parallax.y * 48}px, 0)`, // 0a
    `translate3d(${parallax.x * 64}px, ${parallax.y * 24}px, 0)`, // 0b
    `translate3d(${parallax.x * 80}px, ${parallax.y * 40}px, 0)`, // 1
  ];

  // Section fade-in animation
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={darkMode ? 'App dark' : 'App light'}>
      <AnimatedBackground darkMode={darkMode} />
      {/* Navbar */}
      <nav className={navSolid ? 'solid' : ''}>
        <div className="nav-logo">
          <span className="logo-gradient">Prince Tewatia</span>
        </div>
        <div className="nav-center-group tight">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <span className="dark-toggle" title="Toggle dark/light mode" onClick={() => setDarkMode(dm => !dm)}>
            {darkMode ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#23244d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            )}
          </span>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* 3D 2001 Numbers Background */}
        <div className="bg-number number-2" style={{transform: `rotate(-8deg) skewY(-6deg) scale(1.18) ${parallaxTransforms[0]}`}}>2</div>
        <div className="bg-number number-0a" style={{transform: `rotate(6deg) skewY(4deg) scale(1.13) ${parallaxTransforms[1]}`}}>0</div>
        <div className="bg-number number-0b" style={{transform: `rotate(-4deg) skewY(-2deg) scale(1.16) ${parallaxTransforms[2]}`}}>0</div>
        <div className="bg-number number-1" style={{transform: `rotate(10deg) skewY(8deg) scale(1.22) ${parallaxTransforms[3]}`}}>1</div>
        <div className="hero-content" style={{textAlign: 'left', alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '-32px'}}>
          <h1 className="hero-name hero-bounce" style={{marginBottom: '0.2em'}}>Prince Tewatia</h1>
          <h2 className="hero-title hero-bounce" style={{margin: 0, fontWeight: 500}}>Full Stack Developer</h2>
          <p className="hero-summary hero-bounce" style={{margin: '18px 0 32px 0', maxWidth: 700}}>
            B.Tech Computer Science graduate skilled in Java and Flutter development. Developed real-world projects like an AI chat app and a high-accuracy image classifier.
          </p>
          <div className="hero-buttons" style={{display: 'flex', gap: '18px', flexWrap: 'wrap', marginTop: 0, padding: 0}}>
            <a href="#projects" className="hero-btn primary hero-bounce">View My Work</a>
            <a href="#contact" className="hero-btn secondary hero-bounce">Get In Touch</a>
            <a href="/resume.pdf" className="hero-btn download hero-bounce" download>Download Resume</a>
          </div>
        </div>
        {/* Decorative SVG background */}
        <svg className="hero-bg-svg" viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200 Q 225 100 450 200 T 900 200 V 300 H0Z" fill="#2d2e6c" opacity="0.5"/>
          <circle cx="800" cy="250" r="30" fill="#2d2e6c" opacity="0.2"/>
          <rect x="700" y="30" width="60" height="60" rx="12" fill="#2d2e6c" opacity="0.15"/>
        </svg>
      </section>
      {/* About Section (replaced with About Me) */}
      <section id="about" className="section about-me-section">
        <h2>About Me</h2>
        <p className="about-intro">Building robust backend systems and intuitive mobile apps with Java and Flutter.</p>
        <div className="about-content-row">
          <div className="about-left">
            <div className="about-journey-card">
              <h3>My Journey</h3>
              <p className="about-journey">
                Enthusiastic java and Flutter developer with 4 months of hands-on experience in Java, Spring Boot, and cross-platform app development. Built responsive, user-friendly mobile apps and optimized APIs, improving database efficiency and delivering real-world projects while rapidly adapting to new technologies. Skilled in creating seamless UI/UX, integrating RESTful APIs, and deploying solutions to app stores and cloud platforms—eager to contribute fresh ideas and technical skills to a dynamic development team.
        </p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-features">
              <div className="about-feature-card">
                <h4>Cross-Platform App Development</h4>
                <p>Build and maintain high-quality mobile apps for Android and iOS using Flutter and Dart</p>
              </div>
              <div className="about-feature-card">
                <h4>UI/UX Implementation</h4>
                <p>Translate UI/UX designs into responsive, user-friendly interfaces with modern Flutter widgets and layouts</p>
              </div>
              <div className="about-feature-card">
                <h4>Performance Optimization</h4>
                <p>Debug, test, and enhance app performance for speed, reliability, and smooth operation across devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Experience Section (moved here) */}
      <section id="experience" className="section" style={{
        background: 'linear-gradient(120deg, rgba(35,36,77,0.28) 60%, rgba(24,26,43,0.18) 100%)',
        boxShadow: '0 4px 32px 0 #181a2b22',
        borderRadius: 18,
        border: '1.5px solid rgba(123,97,255,0.08)',
        backdropFilter: 'blur(6px)',
        maxWidth: '1200px',
        margin: '0 auto 32px auto',
        padding: '0 0 32px 0'
      }}>
        <h2>Work Experience</h2>
        <p className="work-intro">Professional journey creating responsive, high-performance mobile apps and delivering seamless user experiences with Flutter.</p>
        <div className="work-experience-timeline">
          <div className="work-experience-card">
            <h3 className="work-title">Java Developer Trainee <span className="work-tech">(Java & Advanced Java)</span></h3>
            <div className="work-meta">
              <span className="work-company">Appwars Technologies Pvt Ltd (Noida, Uttar Pradesh, India)</span>
              <div className="work-badges">
                <span className="badge">June - September 2022</span>
                <span className="badge">On-site</span>
                <span className="badge badge-type">Internship</span>
              </div>
            </div>
            <div className="work-achievements">
              <div className="work-achievements-title">Key Achievements:</div>
              <ul>
                <li>Assisted in developing backend solutions using Java and implemented OOPS principles.</li>
                <li>Contributed to a project that improved system efficiency by 20% through code optimization.</li>
                <li>Participated in all phases of the Software Development Life Cycle (SDLC), including design, development, testing, and deployment; gained foundational experience in Java-based backend systems.</li>
              </ul>
            </div>
            <div className="work-technologies">
              <div className="work-technologies-title">Technologies:</div>
              <div className="work-tech-badges">
                <span className="tech-badge">Java</span>
                <span className="tech-badge">Advanced Java</span>
                <span className="tech-badge">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section (modern card style) */}
      <section id="education" className="section education-section">
        <h2>Education</h2>
        <div className="education-underline"></div>
        <p className="education-intro">Academic foundation that shaped my technical expertise and analytical thinking</p>
        <div className="education-cards">
          <div className="education-card">
            <div className="education-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a084fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12L12 7 2 12l10 5 10-5z"/><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/></svg>
            </div>
            <div className="education-main">
              <div className="education-header">
                <span className="education-degree">Bachelor's degree in Computer Science</span>
                <a className="education-institution" href="https://mvn.edu.in/" target="_blank" rel="noopener noreferrer">MVN University</a>
              </div>
              <div className="education-meta">
                <span className="education-date">2020 – 2024</span>
                <span className="education-badge">CGPA: 7.5</span>
              </div>
              <div className="education-desc">Comprehensive study of computer science fundamentals including data structures, algorithms, and software engineering principles.</div>
            </div>
          </div>
          <div className="education-card">
            <div className="education-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a084fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12L12 7 2 12l10 5 10-5z"/><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/></svg>
            </div>
            <div className="education-main">
              <div className="education-header">
                <span className="education-degree">Senior Secondary Education</span>
                <span className="education-institution">JD Public School, Lalpura, Palwal (Affi. by CBSE)</span>
              </div>
              <div className="education-meta">
                <span className="education-date">2018 – 2020</span>
                <span className="education-badge">Score: 70%</span>
              </div>
              <div className="education-desc">Strong foundation in mathematics and science with focus on analytical thinking and problem-solving skills.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Skills Section (new, modern grid) */}
      <section id="technical-skills" className="section technical-skills-section">
        <h2>Technical Skills</h2>
        <div className="technical-skills-underline"></div>
        <p className="technical-skills-intro">Technologies and frameworks I work with to build powerful Applications and Backend solutions</p>
        <div className="technical-skills-grid">
          {/* Row 1 */}
          <div className="tech-skill-card"><span className="tech-skill-icon" style={{fontSize:'1.5rem',display:'flex',alignItems:'center'}}>
            {'\u2668\uFE0F'}
          </span><div><div className="tech-skill-title">Java</div><div className="tech-skill-desc small-desc">Programming Language</div></div></div>
          <div className="tech-skill-card tech-skill-advanced-java">
            <span className="tech-skill-icon" style={{fontSize:'1.5rem'}}>
              {/* Java emoji only, no circle */}
              {'\u2615\uFE0E'}
            </span>
            <div>
              <div className="tech-skill-title">Advanced Java</div>
              <div className="tech-skill-desc small-desc">Programming Language</div>
            </div>
          </div>
          <div className="tech-skill-card"><span className="tech-skill-icon" style={{fontSize:'1.5rem'}}>{'\u2668'}</span><div><div className="tech-skill-title">Java Servlet Pages (JSP)</div><div className="tech-skill-desc small-desc">Java Framework</div></div></div>
          <div className="tech-skill-card"><span className="tech-skill-icon" style={{fontSize:'1.15rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {/* Official Flutter logo SVG, smaller */}
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="16,144 128,32 240,32 128,144" fill="#47C5FB"/>
              <polygon points="128,144 80,192 128,240 240,128 192,80" fill="#47C5FB"/>
              <polygon points="128,240 176,192 240,256 128,256" fill="#00569E"/>
              <polygon points="128,240 176,192 128,192 80,192" fill="#00B5F8"/>
              <polygon points="128,192 176,192 240,128 192,80" fill="#00B5F8"/>
            </svg>
          </span><div><div className="tech-skill-title">Flutter</div><div className="tech-skill-desc small-desc">UI toolkit or framework</div></div></div>
          {/* Row 2 */}
          <div className="tech-skill-card"><span className="tech-skill-icon" style={{fontSize:'1.5rem'}}>{'\uD83C\uDFAF'}</span><div><div className="tech-skill-title">Dart</div><div className="tech-skill-desc small-desc">Programming Language</div></div></div>
          <div className="tech-skill-card"><span className="tech-skill-icon">🌿</span><div><div className="tech-skill-title">MongoDB</div><div className="tech-skill-desc">NoSQL Database</div></div></div>
          <div className="tech-skill-card"><span className="tech-skill-icon" style={{fontSize:'1.5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="dbTop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#7ed6fb"/>
                  <stop offset="100%" stop-color="#4fc3f7"/>
                </linearGradient>
                <linearGradient id="dbSide" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#4fc3f7"/>
                  <stop offset="100%" stop-color="#1976d2"/>
                </linearGradient>
              </defs>
              <ellipse cx="16" cy="7" rx="12" ry="5" fill="url(#dbTop)"/>
              <rect x="4" y="7" width="24" height="4" fill="url(#dbSide)"/>
              <ellipse cx="16" cy="11" rx="12" ry="5" fill="url(#dbTop)"/>
              <rect x="4" y="11" width="24" height="4" fill="url(#dbSide)"/>
              <ellipse cx="16" cy="15" rx="12" ry="5" fill="url(#dbTop)"/>
              <rect x="4" y="15" width="24" height="4" fill="url(#dbSide)"/>
              <ellipse cx="16" cy="19" rx="12" ry="5" fill="url(#dbTop)"/>
              <rect x="4" y="19" width="24" height="4" fill="url(#dbSide)"/>
              <ellipse cx="16" cy="23" rx="12" ry="5" fill="url(#dbTop)"/>
              <ellipse cx="16" cy="23" rx="12" ry="5" fill="#fff" fill-opacity="0.08"/>
              <ellipse cx="16" cy="7" rx="12" ry="5" fill="#fff" fill-opacity="0.12"/>
            </svg>
          </span><div><div className="tech-skill-title">SQL Databases</div><div className="tech-skill-desc">Relational DB</div></div></div>
          {/* Row 3 */}
          <div className="tech-skill-card"><span className="tech-skill-icon" style={{fontSize:'1.5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#fff"/>
            </svg>
          </span><div><div className="tech-skill-title">Git/GitHub</div><div className="tech-skill-desc">Version Control</div></div></div>
          <div className="tech-skill-card"><span className="tech-skill-icon" style={{fontSize:'1.5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="16" width="18" height="4" rx="1.5" fill="#ffa500"/>
              <rect x="5" y="10" width="14" height="4" rx="1.5" fill="#ffb84d"/>
              <rect x="7" y="4" width="10" height="4" rx="1.5" fill="#ffd699"/>
            </svg>
          </span><div><div className="tech-skill-title">Data Structures</div><div className="tech-skill-desc">Core Concepts</div></div></div>
          <div className="tech-skill-card"><span className="tech-skill-icon" style={{fontSize:'1.5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#7952B3"/>
              <path d="M19.5 16.5C20.88 16.04 21.5 15.08 21.5 13.75C21.5 11.92 20.08 11 17.75 11H11V22H18.25C20.58 22 22 21.08 22 19.25C22 18.08 21.38 17.29 19.5 16.5ZM13.5 13H17.5C18.6 13 19.25 13.38 19.25 14.25C19.25 15.12 18.6 15.5 17.5 15.5H13.5V13ZM17.75 20H13.5V17H17.75C18.92 17 19.5 17.38 19.5 18.25C19.5 19.12 18.92 20 17.75 20Z" fill="#fff"/>
            </svg>
          </span><div><div className="tech-skill-title">Bootstrap</div><div className="tech-skill-desc small-desc">open-source front-end Framework</div></div></div>
        </div>
      </section>
      {/* Projects Section (modern card grid) */}
      <section id="projects" className="section" style={{
        background: 'linear-gradient(120deg, rgba(35,36,77,0.28) 60%, rgba(24,26,43,0.18) 100%)',
        boxShadow: '0 4px 32px 0 #181a2b22',
        borderRadius: 18,
        border: '1.5px solid rgba(123,97,255,0.08)',
        backdropFilter: 'blur(6px)',
        maxWidth: '1200px',
        margin: '0 auto 32px auto',
        padding: '0 0 32px 0'
      }}>
        <h2 style={{ color: '#c084fc', fontSize: '2.4rem', marginBottom: 0 }}>Featured Projects</h2>
        <p style={{ color: '#b0b3c6', marginBottom: 32, marginTop: 8, fontSize: '1.13rem' }}>
          A showcase of backend solutions and architectures I've built
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '18px',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {projects.map((project, idx) => (
            <div key={project.title} className="project-feature-card" style={{
              background: 'linear-gradient(180deg, #23244d 60%, #181a2b 100%)',
              borderRadius: '14px',
              boxShadow: idx === 0 ? '0 2px 16px #6c63ff33' : '0 1px 8px #181a2b22',
              padding: '16px 10px 12px 10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 140,
              position: 'relative',
              border: '1.2px solid #2d2e6c',
              transition: 'box-shadow 0.18s, border-color 0.18s, transform 0.18s',
            }}>
              <div style={{
                fontSize: 28,
                marginBottom: 8,
                alignSelf: 'center',
                color: '#7b61ff',
                filter: 'drop-shadow(0 1px 6px #7b61ff33)'
              }}>{project.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#fff', marginBottom: 4 }}>
                {project.title}
              </div>
              <div style={{ color: '#b0b3c6', fontSize: '0.89rem', marginBottom: 8, minHeight: 32 }}>
                {project.description}
              </div>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 4 }}>
                {project.stack.map(tech => (
                  <span key={tech.name} style={{
                    background: tech.color,
                    color: '#fff',
                    borderRadius: 10,
                    padding: '1px 8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    boxShadow: '0 1px 2px 0 #7b61ff22',
                    opacity: 0.92,
                  }}>{tech.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section - Let's Work Together */}
      <section id="contact" className="section" style={{background: 'none', boxShadow: 'none', maxWidth: '1200px', margin: '0 auto 32px auto', padding: '0 0 32px 0'}}>
        <h2 style={{
          color: '#a084fa',
          fontSize: '2.6rem',
          textAlign: 'center',
          marginBottom: 0,
          fontWeight: 800,
          letterSpacing: 1.2
        }}>Let's Work Together</h2>
        <p style={{
          color: '#b0b3c6',
          textAlign: 'center',
          margin: '8px 0 36px 0',
          fontSize: '1.18rem',
          fontWeight: 500
        }}>
          Ready to build something amazing? Let's connect and create your next project.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          margin: '0 auto',
        }}>
          {/* Left: Contact Info */}
          <div className="contact-card" style={{
            flex: '1 1 320px',
            minWidth: 260,
            maxWidth: 420,
            background: 'none',
            borderRadius: 12,
            boxShadow: '0 1px 8px #181a2b22',
            padding: '18px 10px 12px 10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0',
            border: '1.2px solid #2d2e6c',
            width: '100%',
          }}>
            <div style={{
              background: '#ffe066',
              borderRadius: '50%',
              width: 54,
              height: 54,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 18,
              boxShadow: '0 2px 12px #ffe06644',
            }}>
              <svg width="28" height="28" fill="none" stroke="#23244d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 19c7 0 8-3 8-7V7l-8-4-8 4v5c0 4 1 7 8 7z"/></svg>
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff', marginBottom: 8, textAlign: 'center' }}>Get In Touch</div>
            <div style={{ color: '#b0b3c6', fontSize: '1.01rem', marginBottom: 18, textAlign: 'center' }}>
              I'm always open to new opportunities, collaborations, or just a friendly chat. Drop me a message or connect with me on social media!
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
              <a href="mailto:princetew2001@gmail.com" style={{ color: '#a084fa', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="20" height="20" fill="none" stroke="#a084fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="M22 6l-10 7L2 6"/></svg>
                princetew2001@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/prince-tewatia-181a42192" target="_blank" rel="noopener noreferrer" style={{ color: '#4fc3f7', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="20" height="20" fill="none" stroke="#4fc3f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 8a4 4 0 0 1 4 4v6M2 8v10M8 8v10"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/kilwish1997" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                GitHub
              </a>
              <a href="https://www.instagram.com/prince.tewatia_/" target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="20" height="20" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
                Instagram
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="contact-card" style={{
            flex: '1 1 320px',
            minWidth: 260,
            maxWidth: 420,
            background: 'none',
            borderRadius: 12,
            boxShadow: '0 1px 8px #181a2b22',
            padding: '18px 10px 12px 10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0',
            border: '1.2px solid #2d2e6c',
            width: '100%',
          }}>
            <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }} onSubmit={handleSubmit}>
              <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff', marginBottom: 8, textAlign: 'center' }}>Send Message</div>
              <div style={{ color: '#b0b3c6', fontSize: '0.9rem', textAlign: 'center', marginBottom: 12 }}>
                Please use Gmail, Yahoo, Hotmail, or Outlook addresses
              </div>
              <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleInputChange} style={{
                background: 'rgba(35,36,77,0.28)',
                border: '1.5px solid #7b61ff44',
                borderRadius: 8,
                padding: '12px 14px',
                color: '#fff',
                fontSize: '1.05rem',
                marginBottom: 0,
                outline: 'none',
              }} required />
              <input type="email" placeholder="your.email@gmail.com" name="email" value={formData.email} onChange={handleInputChange} onBlur={handleEmailBlur} style={{
                background: 'rgba(35,36,77,0.28)',
                border: emailError ? '1.5px solid #f44336' : '1.5px solid #7b61ff44',
                borderRadius: 8,
                padding: '12px 14px',
                color: '#fff',
                fontSize: '1.05rem',
                marginBottom: 0,
                outline: 'none',
              }} required />
              
              {/* Email Error Message */}
              {emailError && (
                <div style={{
                  color: '#f44336',
                  fontSize: '0.85rem',
                  marginTop: '4px',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <svg width="14" height="14" fill="none" stroke="#f44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  {emailError}
                </div>
              )}
              
              <textarea placeholder="Tell me about your project..." rows={4} name="message" value={formData.message} onChange={handleInputChange} style={{
                background: 'rgba(35,36,77,0.28)',
                border: '1.5px solid #7b61ff44',
                borderRadius: 8,
                padding: '12px 14px',
                color: '#fff',
                fontSize: '1.05rem',
                marginBottom: 0,
                outline: 'none',
                resize: 'vertical',
              }} required />
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div style={{
                  background: 'rgba(76, 175, 80, 0.1)',
                  border: '1px solid #4caf50',
                  borderRadius: 8,
                  padding: '12px',
                  color: '#4caf50',
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  marginBottom: 8
                }}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{
                  background: 'rgba(244, 67, 54, 0.1)',
                  border: '1px solid #f44336',
                  borderRadius: 8,
                  padding: '12px',
                  color: '#f44336',
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  marginBottom: 8
                }}>
                  ✗ EmailJS not configured. Please set up your EmailJS account first.
                  <br />
                  <small style={{ fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                    Check the console for detailed error information.
                  </small>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting || emailError}
                style={{
                  background: isSubmitting || emailError ? '#666' : '#7b61ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '14px 0',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  marginTop: 8,
                  boxShadow: '0 2px 8px #7b61ff22',
                  cursor: isSubmitting || emailError ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                  opacity: isSubmitting || emailError ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : emailError ? 'Fix Email Error' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer Section - Modern Centered */}
      <footer style={{
        width: '100%',
        background: 'linear-gradient(90deg, #181a2b 60%, #23244d 100%)',
        color: '#b0b3c6',
        padding: '48px 0 0 0',
        textAlign: 'center',
        fontSize: '1.05rem',
        marginTop: 32,
        borderTop: '1.5px solid #23244d',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div className="footer-bounce" style={{ fontWeight: 800, color: '#a084fa', fontSize: '2.2rem', marginBottom: 8 }}>Prince Tewatia</div>
          <div style={{ color: '#b0b3c6', fontSize: '1.18rem', marginBottom: 18 }}>
            App and Frontend Developer passionate about building scalable solutions
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginBottom: 24 }}>
            <a href="https://www.linkedin.com/in/prince-tewatia-181a42192" target="_blank" rel="noopener noreferrer" style={{ color: '#a084fa', textDecoration: 'none', fontWeight: 600, fontSize: 28 }} title="LinkedIn" aria-label="LinkedIn">
              <svg width="28" height="28" fill="none" stroke="#a084fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 8a4 4 0 0 1 4 4v6M2 8v10M8 8v10"/></svg>
            </a>
            <a href="https://github.com/kilwish1997" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b3c6', textDecoration: 'none', fontWeight: 600, fontSize: 28 }} title="GitHub" aria-label="GitHub">
              <svg width="28" height="28" fill="none" stroke="#b0b3c6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a href="https://www.instagram.com/prince.tewatia_/" target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c', textDecoration: 'none', fontWeight: 600, fontSize: 28 }} title="Instagram" aria-label="Instagram">
              <svg width="28" height="28" fill="none" stroke="#e1306c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
            </a>
            <a href="mailto:princetew2001@gmail.com" style={{ color: '#4fc3f7', textDecoration: 'none', fontWeight: 600, fontSize: 28 }} title="Email" aria-label="Email">
              <svg width="28" height="28" fill="none" stroke="#4fc3f7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="M22 6l-10 7L2 6"/></svg>
            </a>
          </div>
          <div style={{ width: 180, height: 4, borderRadius: 3, margin: '0 auto 20px auto', background: 'linear-gradient(90deg, #7b61ff 0%, #00eaff 60%, #e14b7b 100%)', opacity: 0.95 }}></div>
        </div>
        <hr style={{ display: 'none' }} />
        <div style={{ fontSize: '1.08rem', color: '#b0b3c6', marginBottom: 10, marginTop: 0 }}>
          &copy; {new Date().getFullYear()} Prince Tewatia. All rights reserved.
        </div>
      </footer>
      {/* Responsive styles for the contact cards */}
      <style>{`
        @media (max-width: 900px) {
          #contact > div {
            flex-direction: column !important;
            gap: 18px !important;
            align-items: stretch !important;
          }
          #contact > div > div {
            min-width: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
