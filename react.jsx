import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Cloud, Globe, Calendar, MapPin, Award, User, Briefcase, GraduationCap, FolderOpen } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Check URL hash on load
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => scrollToSection(hash), 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial hash
    handleHashChange();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const skills = {
    languages: ['Java', 'C++', 'Python', 'JavaScript', 'C#', 'TypeScript'],
    frontend: ['React.js', 'HTML5', 'CSS', 'Redux', 'Material UI', 'Tailwind', 'Bootstrap'],
    backend: ['Spring Boot', 'Node.js', 'Express.js', 'Django', '.NET', 'RESTful APIs'],
    database: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
    cloud: ['AWS EC2', 'AWS S3', 'AWS RDS', 'Docker', 'Jenkins'],
    testing: ['Selenium', 'JUnit', 'Postman', 'JIRA']
  };

  const projects = [
    {
      title: 'SkillMatch - AI Chrome Extension',
      tech: ['React.js', 'Google Gemini', 'Node.js', 'Express.js', 'Redux Toolkit'],
      description: 'AI-driven Chrome extension for resume analysis and job matching with 22+ international users and 70% engagement rate.',
      highlights: ['Open-source with community contributions', 'Real-time job fit analysis', 'Auto-generated cover letters'],
      date: 'Dec 2024',
      links: { github: '#', demo: '#' }
    },
    {
      title: 'FriendsVault - Social Media Platform',
      tech: ['React.js', 'Node.js', 'MongoDB', 'AWS S3', 'AWS EC2'],
      description: 'Full-stack social platform with 99.9% uptime supporting 1,000+ concurrent users.',
      highlights: ['AWS cloud integration', 'Material UI design', 'JWT authentication'],
      date: 'Sep 2024',
      links: { github: '#', demo: '#' }
    },
    {
      title: 'Bank Management System',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Spring Security'],
      description: 'Secure banking backend with JWT authentication and role-based access control.',
      highlights: ['95% test coverage', 'RESTful APIs', 'ACID compliance'],
      date: 'Jun 2024',
      links: { github: '#' }
    },
    {
      title: 'Sync-Sphere: Distributed File Storage',
      tech: ['Django', 'Docker', 'MinIO', 'Nginx', 'Bootstrap'],
      description: 'Distributed file storage system with active-active replication and 40% latency reduction.',
      highlights: ['Load balancing', 'Zero downtime', 'Checksum verification'],
      date: 'Mar 2025',
      links: { github: '#' }
    }
  ];

  const certifications = [
    'Creating Spring Boot Microservices',
    'Learning Jira Software',
    'Learning Bash Scripting',
    'Introduction to Spark SQL and DataFrames',
    'React: Creating and Hosting a FullStack Site',
    'Selenium Essential Training'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      // Update URL hash without triggering page jump
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sanjay Suthar
            </div>
            <div className="hidden lg:flex space-x-6">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' },
                { name: 'Certifications', id: 'experience' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`hover:text-blue-400 transition-colors duration-300 relative group cursor-pointer text-sm ${
                    activeSection === item.id ? 'text-blue-400' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-white">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Sanjay Suthar
            </h1>
            <div className="text-2xl md:text-3xl mb-6 text-gray-300">
              <span className="typing-animation">Full-Stack Developer & Cloud Architect</span>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting scalable, secure, and innovative software solutions with modern technologies.
              Specialized in React.js, Spring Boot, AWS, and cloud-native applications.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:suthar73@uwindsor.ca" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+15198181726" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Phone className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/sanjays10" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Sanjay-10" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold">Professional Summary</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Motivated software developer with hands-on experience in full-stack development, 
                  cloud-native applications, and scalable system design. Passionate about building 
                  secure, user-centric software that makes a difference.
                </p>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400">Master of Applied Computing</h4>
                    <p className="text-gray-300">University of Windsor | GPA: 87.5%</p>
                    <p className="text-sm text-gray-400">May 2024 – Present</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400">Bachelor of Engineering - IT</h4>
                    <p className="text-gray-300">University of Mumbai | CGPI: 8.34/10</p>
                    <p className="text-sm text-gray-400">Aug 2019 – May 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-2xl font-semibold">Achievements</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    22+ international users for SkillMatch Chrome Extension
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    99.9% uptime for production applications
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    95% test coverage in banking system
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
                    40% latency reduction in distributed systems
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-red-400 mr-3" />
                  <h3 className="text-2xl font-semibold">Location</h3>
                </div>
                <p className="text-gray-300">Windsor, Ontario, Canada</p>
                <p className="text-sm text-gray-400 mt-2">Open to remote opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {category === 'languages' && <Code className="w-6 h-6 text-blue-400 mr-3" />}
                  {category === 'frontend' && <Globe className="w-6 h-6 text-green-400 mr-3" />}
                  {category === 'backend' && <Database className="w-6 h-6 text-purple-400 mr-3" />}
                  {category === 'database' && <Database className="w-6 h-6 text-yellow-400 mr-3" />}
                  {category === 'cloud' && <Cloud className="w-6 h-6 text-cyan-400 mr-3" />}
                  {category === 'testing' && <Award className="w-6 h-6 text-pink-400 mr-3" />}
                  <h3 className="text-xl font-semibold capitalize">{category.replace('_', ' ')}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 rounded-full text-sm backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-200"
                      style={{
                        animationDelay: `${index * 100 + skillIndex * 50}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="glass-card p-8 hover:bg-white/10 transition-all duration-500 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FolderOpen className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <a href={project.links.github} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">{project.date}</span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-blue-400">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Experience & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-orange-400 mr-3" />
                <h3 className="text-2xl font-bold">Professional Experience</h3>
              </div>

              <div className="border-l-2 border-orange-400/30 pl-6 ml-3">
                <div className="relative">
                  <div className="absolute -left-9 w-4 h-4 bg-orange-400 rounded-full" />
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-orange-400">Web Development Intern</h4>
                    <p className="text-gray-300 font-medium">CodeClause, Mumbai, India</p>
                    <p className="text-sm text-gray-400 mb-3">Apr 2023 – May 2023</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2" />
                        <p className="text-gray-300 text-sm">
                          Collaborated with cross-functional IT team ensuring 99.9% high availability in production environments
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2" />
                        <p className="text-gray-300 text-sm">
                          Optimized SQL queries reducing execution time by 25% through database performance tuning
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2" />
                        <p className="text-gray-300 text-sm">
                          Participated in Agile ceremonies contributing to 15% faster delivery time for key milestones
                        </p>
                      </div>
                      <div className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3 mt-2" />
                        <p className="text-gray-300 text-sm">
                          Achieved 95% success rate in meeting tight deadlines in fast-paced environment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold">Recent Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={cert} className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-4" />
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
                <p className="text-green-400 font-semibold mb-2">Continuous Learning</p>
                <p className="text-gray-300 text-sm">
                  Actively pursuing new technologies and certifications to stay at the forefront of software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="glass-card p-12 mb-12">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to build something amazing together? I'm always open to discussing new opportunities, 
              innovative projects, and exciting collaborations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <a href="mailto:suthar73@uwindsor.ca" className="group">
                <div className="flex items-center justify-center p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group-hover:scale-105">
                  <Mail className="w-6 h-6 text-blue-400 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold text-blue-400">Email</div>
                    <div className="text-gray-300">suthar73@uwindsor.ca</div>
                  </div>
                </div>
              </a>

              <a href="tel:+15198181726" className="group">
                <div className="flex items-center justify-center p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-300 group-hover:scale-105">
                  <Phone className="w-6 h-6 text-green-400 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold text-green-400">Phone</div>
                    <div className="text-gray-300">(519) 818-1726</div>
                  </div>
                </div>
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/sanjays10" className="p-4 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </a>
              <a href="https://github.com/Sanjay-10" className="p-4 bg-gray-600/20 rounded-full hover:bg-gray-600/30 transition-all duration-300 hover:scale-110 group">
                <Github className="w-6 h-6 text-gray-400 group-hover:text-gray-300" />
              </a>
            </div>
          </div>

          <div className="text-gray-400 text-sm">
            <p>© 2025 Sanjay Suthar. Crafted with passion and cutting-edge technology.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }
        
        .typing-animation {
          border-right: 2px solid #60A5FA;
          animation: typing 3s steps(40) infinite, blink 1s infinite;
        }
        
        @keyframes typing {
          0%, 50% { border-color: transparent; }
          51%, 100% { border-color: #60A5FA; }
        }
        
        @keyframes blink {
          0%, 50% { border-color: #60A5FA; }
          51%, 100% { border-color: transparent; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;