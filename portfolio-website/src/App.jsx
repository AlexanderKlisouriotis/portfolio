import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isDarkMode, setIsDarkMode] = useState(true)

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark')
  }

  return (
    <div className="portfolio" data-theme={isDarkMode ? 'dark' : 'light'}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-text">Alex</div>
          <ul className="nav-menu">
            <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Alex</h1>
          <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
          <p className="hero-description">
            I build beautiful, responsive web applications with modern technologies
          </p>
          <button className="cta-button" onClick={() => scrollToSection('projects')}>
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer with a strong focus on creating intuitive and engaging user experiences. 
                With expertise in React, JavaScript, and modern web technologies, I transform ideas into fully functional web applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>E-Commerce Platform</h3>
              </div>
              <p>
                A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include 
                product filtering, shopping cart, and integrated payment processing.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Task Management App</h3>
              </div>
              <p>
                A collaborative task management application with real-time updates. Users can create projects, 
                assign tasks, and track progress with an intuitive dashboard.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Firebase</span>
                <span className="tag">Tailwind CSS</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Weather Dashboard</h3>
              </div>
              <p>
                A responsive weather application that displays current conditions and forecasts. 
                Built with React and integrated with weather APIs.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">API</span>
                <span className="tag">CSS Grid</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript / ES6+</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Vite</li>
                <li>Firebase</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <p className="contact-description">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">Email Me</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link">Twitter</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Alex. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
