import React from 'react';

const StatCard = ({ value, label }) => {
  return (
    <div className="glass-card flex flex-col items-center justify-center p-4 aspect-square">
      <span className="text-neon-green text-3xl md:text-4xl font-bold glow-text">{value}</span>
      <span className="text-light/80 text-sm mt-1">{label}</span>
    </div>
  );
};

const SkillBadge = ({ name }) => {
  return (
    <span className="inline-flex px-3 py-1 rounded-full bg-dark-100 text-light/90 text-sm border border-neon-green/20">
      {name}
    </span>
  );
};

const About = () => {
  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "50+", label: "Projects" },
    { value: "30+", label: "Happy Clients" }
  ];
  
  const skills = ["JavaScript", "React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Python", "Machine Learning"];
  
  // Decorative background dots
  const dots = Array.from({ length: 20 }, (_, i) => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 0.5 + 0.2, // 0.2 to 0.7rem
    opacity: Math.random() * 0.5 + 0.1 // 0.1 to 0.6
  }));
  
  return (
    <section id="about" className="py-20 bg-dark-50 relative overflow-hidden">
      {/* Background decorative elements */}
      {dots.map((dot, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-neon-green"
          style={{
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            width: `${dot.size}rem`,
            height: `${dot.size}rem`,
            opacity: dot.opacity
          }}
        />
      ))}
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image with effects */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-neon-green/20 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-green/20 via-transparent to-transparent opacity-60 mix-blend-overlay"></div>
              <img 
                src="/dark/assets/imgs/about/profile.jpg" 
                alt="Sathishka Priyad" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-dark rounded-full flex flex-col items-center justify-center border-2 border-neon-green shadow-glow">
              <span className="text-neon-green text-xl font-bold">7+</span>
              <span className="text-light/90 text-xs">Years</span>
              <span className="text-light/90 text-xs">Experience</span>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
          
          {/* Right column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="title-gradient">Me</span>
            </h2>
            
            <h3 className="text-xl md:text-2xl font-medium mb-6">
              I&apos;m a passionate <span className="highlight">Frontend Developer</span> with expertise in creating modern web applications.
            </h3>
            
            <p className="text-light/70 mb-6">
              With over 7 years of experience, I specialize in crafting user-centric interfaces that combine aesthetic appeal with optimal functionality. My approach blends innovative design principles with clean, efficient code to deliver exceptional digital experiences.
            </p>
            
            <p className="text-light/70 mb-8">
              I have a strong foundation in <span className="highlight">JavaScript</span> frameworks like <span className="highlight">React</span> and <span className="highlight">Next.js</span>, along with expertise in <span className="highlight">Machine Learning</span> integration for web applications.
            </p>
            
            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-light/90 font-medium mb-3">Top Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} name={skill} />
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex gap-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 