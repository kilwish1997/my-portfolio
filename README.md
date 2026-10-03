# 🚀 Prince Tewatia — Developer Portfolio

<div align="center">

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-kilwish1997.github.io%2Fmy--portfolio-00eaff?style=for-the-badge&logo=google-chrome&logoColor=white)](https://kilwish1997.github.io/my-portfolio)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Flutter](https://img.shields.io/badge/Flutter-Specialist-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-Language-0175C2?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<br/>

**Modern, responsive, and high-performance developer portfolio built with React 19.**  
Showcasing cross-platform mobile engineering with **Flutter & Dart**, full-stack web platforms (**Next.js**, **React**), and real-time backend integrations.

[**Explore Live Website »**](https://kilwish1997.github.io/my-portfolio) · [**View Projects**](#-featured-projects) · [**Contact Me**](#-connect--socials)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Featured Projects](#-featured-projects)
- [Tech Stack](#-tech-stack)
- [Work Experience](#-work-experience)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [EmailJS Setup](#-emailjs-setup)
- [Connect & Socials](#-connect--socials)

---

## 💡 Overview

This portfolio is designed to showcase the work, engineering philosophies, and software systems built by **Prince Tewatia** — a Flutter & Mobile Application Engineer with experience delivering industrial dashboards, conversational AI applications, and live production web platforms.

Built using **React 19**, **CSS modern custom properties**, ambient glowing orbs, and responsive design principles, this site highlights real-world applications with rich interactive feedback and seamless dark/light theme switching.

---

## ✨ Key Features

- 🌓 **Dynamic Theme Switching**: Seamless Dark and Light mode toggling with `localStorage` state persistence.
- 💻 **Interactive Code Terminal**: Embedded JSON terminal card showcasing developer credentials, skills, and tooling.
- 📱 **Mobile-First & Fully Responsive**: Optimized layouts across mobile phones, tablets, laptops, and large desktop screens.
- 📬 **Live Contact Form**: Fully integrated contact system powered by **EmailJS** for direct client & recruiter messaging with instant validation and toast feedback.
- 🎨 **Ambient UI Aesthetics**: Custom background grid patterns, floating orb gradients, glassmorphism, and micro-interactions.
- ⚡ **Optimized Performance**: Fast bundle load, semantic HTML5 structure, and accessible markup.

---

## 🛠 Featured Projects

| Project | Stack | Key Highlights | Link |
| :--- | :--- | :--- | :---: |
| **FUEVO** | Next.js, React, Geolocation, Cloudinary | Zero-website local SEO and discovery engine serving real queries across neighborhoods with multi-view modes (Tile, List, Map). | [Live Platform](https://fuevo.in) |
| **Perplexity Bot App** | Flutter, Dart, FastAPI, WebSockets, Gemini AI | Conversational AI assistant with RAG (Retrieval-Augmented Generation), vector similarity search, and low-latency bidirectional text streaming. | [GitHub](https://github.com/kilwish1997) |
| **TV Dashboard Apps** | Flutter, Dart, REST APIs, SharedPreferences | Industrial manufacturing real-time monitoring suite tracking Cutting, Stitching, and Finishing telemetry with offline caching for smart displays. | [GitHub](https://github.com/kilwish1997) |
| **HR & Time Management System** | Flutter, Dart, GPS Geofencing, REST APIs | Enterprise Employee Self-Service (ESS) mobile app with automated GPS boundary check-in/out, live attendance charts, and digital pay slips. | [GitHub](https://github.com/kilwish1997) |
| **Machine Maintenance & Breakdown App** | Flutter, Dart, QR Scanner, Downtime Analytics | Factory-floor equipment maintenance tracker enabling instant breakdown tickets via QR code scanning and lifecycle tracking for supervisors & mechanics. | [GitHub](https://github.com/kilwish1997) |
| **Café Management System** | Java, Swing/JFrame, MySQL | Desktop Point of Sale (POS) and inventory tracker with cashier workflows, catalog management, and daily reporting. | [GitHub](https://github.com/kilwish1997) |

---

## 🧰 Tech Stack

### Mobile & Cross-Platform
- **Flutter & Dart**: Android, iOS, Web, Windows, macOS, Linux, and 10ft TV UI layout architecture
- **State Management & Offline Storage**: Provider, Riverpod, SharedPreferences, SQLite
- **Hardware Integration**: GPS Geofencing, Camera QR Scanner, Bluetooth, Device Sensors

### Frontend & Web
- **React 19** & **Next.js**
- **Modern CSS3**: CSS Variables, Glassmorphism, Ambient Glow, Flexbox/Grid
- **Animations & Effects**: GSAP, Three.js, FontAwesome

### Backend, APIs & Data
- **RESTful APIs** & **WebSockets** (bidirectional low-latency streaming)
- **FastAPI** (Python) & **Java** (OOP, Core Java)
- **Databases**: MySQL, Cloud Firestore, Vector Embeddings (RAG)

### Deployment & Tooling
- **Git & GitHub**
- **GitHub Pages** (gh-pages automated workflow)
- **EmailJS Integration**
- **Modern AI Development**: Google Antigravity & AI-augmented delivery

---

## 💼 Work Experience

- **App Developer (Flutter & API Integration)** — *Intellisync Company* (March 2025 – Present)
  - Architected TV Dashboard Apps for textile & garment assembly lines tracking industrial operations in real time.
  - Built resilient offline caching layers with SharedPreferences and REST/WebSocket APIs for shop-floor uptime.
  - Maintained a single unified cross-platform Flutter codebase for mobile, web, and smart TVs.

- **Java Developer Trainee** — *Appwars Technologies Pvt Ltd* (June 2022 – Sept 2022)
  - Engineered modular backend services in Java following OOP best practices.
  - Performed SQL query tuning and performance optimizations, boosting throughput by 20%.

---

## 📂 Repository Structure

```plaintext
my-portfolio/
├── public/
│   ├── index.html            # Main HTML template with meta & social tags
│   ├── manifest.json         # PWA configuration
│   └── resume.pdf            # Downloadable developer resume
├── src/
│   ├── components/
│   │   ├── About.js          # Biography, core stats, and engineering pillars
│   │   ├── Ballpit.js        # Interactive Canvas particle effect
│   │   ├── Contact.js        # Interactive EmailJS contact form
│   │   ├── Education.js      # Academic history & coursework
│   │   ├── Experience.js     # Career timeline & work experience
│   │   ├── Footer.js         # Footer with quick links & social buttons
│   │   ├── Hero.js           # Hero section & interactive terminal
│   │   ├── Navbar.js         # Navigation header & theme switcher
│   │   ├── Projects.js       # Filterable showcase of featured projects
│   │   ├── Skills.js         # Categorized skills matrix & badges
│   │   └── Toast.js          # Feedback notifications
│   ├── hooks/
│   │   └── useIntersectionObserver.js # Scroll reveal animations
│   ├── App.css               # Core component styling & animations
│   ├── App.js                # Root application container & theme state
│   ├── emailjs-config.js     # EmailJS credentials configuration
│   ├── index.css             # Design tokens & color system
│   └── index.js              # React 19 entry point
├── package.json              # Project scripts & dependencies
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

To run this portfolio locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/kilwish1997/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm start
```
The application will launch automatically in your browser at `http://localhost:3000`.

### 4. Build for production
```bash
npm run build
```

---

## 🌐 Deployment

This project is configured for deployment with **GitHub Pages**:

```bash
npm run deploy
```
This runs `predeploy` (`npm run build`) and publishes the optimized static bundle to the `gh-pages` branch.

---

## ✉️ EmailJS Setup

The contact form is configured to send messages using EmailJS. To customize your own service credentials, edit `src/emailjs-config.js`:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id',
  TEMPLATE_ID: 'your_template_id',
  PUBLIC_KEY: 'your_public_key',
};
```
Refer to [EMAILJS_SETUP.md](EMAILJS_SETUP.md) for detailed configuration instructions.

---

## 📬 Connect & Socials

- **Portfolio**: [kilwish1997.github.io/my-portfolio](https://kilwish1997.github.io/my-portfolio)
- **LinkedIn**: [linkedin.com/in/prince-tewatia-181a42192](https://www.linkedin.com/in/prince-tewatia-181a42192/)
- **GitHub**: [@kilwish1997](https://github.com/kilwish1997)
- **Email**: [princetew2001@gmail.com](mailto:princetew2001@gmail.com)

---

<div align="center">
  <sub>Designed & Developed by Prince Tewatia • Built with React 19</sub>
</div>
