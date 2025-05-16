import React, { useState, useEffect, useRef } from 'react';

const ProgressRing = ({ skill, percentage, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const ringRef = useRef(null);
  
  // Constants for svg circle
  const radius = 60;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

  // Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = ringRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);
  
  // Animate percentage when visible
  useEffect(() => {
    if (!isVisible) return;
    
    let timeout;
    
    const animatePercentage = () => {
      timeout = setTimeout(() => {
        setCurrentPercentage(prev => {
          const next = prev + 1;
          if (next <= percentage) {
            animatePercentage();
            return next;
          }
          return percentage;
        });
      }, 15);
    };
    
    // Add delay before starting animation
    const startDelay = setTimeout(() => {
      animatePercentage();
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(startDelay);
    };
  }, [isVisible, percentage, delay]);
  
  return (
    <div className="flex flex-col items-center group" ref={ringRef}>
      {/* Icon */}
      <div className="mb-4">
        <span className="text-3xl">{skill.icon}</span>
      </div>
      
      {/* Progress ring */}
      <div className="relative inline-flex items-center justify-center">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            stroke="#27272a"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          
          {/* Progress circle */}
          <circle
            stroke="url(#gradientStroke)"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s ease" }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="drop-shadow-lg"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#afff0f" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-neon-green">{currentPercentage}%</span>
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark-50 px-3 py-1.5 rounded-lg border border-neon-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap shadow-glow">
          {skill.name}
        </div>
      </div>
      
      {/* Skill name */}
      <h3 className="mt-4 font-medium text-light">{skill.name}</h3>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "JavaScript", percentage: 95, icon: "⚡", delay: 0 },
    { name: "React", percentage: 90, icon: "⚛️", delay: 200 },
    { name: "Next.js", percentage: 85, icon: "🚀", delay: 400 },
    { name: "Node.js", percentage: 80, icon: "🟢", delay: 600 },
    { name: "TypeScript", percentage: 85, icon: "🔷", delay: 800 },
    { name: "TailwindCSS", percentage: 90, icon: "🎨", delay: 1000 },
    { name: "Machine Learning", percentage: 75, icon: "🧠", delay: 1200 },
    { name: "Python", percentage: 80, icon: "🐍", delay: 1400 }
  ];
  
  return (
    <section id="skills" className="py-20 bg-dark-50 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-neon-green opacity-5 blur-3xl rounded-full"></div>
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="title-gradient text-3xl md:text-5xl font-bold mb-4">My Superpowers</h2>
          <p className="text-light/70 max-w-2xl mx-auto">Technical skills I&apos;ve mastered through years of experience and continuous learning.</p>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-16">
          {skills.map((skill, index) => (
            <ProgressRing key={index} skill={skill} percentage={skill.percentage} delay={skill.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 