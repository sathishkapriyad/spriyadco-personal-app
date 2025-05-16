import React, { useState } from 'react';

const ProjectCard = ({ image, title, category, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group card relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with zoom effect */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        
        {/* Category tag */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-neon-green text-dark shadow-glow">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content with slide-up animation */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-bold text-light mb-2 group-hover:text-neon-green transition-colors">{title}</h3>
        <p className="text-light/70 mb-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{description}</p>
        <a 
          href={link} 
          className="inline-flex items-center text-neon-green hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          View Case Study
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
      
      {/* Glassmorphism panel over the entire card when hovered */}
      <div className={`absolute inset-0 bg-dark-100/40 backdrop-blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      image: "/dark/assets/imgs/portfolio/1.jpg",
      title: "AI-Powered Dashboard",
      category: "Web Dev",
      description: "A modern dashboard with integrated AI capabilities for data analytics and visualization.",
      link: "#"
    },
    {
      image: "/dark/assets/imgs/portfolio/2.jpg",
      title: "E-commerce Platform",
      category: "UX/UI",
      description: "Full-featured e-commerce platform with modern UI and seamless checkout experience.",
      link: "#"
    },
    {
      image: "/dark/assets/imgs/portfolio/3.jpg",
      title: "ML Image Recognition",
      category: "ML",
      description: "Machine learning application that identifies and categorizes images in real-time.",
      link: "#"
    },
    {
      image: "/dark/assets/imgs/portfolio/4.jpg",
      title: "Financial App",
      category: "Mobile",
      description: "Mobile application for personal finance management with intuitive interfaces.",
      link: "#"
    },
    {
      image: "/dark/assets/imgs/portfolio/5.jpg",
      title: "Real Estate Platform",
      category: "Web Dev",
      description: "Property listing and management system with virtual tour capabilities.",
      link: "#"
    },
    {
      image: "/dark/assets/imgs/portfolio/6.jpg",
      title: "Health Monitoring App",
      category: "React Native",
      description: "Cross-platform mobile app for health monitoring and fitness tracking.",
      link: "#"
    }
  ];
  
  return (
    <section id="portfolio" className="py-20 bg-dark relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-dark-50 to-transparent opacity-30"></div>
      
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="title-gradient text-3xl md:text-5xl font-bold mb-4">My Featured Projects</h2>
          <p className="text-light/70 max-w-2xl mx-auto">A curated selection of my recent work showcasing my skills and expertise in different areas.</p>
        </div>
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <a href="https://github.com/sathishkapriyad" target="_blank" rel="noreferrer" className="btn btn-outline">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 