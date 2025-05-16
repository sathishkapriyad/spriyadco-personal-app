import React, { useState, useEffect } from 'react';

const FloatingIcon = ({ icon, delay, top, left }) => {
  return (
    <div 
      className="absolute animate-float opacity-30 text-neon-green/50"
      style={{ 
        animationDelay: `${delay}s`, 
        top: `${top}%`, 
        left: `${left}%`,
        animation: `float 4s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {icon}
    </div>
  );
};

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer";
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  const techIcons = [
    { icon: '⚛️', delay: 0, top: 20, left: 15 },    // React
    { icon: '🔄', delay: 1, top: 60, left: 25 },    // Redux
    { icon: '🚀', delay: 2, top: 30, left: 80 },    // Next.js
    { icon: '🎨', delay: 0.5, top: 70, left: 85 },  // Tailwind
    { icon: '🧠', delay: 1.5, top: 15, left: 65 },  // AI
    { icon: '📱', delay: 2.5, top: 75, left: 15 },  // Mobile
  ];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-50">
      {/* Animated tech icons */}
      {techIcons.map((tech, index) => (
        <FloatingIcon key={index} {...tech} />
      ))}
      
      {/* Gradient background with blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-50 opacity-60"></div>
      
      {/* Glow effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-green/5 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="title-gradient">DEV IN BRIT</span>
        </h1>
        
        <div className="h-16">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-light mb-10">
            {typedText}<span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <p className="text-light/80 max-w-2xl mx-auto text-lg md:text-xl mb-10">
          Crafting modern web experiences with clean code and exceptional user interfaces that drive results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#portfolio" className="btn btn-outline">
            View My Work
          </a>
        </div>
        
        {/* 3D avatar or animated illustration */}
        <div className="mt-16 relative">
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 bg-neon-green/10 rounded-full blur-md"></div>
            <img 
              src="/dark/assets/imgs/intro/hero-image.png" 
              alt="Dev In Brit" 
              className="relative z-10 w-full h-full object-cover rounded-full border-2 border-neon-green/30"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-4 bg-neon-green/20 blur-xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 