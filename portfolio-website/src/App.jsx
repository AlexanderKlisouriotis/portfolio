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
          <h1 className="hero-title">Hi, I'm Alexander</h1>
          <p className="hero-subtitle">Software Engineer & Problem Solver</p>
          <p className="hero-description">
            Building scalable, high-impact solutions with React, JavaScript, and Python. Experienced in full-stack development and cross-functional collaboration.
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
                I'm an aspiring software engineer with a foundation in automation, technical support, and cross-functional problem-solving. I'm passionate about optimizing systems and building scalable solutions in tech-driven environments.
              </p>
              <p>
                Currently working at The Boon as a Software Engineer, where I develop core systems and features using JavaScript, Python, and React. I thrive in fast-paced startup environments and am committed to shipping high-quality, performant solutions.
              </p>
              <p>
                Bachelor of Science in Computer Science from Pace University (Cum Laude, Dean's List). Experienced with full-stack development, system automation, and cross-functional collaboration.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>BS CS</h3>
                <p>Pace University</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Tech Experience</p>
              </div>
              <div className="stat">
                <h3>NYC</h3>
                <p>Based & Remote</p>
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
                <h3>Buff-Bot</h3>
              </div>
              <p>
                A React-based workout logging and regimen generator. Built a responsive fitness tracking app with user-driven workout logging, personalized training suggestions, and custom routine creation. Served as Scrum Guardian coordinating sprint planning.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Scrum</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Mutual Aid Website</h3>
              </div>
              <p>
                Informational site for a grassroots aid network. Designed and developed a static site using HTML and CSS with integrated Google web apps to streamline community resource access and volunteer sign-ups.
              </p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Google Apps</span>
              </div>
              <a href="#" className="project-link">View Project →</a>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>The Boon Platform</h3>
              </div>
              <p>
                Core systems development for a dynamic media platform delivering interactive content. Built scalable front- and back-end features including custom logic for user archetyping and real-time chat integration.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Python</span>
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
              <h3>Languages</h3>
              <ul>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Databases</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Supabase</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Methodologies & Tools</h3>
              <ul>
                <li>Scrum & Agile</li>
                <li>System Automation</li>
                <li>G Suite Administration</li>
                <li>CRM Systems</li>
                <li>Full-Stack Development</li>
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
            I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:aklisouriotis@gmail.com" className="contact-link">Email Me</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            <a href="tel:+19176027438" className="contact-link">Call Me</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Alexander Klisouriotis. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
